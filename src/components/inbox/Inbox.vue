<template>
  <div class="inbox container">
    <div v-if="webId != null">

      <div>
        <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
          <b-button-group class="mx-1">
            <b-button title="new" class="new" size="sm" variant="success" @click.stop="init_new()">
              <b-icon-pencil-square  @click.stop="init_new()" variant="outline-success"></b-icon-pencil-square>
            </b-button>

          </b-button-group>
        </b-button-toolbar>
      </div>

      <b-list-group>
        <b-list-group-item v-for="m in inbox.files.slice().reverse()" :key="m.name">
          <MessageLine :message="m"/>
        </b-list-group-item>
      </b-list-group>

      <b-modal id="confirm-trash" title="Are you sure you want to delete" @ok="trash">
        {{ toTrash }}
      </b-modal>

      <b-modal id="send-modal"
      :title="title"
      @ok="send"
      @cancel="selected = []">


      <div class="container flush">
        <FriendsSelection  v-on:selected="onSelected"  v-if="showFriends == true"/>
        <b-form-group >

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

        <!--<b-list-group-item>Move</b-list-group-item>-->
        <!--<b-list-group-item><b-icon-trash @click="trash"></b-icon-trash></b-list-group-item>-->
        <!--  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>-->
      </b-list-group>
    </b-modal>

    <p>To test the inbox, you can add me to your friends :<br>
      <b-button :to="link" variant="outline-info">Add Popock dev to your friends</b-button>
    </p>
  </div>
  <div v-else>
    <SolidLoginButton />
  </div>

</div>
</template>

<script>

import profileMixin from '@/mixins/profileMixin'
import aclMixin from '@/mixins/aclMixin'

//import { deleteFile } from "@inrupt/solid-client";

import { schema, space } from 'rdf-namespaces'
//const { namedNode } = require('@rdfjs/data-model');

