<template>
  <div class="modele-view mt-5">
    <h3>{{ type }}</h3>
    <Thing  v-for="d in donnees" :key="d['@id']" :thing="d" />
    <b-button size="sm" v-for="d in donnees" :key="d['@id']+'_1'" :variant="variant">
      {{ d['pair:label'] || d['pair:firstName']+' '+d['pair:lastName'] }}
    </b-button>


    <br>
    path :   {{path}} /
    source name :  {{ currentEndpoint.name }} /
    Source:  {{ source }} /    {{donnees.length}}

  </div>
</template>

<script>
import axios from 'axios';
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'SemappsComponent',
  components: {
    'Thing': () => import('@/components/basic/Thing'),
  },
  //  mixins: [ToastMixin],
  props:['path', 'type', 'variant'],
  data() {
    return {
      source: null,
      donnees: []
      //  type: null
    }
  },
  created(){
    //  this.currentEndpoint = this.$store.state.semapps.currentEndpoint
    //  console.log("route",this.$route)
    //  this.url = this.$route.params.url
    //  this.getData()
  },
  methods: {
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
currentEndpoint(e){
  this.source = e.url+this.path
  console.log(this.source)

},
source(source){
  axios({
  method: 'get',
  url: source,
  responseType: 'application/ld+json'
})
  .then(response => {
    this.response = response
    this.donnees = response.data["ldp:contains"]
    //  console.log(this.response)
    console.log(this.donnees);
    //  console.log(response.status);
    //  console.log(response.statusText);
    //  console.log(response.headers);
    //  console.log(response.config);

  })
  .catch(/*error*/() => {
  //  console.log(error);
    this.donnees = []
  })
  /*axios.get('/user', {
  params: {
  ID: 12345
}
})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
})
.then(function () {
// always executed
});
*/
}
},
computed:{
  currentEndpoint: {
    get: function() { return this.$store.state.semapps.currentEndpoint},
    set: function() {}
  },
},
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
