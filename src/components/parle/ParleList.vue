<template>
  <div class="solid-chat-list">


      <b-input-group class="mb-2">
        <b-form-datepicker id="example-datepicker" v-model="date" min="2020-08-01" :max="max"></b-form-datepicker>
        <b-input-group-append>
          <b-button @click="sort">Sort</b-button>
        </b-input-group-append>
      </b-input-group>

    <b-list-group>
      <b-list-group-item   v-for="m in messages" :key="m.id" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <div class="mb-1">
            <a v-bind:href="m.maker" v-if="m.maker != null" target="_blank">
              <b-icon icon="person-fill"></b-icon>{{ m.maker.split('/').slice(2,3)[0] }}
            </a>

            <b-icon v-else  icon="person-fill"></b-icon>

          </div>
          <small class="text-muted">
            {{ m.created }}
          </small>
        </div>

        <p class="mb-1">
          {{ m.content}}
        </p>

        <div class="text-muted">
          <div v-if="m.parent">
            This <a v-bind:href="m.id.split('#')[0]" target="_blank">{{ m.id.split("/").slice(-2,-1)[0] }}</a> channel as been created from
            <b-button :pill=true variant="outline-info" class="m-1 btn-sm" @click="bascule(m.parent)">
              {{ m.parent.split("/").slice(-2,-1)[0] }}
            </b-button>
          </div>

          <b-button  :pill=true v-if="webId!=null" variant="outline-info" class="btn-sm" @click="new_sub(m.id)" >Reply</b-button>
          <span v-else>Login to reply</span>
          <b-button :pill=true  v-for="p in m.parts" :key="p" variant="info" class="m-1 btn-sm" @click="bascule(p)">
            {{ p.split("/").slice(-2,-1)[0] }}
          </b-button>
        </div>
      </b-list-group-item>

    </b-list-group>

    <div>
      <b-input-group v-if="messages.length > 5" class="mb-2">
        <b-form-datepicker id="example-datepicker2" v-model="date" min="2020-08-01" :max="max"></b-form-datepicker>
        <b-input-group-append>
          <b-button @click="sort">Sort</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <br>
    <br>


    <!--<b-button @click="makeToast()" class="mb-2">Default</b-button>
    <b-button variant="primary" @click="makeToast('primary')" class="mb-2">Primary</b-button>
    <b-button variant="secondary" @click="makeToast('secondary')" class="mb-2">Secondary</b-button>
    <b-button variant="danger" @click="makeToast('danger')" class="mb-2">Danger</b-button>
    <b-button variant="warning" @click="makeToast('warning')" class="mb-2">Warning</b-button>
    <b-button variant="success" @click="makeToast('success')" class="mb-2">Success</b-button>
    <b-button variant="info" @click="makeToast('info')" class="mb-2">Info</b-button>-->


    <div class="m-3"><a v-bind:href="'https://scenaristeur.github.io/spoggy-simple/?source='+file" target="_blank">Visualization</a></div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import ParleMixin from '@/mixins/ParleMixin' // Manage folders & files
import { fetchDocument } from 'tripledoc';
//import auth from 'solid-auth-client';
import {/* sioc,*/ dct, foaf, schema } from 'rdf-namespaces'

