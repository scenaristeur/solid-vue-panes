<template>
  <div class="modele-view">
    <!--  <Component /> -->
    List {{ workspaces }}


    <b-list-group>
      <b-list-group-item v-for="w in workspaces" :key="w.name">
        <h3>{{ w.name }}</h3>
        <b-form-input v-model="w.pod" placeholder="webId / POD"></b-form-input>
        <b-form-input v-model="w.path" placeholder="path"></b-form-input>

        <b-button @click="update">Update</b-button>
      </b-list-group-item>

    </b-list-group>



  </div>
</template>

<script>
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
//import toastMixin from '@/mixins/toastMixin'

export default {
  name: 'WorkspaceList',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [toastMixin],
props:['value'],
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
computed:{
  workspaces: {
    get: function() { return this.$store.state.workspaces.workspaces},
    set: function() {}
  },

},
methods: {
  update(){
    console.log(this.workspaces)
    this.$store.dispatch('workspaces/updateWorkspaces', this.workspaces)
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
