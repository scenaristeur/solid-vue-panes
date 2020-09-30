<template>
  <div class="modele-view">
    <b-modal id="node-popup" title="Node"
    @ok="addNode">
    <span id="node-operation">node</span> <br>
    <table style="margin:auto;">
      <tr>
        <td>id</td><td><input v-model="node.id" /></td>
      </tr>
      <tr>
        <td>label</td><td><input v-model="node.label" /></td>
      </tr>
    </table>

  </b-modal>
  <!--  <Component /> -->
</div>
</template>

<script>
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'NodeModal',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [ToastMixin],
props:['node'],
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
  addNode(){
    console.log(this.node)
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
