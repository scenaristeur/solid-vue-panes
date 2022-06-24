<template>
  <div class="inbox-send">

    <div>
      <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
        <b-button-group class="mx-1">
          <b-button title="new" class="new" size="sm" variant="success" @click.stop="init_new()">
            <b-icon-pencil-square  @click.stop="init_new()" variant="outline-success"></b-icon-pencil-square>
          </b-button>
          <!--    <b-button title="refresh">
          <b-icon-mailbox  @click.stop="refresh()" variant="outline-success"></b-icon-mailbox>
        </b-button>
        <b-button>Edit</b-button>
        <b-button>Undo</b-button>-->
      </b-button-group>
    </b-button-toolbar>
  </div>

  <!--  Modal, {{ recipient }}-->
  <b-modal id="reply"
  :title="title"
  @ok="send">


  <div class="container flush">

    <b-form-group class="row">
      <FriendsSelection  v-on:selected="onSelected"/>
      <label for="destinataire">WebId :</label>
      <b-form-input id="destinataire" v-model="recipient" placeholder="ex: https://spoggy-test.solidcommunity.net/profile/card#me"></b-form-input>
      <!--  <b-button @click="add">Add</b-button> -->
    </b-form-group>
  </div>



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

  </b-list-group>
</b-modal>



</div>
</template>

<script>

import profileMixin from '@/mixins/profileMixin'

import { schema } from 'rdf-namespaces'

export default {
  name: 'InboxSend',
  mixins: [profileMixin],
  components: {
    'FriendsSelection': () => import('@/components/solid/FriendsSelection'),
  },
  data: function () {
    return {
      title: "",
      content: "",
      new : false,
      selected: []
      //  replyTitle: "",

    }
  },
  methods: {
    init_new(){
      console.log("new")
      this.new = true
      this.$bvModal.show("reply")
    },
    onSelected: function (selected) {
      this.selected = selected
      console.log(this.selected)
    },
    async send() {
      //  console.log(this.webId,this.r_inbox[0], this.label, this.content)

      console.log("selected",this.selected)
      if (this.content.length > 0){
        let message = {}
        //
        message.date = new Date()
        message.id = message.date.getTime()
        message.sender = this.webId

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
        /*
        if (this.r_inbox!= undefined && this.r_inbox.length > 0){
        this.selected.push( this.r_inbox[0])
      }*/

      let getInbox = this.getInbox
      this.selected.forEach(async function(webId) {
        let inbox = await getInbox(webId)
        message.url = inbox+message.id+".ttl"
        console.log(message.url)
        try{
          await this.$fc.postFile( message.url, messageStr, "text/turtle")
          var notif = inbox+"log.ttl#"+message.id
          if( !(await this.$fc.itemExists(inbox+"log.ttl")) ) {
         console.log(notif,"don't exist")
         await this.$fc.postFile(inbox+"log.ttl","","text/turtle") // only create if it doesn't already exist
       }
          //  await solid.data[notif].schema$message.add(namedNode(message.url))
        }catch(e){
          alert("one"+e)
        }

        const logDoc = await this.$fc.readFile(inbox+"log.ttl");
        let s = logDoc.addSubject()
        s.addNodeRef(schema.about, message.url)
      //  console.log(logDoc)
        await logDoc.save()


        //  var notif = inbox+"log.ttl#"+message.id
        //  await this.$fc.postFile(notif,"","text/turtle")
        /*  if( !(await this.$fc.itemExists(inbox+"log.ttl")) ) {
        console.log(notif,"don't exist")
        await this.$fc.postFile(inbox+"log.ttl","","text/turtle") // only create if it doesn't already exist
      }else{
      console.log(notif," exist")
    }*/
  //  console.log(namedNode)
/*
    const logDoc = await this.$fc.createFile(inbox+"log.ttl");
    console.log(logDoc)
    await logDoc.save()*/
    // await solid.data[inbox+"log.ttl"].schema$message.set(namedNode(message.url))


    /*    const response = await overwriteFile(
    message.url,
    new Blob([messageStr], { type: "text/turtle" })
    // Or in Node:
    // Buffer.from("This is a plain piece of text", "utf8"), { type: "plain/text" })
  );
  if (response.ok) {
  console.log("File saved!");
}*/
})




/*
const messageDoc = await this.$fc.createFile(message.url);
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
}else{
  alert("content must not be empty")
}




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
  label: {
       get: function() { return this.$store.state.inbox.label},
       set: function() {}
  },
  oldContent(){
    return this.$store.state.inbox.oldContent
  }
}
}
</script>
