<template>
  <div class="inbox container">
    <h5>Inbox</h5>
    <p>To test the inbox, you can add me to your friends :<br> <a href="https://spoggy.solid.community/profile/card#me" target="_blank">https://spoggy.solid.community/profile/card#me</a><br>
      You have too <a href="https://forum.solidproject.org/t/popock-bring-your-pod-in-your-pocket/3378/4?u=smag0" target="_blank">grant authenticated Agents & this app</a> if you want to receive messages.
    </p>


    <button @click="notification('Notifications activated')">Activate Notifications</button>

    <div>
      <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
        <b-button-group class="mx-1">
          <b-button title="new" class="new" size="sm" variant="success" @click.stop="init_new()">
            <b-icon-pencil-square  @click.stop="init_new()" variant="outline-success"></b-icon-pencil-square>
          </b-button>

        </b-button-group>
        <!--  <b-dropdown class="mx-1" right text="menu">
        <b-dropdown-item>Item 1</b-dropdown-item>
        <b-dropdown-item>Item 2</b-dropdown-item>
        <b-dropdown-item>Item 3</b-dropdown-item>
      </b-dropdown>
      <b-button-group class="mx-1">
      <b-button>Save</b-button>
      <b-button>Cancel</b-button>
    </b-button-group>-->
  </b-button-toolbar>
</div>

<b-list-group>
  <b-list-group-item v-for="m in inbox.files.slice().reverse()" :key="m.name" class="d-flex align-items-center">
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
    <b-form-input id="destinataire" v-model="recipient" placeholder="ex: https://spoggy-test.solid.community/profile/card#me"></b-form-input>
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

webId : {{ webId }}

inbox_urls : {{ inbox_urls }}

</div>
</template>

<script>
import profileMixin from '@/mixins/profileMixin'
import auth from 'solid-auth-client';
const SolidFileClient = window.SolidFileClient
console.log("SFC", SolidFileClient)
const fc = new SolidFileClient(auth)
import { deleteFile } from "@inrupt/solid-client";
import { fetchDocument } from 'tripledoc';
import { schema } from 'rdf-namespaces'

export default {
  name: 'Inbox',
  mixins: [profileMixin],
  components: {
    'MessageLine': () => import('@/components/inbox/MessageLine'),
    'FriendsSelection': () => import('@/components/solid/FriendsSelection'),
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
    this.webId = this.$store.state.solid.webId
    this.inbox_urls = await this.getInbox(this.webId)
    window.addEventListener('load', function () {
      Notification.requestPermission(function (status) {
        // Cela permet d'utiliser Notification.permission avec Chrome/Safari
        if (Notification.permission !== status) {
          Notification.permission = status;
        }
      });
    });
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    async webId (webId) {
      this.inbox_urls = await this.getInbox(webId)
    },
    async inbox_urls(i_u){
      this.current_inbox_url = i_u[0]
      console.log(this.current_inbox_url)
      this.getMessages()
      this.subscribe()
    },
    reply(r){
      console.log("reply",r)
      this.showFriends = false
      this.$bvModal.show("send-modal")
      this.recipient = r.sender
      this.label = "ref: "+r.label
    }
  },
  methods:{
    send(){
      console.log(this.title, this.content, this.selected, this.label, this.recipient)
      if (this.recipient != null){
        this.selected.push(this.recipient)
      }

      console.log("selected",this.selected)
      if (this.content.length > 0){
        let message = {}
        //
        message.date = new Date(Date.now())
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
      console.log(this.selected)
      this.selected.forEach(async function(webId) {
        let inbox = await getInbox(webId)
        if (inbox != undefined && inbox.length > 0){
          message.url = inbox+message.id+".ttl"
          console.log(message.url)
          try{
            await fc.postFile( message.url, messageStr, "text/turtle")
            var notif = inbox+"log.ttl#"+message.id
            if( !(await fc.itemExists(inbox+"log.ttl")) ) {
              console.log(notif,"don't exist")
              await fc.postFile(inbox+"log.ttl","","text/turtle") // only create if it doesn't already exist
            }
            //  await solid.data[notif].schema$message.add(namedNode(message.url))
          }catch(e){
            alert("one"+e)
          }

          const logDoc = await fetchDocument(inbox+"log.ttl");
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
    this.recipient = null
    this.label = ""
    this.content = ""
  },
  async subscribe(){
    let notif = this.current_inbox_url+"log.ttl"
    var websocket = "wss://"+this.current_inbox_url.split('/')[2];
    let socket = new WebSocket(websocket);
    socket.onopen = function() {

      //      var now = d.toLocaleTimeString(app.lang)
      this.send('sub '+notif);
      console.log("subscribe to INBOX",websocket, notif)
      //  app.agent.send('Messages',  {action:"info", info: now+"[souscription] "+url});
    }

    let getMessages = this.getMessages
    let notification = this.notification
    socket.onmessage = function(msg) {
      console.log(msg)
      if (msg.data && msg.data.slice(0, 3) === 'pub') {
        //  app.notification("nouveau message Socialid")
        //app.openLongChat()
        console.log(msg.data)
        notification("new inbox message")
        getMessages()
        //app.todayMessages()
        //  app.agent.send("Flux", {action: "websocketMessage", url : url})
      }
    };


  },
  async getMessages(){
    this.inbox = await fc.readFolder(this.current_inbox_url)
  },
  async trash() {
    console.log(this.toTrash)
    //  await fc.deleteFile( this.toTrash, {withAcl:false})

    await deleteFile(
      this.toTrash
    );
    console.log("File deleted !");
    const logDoc = await fetchDocument(this.current_inbox_url+"log.ttl");
    let s = logDoc.findSubject(schema.about, this.toTrash)
    logDoc.removeSubject(s)
    //s.addNodeRef(schema.about, message.url)
    //  console.log(logDoc)
    await logDoc.save()
  },
  notification(message){

    console.log("notif")
    // Si l'utilisateur accepte d'être notifié
    if (window.Notification && Notification.permission === "granted") {
      alert("1")
      new Notification(message);
    }

    // Si l'utilisateur n'a pas choisi s'il accepte d'être notifié
    // Note: à cause de Chrome, nous ne sommes pas certains que la propriété permission soit définie, par conséquent il n'est pas sûr de vérifier la valeur par défaut.
    else if (window.Notification && Notification.permission !== "denied") {
        alert("2")
      Notification.requestPermission(function (status) {
        if (Notification.permission !== status) {
            alert("3")
          Notification.permission = status;
        }

        // Si l'utilisateur est OK
        if (status === "granted") {
            alert("4")
          new Notification(message);
        }

        // Sinon, revenons en à un mode d'alerte classique
        else {
            alert("5")
          alert(message);
        }
      });
    }

    // Si l'utilisateur refuse d'être notifié
    else {
      // We can fallback to a regular modal alert
      alert(message);
    }


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
  }
}
}
</script>
