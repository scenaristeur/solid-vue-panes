
<template>
  <div class="post-send container">
    <h5>PostSend</h5>


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
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'
import { fetchDocument, createDocument } from 'tripledoc';
import {/*namedNode, sioc,*/  dct, foaf, rdfs, sioc, rdf } from 'rdf-namespaces'

export default {
  name: 'PostSend',
  //mixins: [profileMixin],
  components: {
    //'PeopleItem': () => import('@/components/profile/PeopleItem'),
  },
  props: ['value'],
  data: function () {
    return {
      post: {}
      //  webId: {},
      //  friends: [],
    }
  },
  created() {


    this.storage = this.$store.state.solid.storage
    this.webId = this.$store.state.solid.webId

    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    storage (st) {
      //  '$route' (to, from) {
      console.log(st)
      this.path =  st+"public/blog/"
    }
  },
  methods:{
    async send(){


      let d = new Date()
      //  this.d = d
      let iso_date = d.toISOString()
      let filename = [d.getFullYear(), ("0" + (d.getMonth() + 1)).slice(-2), ("0" + d.getDate()).slice(-2)].join("-")
      this.path = this.storage+"public/blog/"
      let fileUrl = this.path+filename+".ttl"
      console.log(this.post)
      console.log(this.path)
      console.log(this.fileUrl)



      let postDoc = {}
      try{
        postDoc = await fetchDocument(fileUrl);
      }catch(e){
        postDoc = await createDocument(fileUrl);
      }

      console.log(postDoc)
      var postId = "Post_"+d.getTime()
      let subj =   postDoc.addSubject({identifier:postId})
      //subj.addLiteral(sioc.content, this.activity)
      subj.addLiteral(rdfs.label, this.post.title)
      subj.addLiteral(dct.created, iso_date)
      subj.addRef(foaf.maker, this.webId)
      subj.addRef(rdf.type, "https://www.w3.org/ns/activitystreams#Article")
      subj.addLiteral(sioc.content, this.post.text)

      await postDoc.save();

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
}
}
</script>
