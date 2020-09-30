<template>
  <div class="modele-view">
    <b-modal id="edge-popup"
    title="Edge"
    @ok="addEdge" >
    <!--  @show="resetModal"
    @hidden="resetModal"
    @ok="handleOk"-->

    <span id="edge-operation">edge</span> <br>
    <table style="margin:auto;">
      <tr>
        <td>label</td><td><input v-model="edge.label" /></td>
      </tr></table>

    </b-modal>
  </div>
</template>

<script>
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'EdgeModal',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [ToastMixin],
props:['edge'],
data() {
  return {
    //
  }
},
created(){
  //  console.log("route",this.$route)
  //  this.url = this.$route.params.url
  //  this.getData()
},
methods: {
  addEdge(){
    console.log(this.edge)
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
