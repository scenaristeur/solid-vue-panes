<template>
  <div class="modele-view">
    <b-modal id="node-popup" title="Node"
    hide-backdrop content-class="shadow"
    @ok="addNode">

    <b-input-group size="lg" prepend="id">
      <b-form-input v-model="value.id"></b-form-input>
    </b-input-group>
    <b-input-group size="lg" prepend="Label">
      <b-form-input v-model="value.label" @keyup.enter="addNode" autofocus></b-form-input>
    </b-input-group>


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
 props: ['value'],
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
    console.log(this.value)
  //  this.$emit('nodeadd',this.node)
//  let node="hello"
this.$emit('ok', this.value)
    this.$bvModal.hide("node-popup")
//  this.$emit('update:title', this.node)
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
