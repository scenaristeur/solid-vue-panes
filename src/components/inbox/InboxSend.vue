<template>
  <div class="inbox-send">
    Modal, {{ recipient }}
    <b-modal id="reply"
    :title="title"
    @ok="send">
    <b-list-group>

      <b-input-group prepend="Label">
        <b-form-input v-model="label"></b-form-input>
      </b-input-group>

      <b-form-textarea
      id="textarea-rows"
      placeholder=""
      v-model="content"
      rows="8"
      ></b-form-textarea>

      <!--<b-list-group-item>Move</b-list-group-item>-->
      <!--<b-list-group-item><b-icon-trash @click="trash"></b-icon-trash></b-list-group-item>-->
      <!--  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
      <b-list-group-item>Vestibulum at eros</b-list-group-item>-->
    </b-list-group>
  </b-modal>



</div>
</template>

<script>

import profileMixin from '@/mixins/profileMixin'
import auth from 'solid-auth-client';
const SolidFileClient = window.SolidFileClient
console.log("SFC", SolidFileClient)
const fc = new SolidFileClient(auth)
//import { createDocument } from 'tripledoc';
//import { schema, rdfs, rdf } from 'rdf-namespaces'

export default {
  name: 'InboxSend',
  mixins: [profileMixin],
  components: {
    //  'SolidLogin': () => import('@/components/solid/SolidLogin')
  },
  data: function () {
    return {
      title: "",
      content: ""
      //  replyTitle: "",

    }
  },
  methods: {
    async send() {
      console.log(this.webId,this.r_inbox[0], this.label, this.content)
      let message = {}
      message.recipient = this.r_inbox[0]
      message.date = new Date(Date.now())
      message.id = message.date.getTime()
      message.sender = this.webId
      message.url = message.recipient+message.id+".ttl"
      message.content = this.content
      message.label = this.label

      let messageStr = `
      @prefix : <#>.
      @prefix schem: <http://schema.org/>.
      @prefix sch: <https://schema.org/>.
      @prefix rd: <http://www.w3.org/2000/01/rdf-schema#>.

      <>
      a sch:Message;
      schem:dateSent "${message.date.toISOString()}";
      schem:sender <${message.sender}>;
      schem:text "${message.content}";
      rd:label "${message.label}";
      schem:abstract "this message can be opened with inbox of Popock https://scenaristeur.github.io/solid-vue-panes/".
      `
      console.log(messageStr)

      await fc.createFile( message.url, messageStr, "text/turtle")

      /*
      const messageDoc = await createDocument(message.url);
      let subj = messageDoc.addSubject()
      subj.addLiteral(schema.text, message.content)
      subj.addLiteral(rdfs.label, message.label)
      subj.addLiteral(schema.dateSent, message.date.toISOString())
      subj.addNodeRef(rdf.type, 'https://schema.org/Message')
      subj.addNodeRef(schema.sender, message.sender)

      await messageDoc.save();*/


      //  await data[mess].schema$text.add(message.content);
      //  await data[mess].rdfs$label.add(message.title)
      //  await data[mess].schema$dateSent.add(message.date.toISOString())
      //await data[mess].rdf$type.add(namedNode('https://schema.org/Message'))
      //  await data[mess].schema$sender.add(namedNode(this.webId))

      /*    var notif = message.recipient+"log.ttl#"+message.id
      await data[notif].schema$message.add(namedNode(mess))*/





    }
  },
  watch: {
    async recipient (r) {
      this.title = "Reply to "+r.split('/').slice(2,3)[0]
      this.r_inbox = await this.getInbox(r)
    },
    oldContent (oc){
      console.log(oc)
      this.content = ""
    /*  this.content = `

      -------------------------------------------------------------
      ${oc}`*/
    }

  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    },
    recipient(){
      return this.$store.state.inbox.recipient
    },
    label(){
      return this.$store.state.inbox.label
    },
    oldContent(){
      return this.$store.state.inbox.oldContent
    }
  }
}
</script>
