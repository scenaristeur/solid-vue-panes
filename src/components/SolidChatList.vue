<template>
  <div class="message-list">
    <!--
    <b-input-group prepend="Solid Chat url" class="mt-3">
    <b-form-input ref="new_url" placeholder="https://solidarity.inrupt.net/public/Solidarity" vamue="https://solidarity.inrupt.net/public/Solidarity"></b-form-input>
    <b-input-group-append>

    <b-button variant="info" @click="change">Change</b-button>
  </b-input-group-append>
</b-input-group>-->
<div>
  <div class="mb-5" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="300" >


    <b-list-group>
      <b-list-group-item v-for="m in data" :key="m.id">
        <div class="row card-header small m-0">
          <div class="col">
            {{m.maker.split('/').slice(2,3)[0]}}
          </div>

          <div class="col-2">
            {{m.created}}
          </div>
        </div>
        <div class="row m-4">
          {{m.content}}
        </div>
        <!--  <div class="row">
        {{m.id.split("#")[1]}}
      </div>-->
    </b-list-group-item>

  </b-list-group>


</div>

</div>
<SolidChatSend />
</div>

</template>

<script>
import store from "@/store";
import { fetchDocument } from 'tripledoc';
import { sioc, dct, foaf } from 'rdf-namespaces'
import SolidChatSend from '@/components/SolidChatSend'
//import ChatScroller from '@/components/ChatScroller'
import infiniteScroll from 'vue-infinite-scroll'



export default {
  store,
  name: 'SolidChatList',
  components: {
    SolidChatSend,
    //  ChatScroller
  },
  directives: {infiniteScroll},
  props: {
    url: String
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
      //  mainProps: {  }
      //  mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
    }
  },
  created(){
    console.log("chat url:",this.url)
    this.limite =  new Date("01/01/2020")
    this.date = new Date()

    if (this.url != null){
      console.log(this.url)
      this.initChat(this.url)
    }

  },
  watch: {
    url: function (url) {
      if(url != null){
        console.log(url)
        //  this.sendMessage("switched to "+url)
        this.initChat(url)
      }
    }
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
      //  console.log("Load")
      if (this.limite <= this.date ){
        //  let date =  this.date
        //  console.log(this.date)
        let path = [this.root, this.date.getFullYear(), ("0" + (this.date.getMonth() + 1)).slice(-2), ("0" + this.date.getDate()).slice(-2), "chat.ttl"].join("/")
        //  console.log(path)

        //  let messages = this.read(path)
        //this.data = this.data.concat(messages);
        this.date.setDate(this.date.getDate() -1)
        await this.updateMessages(path, "bottom")

        //  this.data.push({ name: count++ , date:date});


      }else{
        //console.log("over", this.limite)
        //alert ("No message before "+this.limite)
        this.data.push({id:this.limite.toLocaleString(), maker:"https://System.solid-vue-panes.really-sorry-about.this-diasppointement", content: "This is the end, my friend, there are no message before that date (*)=:>", created: this.limite.toLocaleString()})
        alert ("No message before "+this.limite)
        this.stopped = true
      }
      this.busy = false;

    },
    async updateMessages(url, sens){
      //    console.log(url, sens)
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

        //  console.log(triples)
        //  messages = triples.reverse()
      }catch(e){
        //  console.log(e)
        ! this.stopped ? this.loadMore() : ""
      }
    },
    onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    },
  }
}
</script>
