<template>
  <div class="modele-view">
    <!--  <Component /> -->

    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">
          <router-link
          v-bind:to="{ name: 'Semapps', params: { url: id }}"
          >{{ label }}</router-link>
        </h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ type }}</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <!--<p v-for="m in members" :key="m">{{m}}</p>-->

        <p>
            <b v-if="members.length > 0">Involves</b><br>
          <b-button
          v-for="m in members" :key="m"
          v-bind:to="{ name: 'Semapps', params: { url: m }}" variant="outline-info">{{m}} </b-button>

          <b v-if="involves.length > 0">Involves</b><br>
          <b-button
          v-for="i in involves" :key="i"
          v-bind:to="{ name: 'Semapps', params: { url: i }}" variant="outline-info">{{i}} </b-button>



        </p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>


    {{ Object.entries(thing) }}

    <br>
  </div>
</template>

<script>
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'Thing',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [ToastMixin],
props:['thing'],
data() {
  return {
    //
  }
},
created(){
  this.update()
  //  console.log("route",this.$route)
  //  this.url = this.$route.params.url
  //  this.getData()
},
methods: {
  update(){

    this.label = this.thing['pair:label'] || this.thing['pair:firstName']+' '+this.thing['pair:lastName']
    this.id = this.thing['@id']
    this.type = this.thing['@type']
    this.members = this.stringOrArray(this.thing['pair:hasMember'])
    this.involves = this.stringOrArray(this.thing['pair:involves'])

  },
  stringOrArray(entries){
    let result = []
    if( entries != undefined ){
      if ( typeof entries == "string" ){
        result.push(entries)
      }else{
        entries.forEach((m) => {
          result.push(m)
        });
      }
    }
    return result
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
