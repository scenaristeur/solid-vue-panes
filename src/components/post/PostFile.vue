<template>
  <div class="post-file container">
    <!--  <h5>PostFile</h5>
    file : {{ file }}
    <br><br>
    posts: {{ posts }}-->

    <b-list-group>
      <b-list-group-item v-for="p in posts" :key="p.internal_url" >
        <PostLine :post="p" />
      </b-list-group-item>
    </b-list-group>


  </div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'
import { getSolidDataset, getThingAll} from "@inrupt/solid-client";
//  import { RDFS, DCTERMS, AS, FOAF, RDF } from "@inrupt/vocab-common-rdf";

export default {
  name: 'PostFile',
  //mixins: [profileMixin],
  components: {
    'PostLine': () => import('@/components/post/PostLine'),
  },
  props: ['file'],
  data: function () {
    return {
      posts: []
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
    this.getThings()
  },
  watch: {
    storage (st) {
      //  '$route' (to, from) {
      console.log(st)

    }
  },
  methods:{
    async getThings(){

      const postFileResource = await getSolidDataset(
        this.file.url
      );

      /*
      2. Get the data entity, specified by the URL, from the Dataset.
      */

      this.posts = getThingAll(
        postFileResource,
      );

      console.log("POSTS",this.posts)
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
