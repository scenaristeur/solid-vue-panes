<template>
  <div class="modele-view">

    <div v-if="found">
      <b-button @click="found = false" variant="outline-secondary">workspaces</b-button>
    </div>
    <div v-else>

      <b-list-group>
        <b-list-group-item v-for="w in workspaces" :key="w.name">
          <b>{{ w.name }}</b>  <b-button size="sm" @click="choose(w)" variant="outline-info">Choose</b-button><br>
          <small>{{ w.path }}</small>
        </b-list-group-item>
      </b-list-group>

    </div>



  </div>
</template>

<script>

//import {  rdf} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'WorkspaceChoose',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [ToastMixin],
props:['name'],
data() {
  return {
    found: false
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
  choose(w){
    this.$store.commit('workspaces/setCurrentWorkspace', w)
    this.found = true
  }
  /*async getData() {
  let dataDoc = await this.$fc.readFile(this.url);
  let subj = dataDoc.getSubject(this.url+"#this")
  console.log(subj)
  let types = subj.getAllRefs(rdf.type)
  console.log(types)
}*/
},
watch:{
  workspaces(){
    console.log(this.workspaces)
    for ( let  k in this.workspaces){
      let w = this.workspaces[k]
      console.log(w)
      if (w.name == this.name){
        this.found = true
        this.choose(w)
      }
    }
  }
  /*'$route' (to) {
  //  '$route' (to, from) {
  console.log(to)
  this.url = to.params.url // || this.storage+"public/groups/"
  this.getData()
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
