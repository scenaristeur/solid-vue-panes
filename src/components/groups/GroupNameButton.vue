<template>
  <div class="modele-view">
    <b-button variant="info" v-bind:to="{ name: 'Groups', params: { url: url }}">{{ name }}</b-button>
  </div>
</template>

<script>
import {  fetchDocument } from 'tripledoc';
import {  vcard} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'GroupNameButton',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [ToastMixin],
props:['url'],
data() {
  return {
    name:""
  }
},
created(){

  this.update()
  //  console.log("route",this.$route)
  //  this.url = this.$route.params.url
  //  this.getData()
},
methods: {
  async update(){
    console.log("URL CREATEBUTTON",this.url)
    let path = this.url.split("#")
    let groupDoc =    await fetchDocument(path[0]);
    let gSubj = groupDoc.getSubject(this.url)
    this.name = gSubj.getString(vcard.fn)
    console.log("NAME", this.name)

  }
  /*async getData() {
  let dataDoc = await fetchDocument(this.url);
  let subj = dataDoc.getSubject(this.url+"#this")
  console.log(subj)
  let types = subj.getAllRefs(rdf.type)
  console.log(types)
}*/
},

watch:{
  url(){
    this.update()
  }
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
