<template>
  <div class="post-list container">
    <h5>Post List</h5>
    {{ folder.files }}

    <b-list-group>
    <b-list-group-item v-for="pf in folder.files" :key="pf" >
      {{pf}}
    <!--  <PostFile :file="pf" /> -->
  </b-list-group-item>
  </b-list-group>


</div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'
import auth from 'solid-auth-client';
const SolidFileClient = window.SolidFileClient
//console.log("SFC", SolidFileClient)
const fc = new SolidFileClient(auth)

export default {
  name: 'PostFile',
  //mixins: [profileMixin],
  components: {
  //  'PostFile': () => import('@/components/post/PostFile'),
  },
  props: ['value'],
  data: function () {
    return {
      folder : {files: []}
      //  posts:[]
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
    this.storage = this.$store.state.solid.storage
    this.updatePosts()
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    storage (st) {
      //  '$route' (to, from) {
      console.log(st)
      this.updatePosts()
    }
  },
  methods:{
    async updatePosts(){
      if (this.storage.length > 0){
        console.log("UpdatePosts")
        console.log(this.storage)
        let path = this.storage+"public/blog/"
        //  let d = new Date()
        //  this.d = d
        //  let iso_date = d.toISOString()
        //  let filename = [d.getFullYear(), ("0" + (d.getMonth() + 1)).slice(-2), ("0" + d.getDate()).slice(-2)].join("-")

        //    let fileUrl = path+filename+".ttl"

        this.folder = await fc.readFolder(path)
        console.log(this.folder)
      }
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
}
}
</script>
