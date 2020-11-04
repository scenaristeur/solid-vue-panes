<template>
  <div class="modele-view">
    <!--  <Component /> -->
    {{ url }}
  </div>
</template>

<script>
// import {  fetchDocument } from 'tripledoc';
// import {  rdf, /* dct,  foaf, rdfs*/} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'ArticleShort',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [ToastMixin],
props:['url'],
data() {
  return {
    //
  }
},
async created(){
  try{
    this.uri = this.url.split("#")
    console.log("URI", this.uri)
    //   const articleDoc = await fetchDocument(this.uri[0]);
    //   let subj = articleDoc.getSubject(this.url)
    // //  console.log(subj)
    //   let types = subj.getAllRefs(rdf.type)
    // console.log(types)

  }
  catch(e){
    console.log(e)
  }
  // this.label = this.subject.getString(rdfs.label)
  // this.created = this.subject.getString(dct.created)
  // this.type = this.subject.getNodeRef(rdf.type)
  // this.summary = this.subject.getLiteral("https://www.w3.org/ns/activitystreams#summary")
  // this.maker = this.subject.getNodeRef(foaf.maker) || "anonymous"
  // this.object_url = this.subject.getNodeRef("https://www.w3.org/ns/activitystreams#object")
  //   console.log(this.object_url)
  //  console.log("route",this.$route)
  //  this.url = this.$route.params.url
  //  this.getData()
},
methods: {
  /*async getData() {
  let dataDoc = await fetchDocument(this.url);
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
