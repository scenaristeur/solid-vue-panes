<template>
  <div class="modele-view">
    <!--  <Component /> -->
    EditorTtl {{ file.url }}

    <b-list-group>
      <b-list-group-item v-for="t in triples" :key="t">

        <div class="row">
          <div class="col rounded">
            <b><a :href="t.subject.id" target="_blank">{{t.subject.id }}</a></b>
          </div>
          <div class="col">
            {{ t.predicate.id }}
          </div>
          <div class="col">
            <span v-if="t.object.id.startsWith('http')">
              <b><a :href="t.object.id" target="_blank">{{t.object.id }}</a></b>
            </span>
            <span v-else>
              {{ t.object.id }}
            </span>

          </div>

        </div>

      </b-list-group-item>
    </b-list-group>

  </div>
</template>

<script>
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
//import toastMixin from '@/mixins/toastMixin'
import {  fetchDocument } from 'tripledoc';
import { /*vcard, dct, foaf, ldp, rdfs, rdf*/} from 'rdf-namespaces' //
//import auth from 'solid-auth-client';

export default {
  name: 'EditorTtl',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [toastMixin],
props:['file'],
data() {
  return {
    triples: []
  }
},
async created(){
  this.update()
  //  console.log("route",this.$route)
  //  this.url = this.$route.params.url
  //  this.getData()
},
computed:{
  /*storage: {
  get: function() { return this.$store.state.solid.storage},
  set: function() {}
},*/
},
methods: {
  async update(){
    console.log(this.file)
    let fileDoc = await fetchDocument(this.file.url)
    console.log("fileDoc",fileDoc)
    this.triples = fileDoc.getTriples()
    console.log(this.triples)
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
  file(){
    console.log("watch")
    this.update()
  }
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
