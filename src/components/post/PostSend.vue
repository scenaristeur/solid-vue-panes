
<template>
  <div class="post-send container">
    <h5>PostSend</h5>
    <div v-if="url != undefined">
      <!-- <b-button >edit / fork {{ url }} </b-button> -->

      <b-input-group prepend="Linked to" class="mt-3">
        <b-form-input v-model="url"></b-form-input>
      </b-input-group>


    </div>

    <div v-if="selected == 'post' || selected == 'dokieli'">
      <b-input-group prepend="Title" class="mt-3">
        <b-form-input v-model="post.title"></b-form-input>
      </b-input-group>
      <b-form-textarea
      id="textarea"
      v-model="post.text"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
      ></b-form-textarea>


      <b-button class="mt-3" @click="send" variant="outline-info">Send</b-button>
    </div>

    <div v-else>
      Todo
    </div>

    <hr>
    <b-form-group label="Expert test">
      <b-form-radio-group id="radio-group-2" v-model="selected" name="radio-sub-component">
        <b-form-radio value="post">Post</b-form-radio>

        <b-form-radio value="dokieli">Dokieli</b-form-radio>
        <b-form-radio value="text">Text</b-form-radio>
        <b-form-radio value="ttl">Triple Turtle</b-form-radio>
        <b-form-radio value="network">Network</b-form-radio>
        <b-form-radio value="html" disabled>Html</b-form-radio>
        <!-- <b-form-radio :value="{ fourth: 4 }">This is the 4th radio</b-form-radio> -->
      </b-form-radio-group>
    </b-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    <div>Folder : {{folder.url}}</div>
    <Explorer />

  </div>
</template>

<script>
import activityMixin from '@/mixins/ActivityMixin'
import { fetchDocument, createDocument } from 'tripledoc';
import {/*namedNode, sioc,*/  dct, foaf, rdfs, sioc, rdf } from 'rdf-namespaces'
// import auth from 'solid-auth-client';
// import FC from 'solid-file-client'
// const fc = new FC( auth )

export default {
  name: 'PostSend',
  mixins: [activityMixin],
  components: {
    'Explorer': () => import('@/components/explorer/Explorer'),
  },
  props: ['value'],
  data: function () {
    return {
      post: {},
      selected: "post",
      url: ""
    }
  },
  created() {
    this.storage = this.$store.state.solid.storage
    this.webId = this.$store.state.solid.webId
    this.url = this.$route.params.url
    this.url == undefined ? this.url = this.$route.query.url+this.$route.hash : ""
  },
  watch: {
    storage (st) {
      this.folder =  st+"public/blog/"
      console.log("folder",this.folder)
    },
    async  selected(){
      switch (this.selected) {
        case "text":
        case "ttl":
        case "network":
        this.$router.push({ path: '/editor' })
        break;
        case  "dokieli":
        window.open('https://scenaristeur.github.io/solid-vue-panes/dokieli/dokieli.html', '_blank')
        break;
        default:
      }
    },
    '$route' (to) {
      this.url = to.params.url || to.query.url
      console.log(this.url)
    },
  },
  methods:{
    async send(){
      let d = new Date()
      //  this.d = d
      let iso_date = d.toISOString()
      let filename = [d.getFullYear(), ("0" + (d.getMonth() + 1)).slice(-2), ("0" + d.getDate()).slice(-2)].join("-")
      let path = this.folder.url != this.storage? this.folder.url : this.storage+"public/blog/"
      let fileUrl = path+filename+".ttl"
      console.log(this.post)
      console.log(this.path)
      console.log(this.fileUrl)

      let postDoc = {}
      try{
        postDoc = await fetchDocument(fileUrl);
      }catch(e){
        postDoc = await createDocument(fileUrl);
      }

      var postId = "Article_"+d.getTime()
      let subj =   postDoc.addSubject({identifier:postId})
      //subj.addLiteral(sioc.content, this.activity)
      subj.addLiteral(rdfs.label, this.post.title)
      subj.addLiteral(dct.created, iso_date)
      subj.addRef(foaf.maker, this.webId)
      subj.addRef(rdf.type, "https://www.w3.org/ns/activitystreams#Article")
      subj.addLiteral(sioc.content, this.post.text)
    this.url != undefined && this.url != "undefined" ? subj.addRef("https://www.w3.org/ns/activitystreams#inReplyTo", this.url) :""

      try{
        await postDoc.save();
        this.activity = {actor:{}, object: {}, summary:""}
        this.activity.actor.name = this.webId
        this.activity.type = "https://www.w3.org/ns/activitystreams#Create"
        this.activity.object.name = this.post.title
        this.activity.object.type = "Article"
        this.activity.object.url = fileUrl+"#"+postId
        this.activity.object.inReplyTo = this.url
        //    this.activity.summary = this.webId+" has just posted an Article with title "+this.post.title+" at "+this.activity.object.url
        this.sendActivity()
      }
      catch(e){
        alert(e)
      }
      this.post = {}
    }
    /*  async updateFriends(){
    this.friends = await this.getFriends(this.webId)
  }*/
},

computed:{
  storage:{
    get: function() { return this.$store.state.solid.storage},
    set: function() {}
  },
  webId:{
    get: function() { return this.$store.state.solid.webId},
    set: function() {}
  },

  folder: {
    get: function() { return this.$store.state.solid.folder},
    set: function() {}
  },
}
}
</script>
