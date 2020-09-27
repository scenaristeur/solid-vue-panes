<template>
  <div class="solid-chat-send">
    <!--<h1>Room name</h1> -->


    <b-input-group class="mt-3 input" v-if="webId != null" >
      <b-form-input v-model="message" v-on:keyup.enter="send"></b-form-input>
      <b-input-group-append>
        <!--  <b-button variant="outline-success">Button</b-button>-->
        <b-button variant="warning" @click="send" >Send</b-button>
      </b-input-group-append>
    </b-input-group>
    <SolidLoginButton class="mt-3 input" v-else />



  </div>
</template>

<script>
import { fetchDocument, createDocument } from 'tripledoc';
import { sioc, dct, foaf } from 'rdf-namespaces'
import ToastMixin from '@/mixins/ToastMixin'
import ActivityMixin from '@/mixins/ActivityMixin'
import ParleMixin from '@/mixins/ParleMixin'


export default {
  name: 'ParleSend',
  components:{
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton')
  },
  mixins: [ToastMixin, ActivityMixin, ParleMixin],
  data: function () {
    return {
      message: "",
    }
  },
  created(){
    this.fileUrl = this.$store.state.parle.fileUrl
    this.root = this.$store.state.parle.root
    this.url = this.$store.state.parle.url

    if (this.url != undefined && this.url.length > 0){
      let fileName = this.url.substring(this.url.lastIndexOf('/') + 1);
      console.log(fileName)
      this.message = "New chat started from "+this.url+" at "+this.root+fileName
      this.$store.commit('parle/setFileUrl', this.root+fileName)
      console.log("FILEURL : ",this.root+fileName)
      this.bascule(this.root+fileName)

      //  this.send()
      //    this.$store.commit('parle/setFileUrl', this.path+fileName)
    }
  },

  methods: {
    createActivity(){
      this.activity = {
        actor: {name: this.$store.state.solid.webId},
        type:"Create",
        summary: "",
        object:{
          name: this.message,
          url: this.fileUrl,
          type:"Parle"}
        }
        this.sendActivity()
      },
      async send(){
        // please refer to https://github.com/scenaristeur/shighl/blob/9b4b61d06d8a20f55de3f2aa580cbc5fb840d584/src/Shighl-chat.js#L214
        // and https://github.com/LDflex/LDflex/issues/53
        let webId= this.$store.state.solid.webId

        console.log(this.fileUrl)
        if (this.message.length > 0 && webId != null)    {
          console.log(this.message)
          var dateObj = new Date();
          var messageId = "Msg"+dateObj.getTime()
          var date = dateObj.toISOString()
          //  let msgUrl = this.fileUrl+messageId
          /*  console.log(msgUrl)
          await solid.data[msgUrl].dct$created.add(date)
          await solid.data[msgUrl].sioc$content.add(this.message)*/
          console.log("WEBID",this.$store.state.solid.webId)

          let chatDoc = {}

          try{
            chatDoc = await fetchDocument(this.fileUrl);
          } catch(e){
            chatDoc = await createDocument(this.fileUrl);
          }

          //        console.log(chatDoc)
          let subj =   chatDoc.addSubject({identifier:messageId})
          subj.addLiteral(sioc.content, this.message)
          subj.addLiteral(dct.created, date)
          subj.addNodeRef(foaf.maker, webId)
          await chatDoc.save();

          this.message=""
        }else{
          alert ( "You must login before posting ;-)")
        }
        this.createActivity()
        //  await solid.data[msgUrl].foaf$maker.add(namedNode('https://www.test.com')) // namedNode(`${webid}`)
        //  await solid.data.from(this.url)[messageId]['http://www.w3.org/2005/01/wf/flow#message'].add(this.url)
        //this.message = ""
        //  await solid.data.from(this.url)[this.subject]['http://www.w3.org/2005/01/wf/flow#message'].add(namedNode(this.url))
      }
    },
    watch:{
      url(u){
        console.log("url changed",u)
        let fileName = u.substring(u.lastIndexOf('/') + 1);
        console.log(fileName)
        this.$store.commit('parle/setFileUrl', this.path+fileName)
        this.bascule(this.path+fileName)
      }
    },
    computed:{
      webId:{
        get: function() { return this.$store.state.solid.webId},
        set: function() {}
      },
      url: {
        get: function() { return this.$store.state.parle.url},
        set: function() {}
      },
    }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .input {
    position: fixed;
    bottom:0;
    z-index: 999;
  }
  </style>
