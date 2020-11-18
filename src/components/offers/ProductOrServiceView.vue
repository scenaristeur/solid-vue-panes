<template>
  <div class="modele-view">
  <b-card>
    <b-card-title>{{ prod.label }}</b-card-title>
  <b-card-header>  <small>{{ url }}</small></b-card-header>
     <p class="card-text" v-for="(p, k) in prod.quads" :key="'pr'+k">
         {{localname(p.predicate.id)}} : {{ localname(p.object.id) }}
         </p>
     </b-card>
    </div>
</template>

<script>

import {
  getSolidDataset,
  // getThingAll,
  getThing,
  //getLiteral,
  getStringNoLocale,
  // getUrl,
  // getUrlAll
} from "@inrupt/solid-client";
import UtilMixin from '@/mixins/UtilMixin'
import { RDFS, /*FOAF, RDF*/ /*, VCARD*/ } from "@inrupt/vocab-common-rdf";


export default {
  name: 'ProductOrServiceView',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
  mixins: [UtilMixin],
props:['url'],
data() {
  return {
    prod: {}
  }
},
created(){
  this.update()
  //  console.log("route",this.$route)
  //  this.url = this.$route.params.url
  //  this.getData()
},
methods: {
  async update(){
    this.dataset = await getSolidDataset(this.url);
    console.log(this.dataset)
    this.prod = getThing(this.dataset, this.url);
    console.log(this.prod)
    this.prod.label = getStringNoLocale(this.prod, RDFS.label)


  },

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
},*/
url(url){
  console.log("URL CHANGE",url)
  this.update()
}
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
