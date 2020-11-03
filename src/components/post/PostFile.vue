<template>
  <div class="post-file container">
        <PostLine :post="p"  v-for="p in posts" :key="p.internal_url" />
  </div>
</template>

<script>
import { getSolidDataset, getThingAll} from "@inrupt/solid-client";

export default {
  name: 'PostFile',
  components: {
    'PostLine': () => import('@/components/post/PostLine'),
  },
  props: ['file'],
  data: function () {
    return {
      posts: []
    }
  },
  created() {
    this.getThings()
  },
  methods:{
    async getThings(){
      const postFileResource = await getSolidDataset(this.file.url);
      this.posts = getThingAll(postFileResource);
      this.posts.reverse()
//      console.log("POSTS",this.posts)
    }
},
}
</script>