export default {
  name: 'Inbox',
  mixins: [profileMixin, aclMixin],
  components: {
    'MessageLine': () => import('@/components/inbox/MessageLine'),
    'FriendsSelection': () => import('@/components/solid/FriendsSelection'),
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
  },
  props: ['value'],
  data: function () {
    return {
      inbox_urls: [],
      inbox: {files:[]},
      selected: [],
      title: "",
      content: "",
      label: "",
      recipient: null,
      showFriends: true
    }
  },
  async created() {
// email send template https://github.com/lethaldose/email-client
    this.webId = this.$store.state.solid.webId
    console.log("################# created inbox webid", this.webId)
    if (this.webId != null){
      this.inbox_urls = await this.getInboxUrls(this.webId)
      this.storage = this.$store.state.solid.storage
      await this.inbox_init("created webId non null")
      await this.configureInbox(this.inbox_urls[0], this.webId, this.storage)
      this.inbox_log_file = this.storage+"popock/inbox_log.ttl"
      console.log("created inbox_log_file",this.inbox_log_file)
      this.subscribe()
      /*this.inbox_log_file = this.storage+"popock/inbox_log.ttl"
      console.log("CREATED inbox_log_file",this.inbox_log_file)
      this.subscribe()*/
    }else{
      await this.inbox_init("created webId null")
      this.popupLogin()
    }



    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },

  watch: {

    async webId (webId) {
      await  this.inbox_init("webid watch")
      console.log("############# WEBID changed",webId)
      if (webId != null){
        this.inbox_urls = await this.getInboxUrls(webId)
      }

    },
    async inbox_urls(i_u){
      this.current_inbox_url = i_u[0]
      if (this.current_inbox_url != null){
        console.log(this.current_inbox_url)
        this.getMessages()

      }
    },
    reply(r){
      console.log("reply",r)
      this.showFriends = false
      this.$bvModal.show("send-modal")
      this.selected = []
      this.recipient = r.sender
      this.label = "ref: "+r.label
    },
    storage(st){
      if (st != null){
        this.inbox_log_file = st+"popock/inbox_log.ttl"
        console.log("STORAGE WATCH inbox_log_file",this.inbox_log_file)
        this.subscribe()
      }
    }
  },
  methods:{
    async inbox_init(parent){
      console.log("###################################### INBOX INIT from ",parent)
      console.log("INIT WITH",this.webId, this.inbox_urls[0],  this.storage)
    },
    notify (message= 'This is an example!') {
      // https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification#Parameters
      this.$notification.show('Hello World', {
        body: message
      }, {})
    },
    send(){
      console.log(this.title, this.content, this.selected, this.label, this.recipient)
      if (this.recipient != null){
        this.selected.push(this.recipient)
      }

      console.log("selected",this.selected)
      if (this.content.length > 0){
        let message = {}
        //
        var dateObj = new Date();
        message.date = dateObj.toISOString()
        message.id = dateObj.getTime()
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
        schem:dateSent "${message.date}";
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

      let getInboxUrls = this.getInboxUrls

      console.log(this.selected)
      let app = this
      this.selected.forEach(async function(webId) {
        let inbox_urls = await getInboxUrls(webId)
        if (inbox_urls != undefined && inbox_urls.length > 0){
          console.log("INBOX",inbox_urls)
          message.url = inbox_urls[0]+message.id+".ttl"
          //  let notif = inbox_log_file+"#"+message.id
          console.log(message.url)

          await app.$fc.postFile( message.url, messageStr, "text/turtle")
          //  await solid.data[notif].schema$about.add(namedNode(message.url))

          /*    let recipient_storage = await solid.data[webId].storage
          let inbox_log_file = recipient_storage+"popock/inbox_log.ttl"
          console.log(inbox_log_file)*/
          console.log("find storage of ",webId)
          //  let recipient_storage = await solid.data[webId].storage

          const recipientDoc = await app.$fc.readFile(webId);
          const rec = await recipientDoc.getSubject(webId)
          const recipient_storage = await rec.getNodeRef(space.storage)




          console.log(`${recipient_storage}`)
          let recipient_log_file = `${recipient_storage}`+"popock/inbox_log.ttl"
          console.log(recipient_log_file)
          let logDoc ={}
          try{
            logDoc = await app.$fc.readFile(recipient_log_file);
          } catch(e){
            logDoc = await app.$fc.createFile(recipient_log_file);
          }


          let s = logDoc.addSubject()
          s.addNodeRef(schema.about, message.url)
          //  console.log(logDoc)
          await logDoc.save()
        }

      })


    }else{
      alert("content must not be empty")
    }

  },
  onSelected: function (selected) {
    this.selected = selected
    console.log(this.selected)
  },
  init_new(){
    console.log("new")
    //  this.new = true
    this.showFriends = true
    this.$bvModal.show("send-modal")
    this.selected = []
    this.recipient = null
    this.label = ""
    this.content = ""
  },
  async subscribe(){

    var websocket = "wss://"+this.inbox_log_file.split('/')[2];
    let socket = new WebSocket(websocket, ['solid.0.1.0']);
    let inbox_log_file = this.inbox_log_file
    socket.onopen = function() {

      //      var now = d.toLocaleTimeString(app.lang)
      this.send('sub '+inbox_log_file);
      console.log("subscribe to INBOX",websocket, inbox_log_file)
      //  app.agent.send('Messages',  {action:"info", info: now+"[souscription] "+url});
    }

    let getMessages = this.getMessages
    socket.onmessage = function(msg) {
      console.log(msg)
      if (msg.data && msg.data.slice(0, 3) === 'pub') {
        //  app.notification("nouveau message Socialid")
        //app.openLongChat()
        console.log(msg.data)
        //  notification("new inbox message")
        getMessages()

        //app.todayMessages()
        //  app.agent.send("Flux", {action: "websocketMessage", url : url})
      }
    };


  },
  async getMessages(){
    this.inbox = await this.$fc.readFolder(this.current_inbox_url)
    this.notify(this.inbox.files.length+ " messages !!!")
    this.$store.commit('inbox/setInbox', this.inbox)
  },
  async trash() {
    console.log(this.toTrash)
    //  await this.$fc.deleteFile( this.toTrash, {withAcl:false})

    await this.$fc.deleteFile(
      this.toTrash
    );
    console.log("File deleted !");
    const logDoc = await this.$fc.readFile(this.inbox_log_file);
    let s = logDoc.findSubject(schema.about, this.toTrash)
    logDoc.removeSubject(s)
    //s.addNodeRef(schema.about, message.url)
    //  console.log(logDoc)
    await logDoc.save()
  }
},
computed:{
  webId: {
    get: function() { return this.$store.state.solid.webId},
    set: function() {}
  },
  toTrash(){
    return this.$store.state.inbox.toTrash
  },
  reply(){
    return this.$store.state.inbox.reply
  },
  storage:{
    get: function() { return this.$store.state.solid.storage},
    set: function() {}
  },
  link(){
    console.log("route",this.$route, location.href, location.host)
    let path = "/friends?add=https://spoggy.solidcommunity.net/profile/card#me"
    return  path //'<a href="'+path+'" target="_blank">Be my friend</a>'
  }
}
}
</script>
<style>
.inbox{
  text-align: left;
}
</style>