export default {
  name: 'ParleList',
  props: {
    msg: String
  },
  mixins: [ParleMixin ],
  data: function () {
    return {
      date: "",
      part:""
    }
  },
  async   created(){
    let d = new Date()
    this.date = this.formatDate(d)
    this.max = this.date
    this.path = this.$store.state.parle.root
    console.log("ROOT FROM STORE", this.$store.state.parle.root)
    await this.createWebSocket()


  },
  async  mounted(){


    let socket = this.$store.state.websocket.socket
    console.log("SOCKET FROM STORE", socket)
    socket.onmessage = function(msg) {
      if (msg.data && msg.data.slice(0, 3) === 'pub') {
        // resource updated, refetch resource
        console.log("updated",msg.data)
        //  this.history.push({type: "update", url: msg.data})
        //  this.$store.dispatch('chat/requestUpdate',msg.data.substring(4))
        this.getMessages(msg.data.substring(4))
      }
    }.bind(this)
  },
  methods: {
    createWebSocket(){
      let root = this.$store.state.parle.root
      let withoutProtocol = root.split('//')[1]
      let sock = withoutProtocol.split('/')[0]+"/"
      let socket = new WebSocket('wss://'+sock, ['solid.0.1.0']);
      this.$store.commit('websocket/setSocket', socket)
    },
    addSubscription(fileUrl){
      this.$store.state.websocket.socket.send('sub '+fileUrl);
    },
    bascule(p){
      console.log("Part",p)
      this.$store.commit('parle/setFileUrl', p)
      this.path = p.substr(0, p.lastIndexOf("/") + 1)
      console.log(this.path)
      if (this.$store.state.websocket.socket != undefined){
        this.$store.state.websocket.socket.send('sub '+p);
      }
      this.makeToast('We have switched to',p,'info')
      this.getMessages(p)
    },
    sort(){
      this.messages.reverse()
    },
    formatDate(d) {
      return [d.getFullYear(), ("0" + (d.getMonth() + 1)).slice(-2), ("0" + d.getDate()).slice(-2)].join("-")
    },
    async new_sub(parent){
      // must be cleaned !
      console.log(parent)
      var sub_channel = prompt("Create a sub-channel from "+parent);
      if (sub_channel != null && sub_channel.length > 0 ){
        //create Path
        console.log(sub_channel)
        sub_channel = sub_channel.split(' ').join('_');
        let parent_path = parent.substr(0, parent.lastIndexOf("/") + 1)
        let parent_messageId = parent.split("#").pop()
        console.log("Parent",parent_path,parent_messageId)
        //  this.$store.commit('parle/setRoot', path+sub_channel)
        let child_path = parent_path+sub_channel+"/"
        let child_filename = this.date+".ttl"
        let child_url = child_path+child_filename
        console.log("Child",child_path, child_filename)
        this.$store.commit('parle/setFileUrl', child_url)
        if (this.$store.state.websocket.socket != undefined){
          this.$store.state.websocket.socket.send('sub '+child_url);
        }
        // create Doc

        if( !await this.fc.itemExists( child_url )) {
          await this.fc.postFile(child_url, "", "text/turtle")
          .then((content) => {
            console.log("File Created",content)
          })
          .catch(err => console.error(`Error: ${err}`))
        }else{
          console.log("File exist",child_url)
        }

        const newDoc = await fetchDocument(child_url);
        //  console.log(newDoc)
        newDoc.addSubject
        let subj =   newDoc.addSubject({identifier: "this" })
        //  subj.addLiteral(sioc.content, this.message)
        subj.addLiteral(dct.created, this.date)
        subj.addNodeRef(schema.isPartOf, parent)
        subj.addNodeRef(foaf.maker, this.$store.state.solid.webId)
        await newDoc.save();
        //  console.log(path, messageId)

        //
        const referDoc = await await fetchDocument(parent)
        let p_id = referDoc.getSubject(parent)
        p_id.addRef(schema.hasPart, child_url)
        await referDoc.save();
        this.bascule(child_url)
        //
      }else{
        alert ("You must provide a name to create a sub Channel")
      }
    },
    makeToast(title, content, variant = null) {
      this.$bvToast.toast(content , {
        title: title,
        variant: variant,
        solid: true
      })
    }
  },
  computed: {
    file(){
      let f = this.path+this.date+".ttl"
      this.$store.commit('parle/setFileUrl', f)
      if (this.$store.state.websocket.socket != undefined  && this.$store.state.websocket.socket.readyState == 1){
        this.$store.state.websocket.socket.send('sub '+f);
      }

      this.getMessages(f)
      return f
    },
    webId(){
      return this.$store.state.solid.webId
    },
    messages(){
      return this.$store.state.parle.messages
    }
  }
}
</script>
