<template>
  <div class="modele-view">
    GroupChat {{ instance }}.
    <b-list-group class="list-group">
  <b-list-group-item>Cras justo odio</b-list-group-item>
  <b-list-group-item active>Dapibus ac facilisis in</b-list-group-item>
  <b-list-group-item>Morbi leo risus</b-list-group-item>
  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
  <b-list-group-item>Vestibulum at eros</b-list-group-item>
  <b-list-group-item>Cras justo odio</b-list-group-item>
  <b-list-group-item active>Dapibus ac facilisis in</b-list-group-item>
  <b-list-group-item>Morbi leo risus</b-list-group-item>
  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
  <b-list-group-item>Vestibulum at eros</b-list-group-item>
  <b-list-group-item>Cras justo odio</b-list-group-item>
  <b-list-group-item active>Dapibus ac facilisis in</b-list-group-item>
  <b-list-group-item>Morbi leo risus</b-list-group-item>
  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
  <b-list-group-item>Vestibulum at eros</b-list-group-item>
</b-list-group>
<!--  <Component /> -->
</div>
</template>

<script>

//import {  rdf} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'GroupChat',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [ToastMixin],
props:['instance'],
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
  /*async getData() {
    let dataDoc = await this.$fc.readFile(this.url);
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
.list-group{
    max-height: 300px;
    margin-bottom: 10px;
    overflow-y:scroll;
    -webkit-overflow-scrolling: touch;
}
</style>
