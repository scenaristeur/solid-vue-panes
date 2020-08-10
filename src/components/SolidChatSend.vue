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
    <SolidLogin class="mt-3 input" v-else />



  </div>
</template>

<script>
import store from "@/store";
import { fetchDocument } from 'tripledoc';
import {/*namedNode,*/ sioc, dct, foaf } from 'rdf-namespaces'
import SolidLogin from '@/components/solid/SolidLogin.vue'


export default {
  store,
  name: 'SolidChatSend',
  components:{
    SolidLogin
  },

  data: function () {
    return {
      message: "",
    }
  },

  methods: {
    async send(){
      // please refer to https://github.com/scenaristeur/shighl/blob/9b4b61d06d8a20f55de3f2aa580cbc5fb840d584/src/Shighl-chat.js#L214
      // and https://github.com/LDflex/LDflex/issues/53
      let webId= this.$store.state.solid.webId
      let fileUrl = this.$store.state.parle.fileUrl
      console.log(fileUrl)
      if (this.message.length > 0 && webId != null)    {
        console.log(this.message)
        var dateObj = new Date();
        var messageId = "Msg"+dateObj.getTime()
        var date = dateObj.toISOString()
      //  let msgUrl = this.fileUrl+messageId
        /*  console.log(msgUrl)
        await solid.data[msgUrl].dct$created.add(date)
        await solid.data[msgUrl].sioc$content.add(this.message)*/
        console.log("WEBID",this.$store.state.solid.webId, this.$store.state.count)

        const chatDoc = await fetchDocument(fileUrl);
        console.log(chatDoc)
        let subj =   chatDoc.addSubject({identifier:messageId})
        subj.addLiteral(sioc.content, this.message)
        subj.addLiteral(dct.created, date)
        subj.addNodeRef(foaf.maker, webId)
        await chatDoc.save();

        this.message=""
      }else{
        alert ( "You must login before posting ;-)")
      }
      //  await solid.data[msgUrl].foaf$maker.add(namedNode('https://www.test.com')) // namedNode(`${webid}`)
      //  await solid.data.from(this.url)[messageId]['http://www.w3.org/2005/01/wf/flow#message'].add(this.url)
      //this.message = ""
      //  await solid.data.from(this.url)[this.subject]['http://www.w3.org/2005/01/wf/flow#message'].add(namedNode(this.url))
    }
  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
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
