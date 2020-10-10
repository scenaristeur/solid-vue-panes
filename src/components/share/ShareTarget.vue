<template>
  <div class="share container col">

    <div v-if="valid == true">
      <h3>Popock Bookmark</h3>

      <div class="container">
        <b-input-group prepend="Title" >
          <b-form-input v-model="title" placeholder="What is this bookmark title ?"></b-form-input>
        </b-input-group>
        <b-input-group prepend="Text" >
          <b-form-input v-model="text" placeholder="Blah Blah Blah..."></b-form-input>
        </b-input-group>
        <b-input-group prepend="Url" >
          <b-form-input v-model="url" placeholder="https://the_url.com"></b-form-input>
        </b-input-group>
        <b-input-group prepend="Topic" >
          <b-form-input v-model="topic" placeholder="topic/sub_topic/sub_sub_topic..."></b-form-input>
        </b-input-group>

        <b-form-group label="Confidentiality">
          <b-form-radio v-model="selected" name="confidential" value="private">Private</b-form-radio>
          <b-form-radio v-model="selected" name="confidential" value="public">Public</b-form-radio>
        </b-form-group>

        Path : {{ path }} !! <br>
        webId : {{ webId}} <br>
        <p >
          <b-button variant="outline-info" @click="saveBm">Save Bookmark</b-button>
          <b-button class="mr-auto" variant="outline-warning" to="/bookmarks">Bookmarks</b-button>
        </p>
        <p v-if="webId == null">
          You need to <SolidLoginButton /> to your POD.
        </p>



      </div>
    </div>
    <div v-else>
      <p>
        The first approach to discover Popock, could be for example to
        <b-button variant="outline-info"
        to="?title=Popock&url=https://scenaristeur.github.io/solid-vue-panes/&text=My%20favorite%20Pod%20Manager">bookmark Popock</b-button>
        or
        <b-button variant="outline-info" to="?title=something">bookmark something else</b-button> <br>
        then take a look at
        <b-button variant="outline-warning" to="/bookmarks">Bookmarks</b-button>
      </p>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
// router en mode history
import { fetchDocument, createDocument } from 'tripledoc';
import { sioc, dct, foaf, rdf, rdfs } from 'rdf-namespaces'

import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )


export default {
  name: 'ShareTarget',
  components: {
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton')
  },
  //  mixins: [loginMixin],
  data: function () {
    return {
      //  webId: {},
      title:"",
      text:"",
      url: "",
      query:  "",
      route: "",
      valid: false,
      topic: "",
      selected: 'public'
    }
  },
  created() {
    this.title = this.$route.query.title
    this.text = this.$route.query.text
    this.url = this.$route.query.url
    this.query  = this.$route.query
    this.params = this.$route.params
    this.fullPath =  this.$route.fullPath
    this.title != undefined || this.text != undefined || this.url != undefined ? this.valid = true : this.valid = false
    console.log(this.$route)
  this.url == undefined ? this.url = this.text : ""
  this.title == undefined ? this.title = "no-title" : ""
  this.topic == undefined ? this.topic = "default" : ""
  this.text == undefined ? this.text = "I didn't have enough time to complete this text, but now I can !" : ""

    /*
    if (this.webId == null){
    this.popupLogin()
  }*/
},
watch: {
  '$route' (to) {
    //  '$route' (to, from) {
    this.title = to.query.title
    this.text = to.query.text
    this.url = to.query.url
    this.query= to.query
    this.params = to.params
    this.fullPath = to.fullPath
    console.log(this.$route.query)
    console.log(to.query)
    this.title != undefined || this.text != undefined || this.url != undefined ? this.valid = true : this.valid = false

    //    this.updatePod()
  },
  valid(v){
    v == false ? this.$router.push('/bookmarks') : ""
  }
},
methods:{
  async saveBm(){
    if (this.webId != null){

      var date = new Date();
      const bookmarkDoc =    await fc.itemExists( this.path ) ?    await fetchDocument(this.path) : await createDocument(this.path);

      let subj =   bookmarkDoc.addSubject()
      subj.addLiteral(rdfs.label, this.title)
      subj.addLiteral(sioc.content, this.text)
      subj.addNodeRef("http://www.w3.org/2002/01/bookmark#recalls", this.url)
      subj.addNodeRef("http://www.w3.org/2002/01/bookmark#hasTopic", this.topic)
      subj.addLiteral(dct.created, date)
      subj.addNodeRef(foaf.maker, this.webId)
      subj.addLiteral(dct.created, date)
      subj.addNodeRef(rdf.type, "http://www.w3.org/2002/01/bookmark#Bookmark")
      await bookmarkDoc.save();
      this.makeToast(this.title, "bookmark saved at "+ this.path, 'success')
      this.title = undefined
      this.text = undefined
      this.url = undefined
      this.valid = false
    }else{
      alert("You must first login to your POD !")
    }
  },
  makeToast(title, content,variant = null) {
    this.$bvToast.toast(content , {
      title: title,
      variant: variant,
      solid: true
    })
  }
},

computed:{
  path(){
    return this.storage != null ? [this.storage.slice(0,-1), this.selected, "bookmarks", this.topic+"/bookmarks.ttl"].join("/") : ""
  },
  webId(){
    return this.$store.state.solid.webId
  },
  storage(){
    return this.$store.state.solid.storage
  },
},
}
</script>
