<template>
  <div class="modele-view">
    <!--  <Component /> -->
    <a :href="object_url">
      {{ label }}
    </a>

    <b-button  v-bind:to="{ name: 'View', params: { url: object_url }}" variant="outline-info">{{label}}  <b-icon icon="eye" aria-hidden="true" variant="info"></b-icon> </b-button>

    <!-- <p>{{ summary }}</p> -->

    <!-- <small> {{ object_url }}</small> -->
    <!-- <ArticleShort :url="object_url" /> -->
    <p>
      {{summary}}
      <small>
        {{ created }}
      </small>
      <!-- {{ type }} -->
    </p>
  </div>
</template>

<script>

import {   dct, rdf, foaf, rdfs} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'SubjectToArticle',
  //     components: {
  //   'ArticleShort': () => import('@/components/blog/ArticleShort'),
  // },
  //  mixins: [ToastMixin],
  props:['subject'],
  data() {
    return {
      //
    }
  },
  created(){
    this.label = this.subject.getString(rdfs.label)
    this.created = this.subject.getString(dct.created)
    this.type = this.subject.getNodeRef(rdf.type)
    this.summary = this.subject.getLiteral("https://www.w3.org/ns/activitystreams#summary")
    this.maker = this.subject.getNodeRef(foaf.maker) || "anonymous"
    this.object_url = this.subject.getNodeRef("https://www.w3.org/ns/activitystreams#object")
  //  console.log(this.object_url)
    //  console.log("route",this.$route)
    //  this.url = this.$route.params.url
    //  this.getData()
  },
  methods: {
    /*async getData() {
    let dataDoc = await this.$fc.readFile(this.url);
    let subj = dataDoc.getSubject(this.url+"#this")
    console.log(subj)
    let types = subj.getAllRefs(rdf.type)
    console.log(types)
  }*/
},

watch:{
  /*'$route' (to) {
  //  '$route' (to, from) {
  console.log(to)
},
url(url){
console.log("URL CHANGE",url)
}*/
},
computed:{
  /*storage: {
  get: function() { return this.$store.state.solid.storage},
  set: function() {}
},*/
},
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
