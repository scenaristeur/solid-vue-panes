<template>
  <div>
    Chat url :  {{ url }}
    <beautiful-chat
    :participants="participants"
    :titleImageUrl="titleImageUrl"
    :onMessageWasSent="onMessageWasSent"
    :messageList="messageList"
    :newMessagesCount="newMessagesCount"
    :isOpen="isChatOpen"
    :close="closeChat"
    :icons="icons"
    :open="openChat"
    :showEmoji="true"
    :showFile="true"
    :showEdition="true"
    :showDeletion="true"
    :showTypingIndicator="showTypingIndicator"
    :showLauncher="true"
    :showCloseButton="true"
    :colors="colors"
    :alwaysScrollToBottom="alwaysScrollToBottom"
    :messageStyling="messageStyling"
    @onType="handleOnType"
    @edit="editMessage" />
  </div>
</template>

<script>


import CloseIcon from '@/assets/close-icon.png'
import OpenIcon from '@/assets/logo-no-bg.svg'
import FileIcon from '@/assets/file.svg'
import CloseIconSvg from '@/assets/close.svg'

import { fetchDocument } from 'tripledoc';
import { sioc, dct, foaf } from 'rdf-namespaces'

export default {
  name: 'app',
  props: {
    url: String
  },
  created(){
    console.log("chat url:",this.url)
    this.initChat(this.url)
  },
  watch: {
    url: function (url) {
      if(url != null){
        this.sendMessage("switched to "+url)
        this.initChat(url)
      }
    }
  },
  methods: {
    initChat(url){
      this.root = url
      this.root.endsWith('/') ? this.root = this.root.slice(0, -1) : ""
      this.limite =  new Date("01/20/2020") //("07/20/2020")//
      this.today = new Date()
      this.date = this.today
      console.log("date",this.date)
      this.fileUrl =  [this.root, this.date.getFullYear(), ("0" + (this.date.getMonth() + 1)).slice(-2), ("0" + this.date.getDate()).slice(-2), "chat.ttl"].join("/")
      this.$store.commit('chat/setFileUrl', this.fileUrl)
      this.$store.commit('chat/setRoot', this.root)
      let withoutProtocol = this.root.split('//')[1]
      let sock = withoutProtocol.split('/')[0]+"/"
      let socket = new WebSocket('wss://'+sock, ['solid.0.1.0']);
      socket.onopen = function() {
        socket.send('sub '+this.fileUrl);
      }.bind(this)
      socket.onmessage = function(msg) {
        if (msg.data && msg.data.slice(0, 3) === 'pub') {
          // resource updated, refetch resource
          this.updateMessages(msg.data.substring(4), "top")
        }
      }.bind(this)
      //  this.updateMessages(this.fileUrl, "botto")
      this.loadMore()


    },
    loadMore: function() {
      this.busy = true;
      //  console.log("Load")
      if (this.limite <= this.date ){
        //  let date =  this.date
        //  console.log(this.date)
        let path = [this.root, this.date.getFullYear(), ("0" + (this.date.getMonth() + 1)).slice(-2), ("0" + this.date.getDate()).slice(-2), "chat.ttl"].join("/")
        console.log(path)

        //  let messages = this.read(path)
        //this.data = this.data.concat(messages);
        this.updateMessages(path, "bottom")

        //  this.data.push({ name: count++ , date:date});
        this.date.setDate(this.date.getDate() -1)

      }else{
        //console.log("over", this.limite)
        alert ("No message before "+this.limite)
      }
      this.busy = false;

    },
    async updateMessages(url, sens){
      console.log(url, sens)
      try{
        const chatDoc = await fetchDocument(url);
        let  subjects = chatDoc.findSubjects();
        subjects = subjects.filter( this.onlyUnique )
      //  console.log(subjects)
        //let triples = []
        let messages = []
        var existingIds = this.data.map((obj) => obj.id);
        //    console.log(existingIds)
        for  (let s of subjects) {
          //    console.log("Compare",s.asRef(), this.root+"/index.ttl#this")
          if (s.asRef() != this.root+"/index.ttl#this" && ! existingIds.includes(s.asRef())){
        //    console.log(s)
            //  let t = s.getTriples()
            let created = s.getString(dct.created)
            let content = s.getLiteral(sioc.content)
            let maker = s.getNodeRef(foaf.maker)

            let t={id:s.asRef(),
              created: new Date(created).toLocaleString(),
              content: content,
              maker: maker,
              //  pic: `${p}`
              //  parts: parts,
              //  parent: parent
            }

            console.log(t)
            //  triples.push(t)
            messages.unshift(t)

          }


        }
        console.log("m",messages)
        if (sens == "top"){
          this.today_messages = []
          this.today_messages = messages
          //  console.log("TODAY",this.today_messages)
        }else{
          this.old_messages.push.apply(this.old_messages, messages)
          //  console.log("OLD",this.old_messages)
        }
        //console.log("TODAY",this.today_messages)
        //console.log("OLD",this.old_messages)
        this.data = []
        this.data = this.today_messages.concat(this.old_messages)
        //console.log("TODAY",this.today_messages)
        //console.log("OLD",this.old_messages)
        console.log("DATA",this.data)
        this.data.forEach((item) => {
        //  this.sendMessage(item.content)
        let text = item.content
        this.onMessageWasSent({ author: item.maker, type: 'text', data: { text } })
        });

        //console.log("USERS",this.$store.state.chat.users)

        //  console.log(triples)
        //  messages = triples.reverse()
      }catch(e){
        //  console.log(e)
        this.loadMore()
      }
    },
    onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    },
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      this.messageList = [ ...this.messageList, message ]
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    },
    handleScrollToTop () {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    },
    handleOnType () {
      console.log('Emit typing event')
    },
    editMessage(message){
      const m = this.messageList.find(m=>m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    }
  },
  data() {
    return {
      data: [],
      busy: false,
      date: {},
      limite : {},
      //  data :[],
      today_messages: [],
      old_messages: [],

      icons:{
        open:{
          img: OpenIcon,
          name: 'default',
        },
        close:{
          img: CloseIcon,
          name: 'default',
        },
        file:{
          img: FileIcon,
          name: 'default',
        },
        closeSvg:{
          img: CloseIconSvg,
          name: 'default',
        },
      },
      participants: [
        {
          id: 'user1',
          name: 'Matteo',
          imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
        },
        {
          id: 'user2',
          name: 'Support',
          imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [
        { type: 'text', author: `me`, data: { text: `Say yes!` } },
        { type: 'text', author: `user1`, data: { text: `No.` } }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: true, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    }
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*  text-align: center;*/
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
