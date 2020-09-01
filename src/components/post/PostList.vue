<template>
  <div class="post-list container">
    <b-button class="update-button" size="sm" variant="info" @click="updatePosts">
      <b-icon-arrow-repeat></b-icon-arrow-repeat>
    </b-button>

    <b-list-group>
      <b-list-group-item v-for="pf in folder.files" :key="pf.url" >
        <a v-bind:href="pf.url" target="_blank">{{pf.name}}</a>
        <PostFile :file="pf" />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import auth from 'solid-auth-client';
const SolidFileClient = window.SolidFileClient
//console.log("SFC", SolidFileClient)
const fc = new SolidFileClient(auth)

export default {
  name: 'PostList',
  components: {
    'PostFile': () => import('@/components/post/PostFile'),
  },
  props: ['value'],
  data: function () {
    return {
      folder : {files: []}
    }
  },
  created() {
    this.storage = this.$store.state.solid.storage
    this.updatePosts()
  },
  watch: {
    storage (st) {
      console.log(st)
      this.updatePosts()
    }
  },
  methods:{
    async updatePosts(){
      if (this.storage.length > 0){
      //  console.log("UpdatePosts")
      //  console.log(this.storage)
        let path = this.storage+"public/blog/"
        this.folder = await fc.readFolder(path)
      //  console.log(this.folder)
      }
    }
},
computed:{
  storage:{
    get: function() { return this.$store.state.solid.storage},
    set: function() {}
  },
}
}
</script>
