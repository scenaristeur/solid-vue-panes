<template>
  <div class="message-list">

    <b-alert
    v-model="showTop"
    class="position-fixed fixed-bottom rounded-0"
    style="z-index: 2000; bottom:30px"
    variant="info"

    dismissible
    >{{title}}
  </b-alert>


  <div class="container mb-0">
    <div class="spinner-border" v-if="busy" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="mb-5" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="300" >


      <b-list-group flush>
        <b-list-group-item v-for="m in data" :key="m.id">
          <div class="item">
            <div class="avatar"></div>
            <div class="maker text-info">
              {{m.maker.split('/').slice(2,3)[0]}}
            </div>
            <div class="content">
              {{m.content}}
            </div>
            <div class="created">
              {{m.created}}
            </div>
            <!--  <div class="row">
            {{m.id.split("#")[1]}}
          </div>-->
        </div>
      </b-list-group-item>

    </b-list-group>


  </div>

</div>
<SolidChatSend />
</div>

</template>

<script>
import { fetchDocument } from 'tripledoc';
import { sioc, dct, foaf } from 'rdf-namespaces'
import SolidChatSend from '@/components/chat/SolidChatSend'
//import ChatScroller from '@/components/ChatScroller'
import infiniteScroll from 'vue-infinite-scroll'



export default {
  name: 'SolidChatList',
  components: {
    SolidChatSend,
    //  ChatScroller
  },
  directives: {infiniteScroll},
  props: {
    channel: Object
  },
  data: function () {
    return {
      data: [],
      busy: false,
      date: {},
      limite : {},
      //  data :[],
      today_messages: [],
      old_messages: [],
      stopped : false,
      root :"",// "https://solidarity.inrupt.net/public/Solidarity", ChatTest
      showTop: true,
      title: "loading"
      //  mainProps: {  }
      //  mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
    }
  },
  /*  created(){
  console.log("chat selected:",this.channel)
  this.url = this.channel.instance.substr(0, this.channel.instance.lastIndexOf("/") + 1);
  this.limite =  new Date("01/01/2020")
  this.date = new Date()

  if (this.url != null){
  console.log(this.url)
  this.initChat(this.url)
}

},*/
watch: {
  channel: function(channel){
    console.log(channel)
  //  this.url = channel.instance
    let d  = channel.created
    console.log(d)
    this.limite =  new Date(d)
    console.log("LIMITE",this.limite)
    this.date = new Date()
    this.initChat(channel.instance)
  },
  /*url: function (url) {
    if(url != null && this.channel.instance != undefined){
      console.log(url)
      //  this.sendMessage("switched to "+url)
      this.initChat(url)
    }
  }*/
},
methods: {
  initChat(url){
    console.log("init : ",url)
    this.today_messages = []
    this.old_messages = []
    this.messages = []
    this.data = []
    this.stopped = false

    this.date  = new Date()
    console.log(this.date)

    this.root = url
    this.root.endsWith('/') ? this.root = this.root.slice(0, -1) : ""

    this.fileUrl =  [this.root, this.date.getFullYear(), ("0" + (this.date.getMonth() + 1)).slice(-2), ("0" + this.date.getDate()).slice(-2), "chat.ttl"].join("/")

  console.log(this.fileUrl)
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
  change: function(){
    this.root = this.$refs.new_url.value
  },
  loadMore: async function() {
    this.busy = true;
    this.showTop = true;
    //  console.log("Load")
    if (this.limite <= this.date ){
      console.log(this.limite)
      //  let date =  this.date
      //  console.log(this.date)
      let path = [this.root, this.date.getFullYear(), ("0" + (this.date.getMonth() + 1)).slice(-2), ("0" + this.date.getDate()).slice(-2), "chat.ttl"].join("/")
      //  console.log(path)

      //  let messages = this.read(path)
      //this.data = this.data.concat(messages);
      this.date.setDate(this.date.getDate() -1)
      this.title = "loading "+this.date.toLocaleDateString()
      this.updateMessages(path, "bottom")

      //  this.data.push({ name: count++ , date:date});


    }else{
      //console.log("over", this.limite)
      //alert ("No message before "+this.limite)
      this.data.push({id:this.limite.toLocaleString(), maker:"https://System.solid-vue-panes.really-sorry-about.this-diasppointement", content: "This is the end, my friend, there are no message before that date (*)=:>", created: this.limite.toLocaleString()})
      alert ("No message before "+this.limite)
      this.stopped = true
    }
    this.busy = false;
    //    this.showTop = false

  },
  async updateMessages(url, sens){
    //    console.log(url, sens)
    this.showTop = true
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
          //  console.log(s)
          //  let t = s.getTriples()
          let created = s.getString(dct.created)
          let content = s.getLiteral(sioc.content)
          let maker = s.getNodeRef(foaf.maker) || "anonymous"

          let t={id:s.asRef(),
            created: new Date(created).toLocaleString(),
            content: content,
            maker: maker,
            //  pic: `${p}`
            //  parts: parts,
            //  parent: parent
          }

          //  console.log(t)
          //  triples.push(t)
          messages.unshift(t)

        }


      }
      //  console.log("m",messages)
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
      //console.log("DATA",this.data)
      //console.log("USERS",this.$store.state.chat.users)
      if (this.data.length == 0){
        this.loadMore()
      }
      //  console.log(triples)
      //  messages = triples.reverse()
    }catch(e){
      //  console.log(e)
      this.showTop = true
      ! this.stopped ? this.loadMore() : ""
    }
    this.showTop = false
  },
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  },
}
}
</script>
<style>
.Asolid-chat-list{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-width: 320px;
  background: #fff;
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0,0,0,.87);
}
.Bitem{
  position: absolute;
  /*  left: 0px;
  top: 0px; */
  margin-left: 0px;
  margin-top: 0px;
  /*  width: 722px; */
  /*  height: 574px; */
  background-color: rgb(255, 255, 255);
}
.avatar{
  position: absolute;
  left: 0px;
  top: 8px;
  width: 29px;
  height: 29px;
  background-image: url(no-avatar.png);
  background-size: contain;
  opacity: .3;
}
.maker{
  position: absolute;
  left: 35px;
  top: 4px;
  width: auto;
  height: auto;
  text-align: left;
}
.content{
  position: relative;
  padding-left: 36px;
  padding-top: 23px;
  padding-bottom: 5px;
  width: 90%;
  height: auto;
  text-align: left;
}
.created{
  color: #C5C5C5;
  font-size: 13px;
  font-weight: normal;
}
</style>
