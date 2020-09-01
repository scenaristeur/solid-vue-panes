<template>
  <div class="post-line container">
  <!--  <h5>PostLine</h5>
    post : {{ post }}
-->
    <h1>{{label}}</h1>
    <small>{{created}} - {{ maker }}</small>
    <p>
      {{content}}
    </p>
    {{type}}

  </div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'
import { getSolidDataset, getThing, getStringNoLocale, getUrl} from "@inrupt/solid-client";
import { RDFS, FOAF , DCTERMS, /*SIOC,*/ RDF } from "@inrupt/vocab-common-rdf";

export default {
  name: 'PostLine',
  props: ['post'],
  //mixins: [profileMixin],
  /*components: {
  'PostLine': () => import('@/components/post/PostLine'),
},*/
data: function () {
  return {
    label : "",
    created : "",
    maker: "",
    content: "...loading artcle...",
    type: ""

    //  webId: {},
    //  friends: [],
  }
},
async created() {
  //console.log("CREATED POSTLINE", this.post)
  const myDataset = await getSolidDataset(
    this.post.internal_url
  );
  const thing = getThing(
    myDataset,
    this.post.internal_url
  );
  this.label = getStringNoLocale(thing, RDFS.label)
  this.maker = getUrl(thing, FOAF.maker);
  this.created = getStringNoLocale(thing, DCTERMS.created)
  this.type = getStringNoLocale(thing, RDF.type)
  this.content = getStringNoLocale(thing, "http://rdfs.org/sioc/ns#content")
  console.log("POSTLINE", this.post)
  //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
  //  this.updateFriends()
},
watch: {
  storage (st) {
    //  '$route' (to, from) {
    console.log(st)
  }
},
methods:{
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
