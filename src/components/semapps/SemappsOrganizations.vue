<template>
  <div class="modele-view">
    <!--  <Component /> -->
    SemappsOrganizations {{ currentEndpoint }}, {{ source }}
  </div>
</template>

<script>
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'SemappsOrganizations',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [ToastMixin],
props:['value'],
data() {
  return {
  source: null
  }
},
created(){
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
},*/
currentEndpoint(e){
  console.log("Endpoint CHANGE",e)
  this.source = e.url+"organizations/"
  console.log(this.source)
}
},
computed:{
  currentEndpoint: {
    get: function() { return this.$store.state.semapps.currentEndpoint},
    set: function() {}
  },
},
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
