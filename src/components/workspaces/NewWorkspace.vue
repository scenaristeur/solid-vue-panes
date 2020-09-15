<template>
  <div class="modele-view">
    <!--  <Component /> -->
    <b-form-input v-model="workspace.name" placeholder="Enter the name of the new workspace"></b-form-input>

    <b-button @click="add">Add</b-button>
  </div>
</template>

<script>
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
//import toastMixin from '@/mixins/toastMixin'

export default {
  name: 'NewWorkspace',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [toastMixin],
props:['value'],
data() {
  return {
    workspace: {}
  }
},
created(){
  //  console.log("route",this.$route)
  //  this.url = this.$route.params.url
  //  this.getData()
},
computed:{
  storage: {
    get: function() { return this.$store.state.solid.storage},
    set: function() {}
  },
  webId: {
    get: function() { return this.$store.state.solid.webId},
    set: function() {}
  },
},
methods: {
  add(){
    console.log(this.workspace)
    this.workspace.path = this.storage
    this.workspace.pod = this.webId
  
    this.$store.dispatch('workspaces/addWorkspace', this.workspace)
    this.workspace = {}
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
  this.url = to.params.url // || this.storage+"public/groups/"
  this.getData()
  //  console.log(this.url)
  //  this.initGroups(to.params.url)
  //  this.updateFriends()
  //  this.updateIndexes()
},
url(url){
console.log("URL CHANGED",url)
}*/
}
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
