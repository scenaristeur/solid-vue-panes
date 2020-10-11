<template>
  <div class="modele-view">
    <b-modal id="command-popup" title="Command"
    hide-backdrop content-class="shadow"
    @ok="sendCommand">
    type 3 words & end with a comma
    <b-input-group>
      <b-form-input ref="command_input" v-model="command" :value="inputNew" @keyup.enter="sendCommand" autofocus></b-form-input>
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
  name: 'CommandModal',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [ToastMixin],
props: ['inputNew'],
data() {
  return {
    command: ""
  }
},
created(){
  //  console.log("route",this.$route)
  //  this.url = this.$route.params.url
  //  this.getData()
},
methods: {
  sendCommand(){
    console.log(this.command)
    //  this.$emit('nodeadd',this.node)
    //  let node="hello"
    this.$emit('ok', this.command)
    //this.$bvModal.hide("co-popup")
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
  inputNew(){
    console.log(this.inputNew)
   this.command = this.inputNew
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
