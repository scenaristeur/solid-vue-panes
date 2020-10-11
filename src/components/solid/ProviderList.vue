<template>
  <div class="container">
    <!--  <Component /> -->


    <div>
      <b-dropdown id="dropdown-1" text="If you don't have a SOLID POD, some provider can give you one" class="m-md-2">
        <b-dropdown-item
        v-for="o in options"
        :key="o.url"
        :title="o.description"
        @click="openProvider(o)"
        :disabled="o.disabled">{{o.text}}</b-dropdown-item>
      </b-dropdown>
    </div>
    <small>List : {{ source }}</small>
  </div>
</template>

<script>
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'ProviderList',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [ToastMixin],
props:['value'],
data() {
  return {
    source: "https://ewingson.solidcommunity.net/public/ttl/pod-provider.ttl",
    options: [
      {text: "Inrupt.net", description:"inrupt.net is a public Solid server provided by Inrupt, Inc.", url:"https://inrupt.net/"},
      {text: "solidcommunity.net", description:"solidcommunity.net is a public Solid server.", url:"https://solidcommunity.net/"},
      {text: "dev.inrupt.net", description:"dev.inrupt.net is a public Solid development server of Inrupt, Inc.", url:"https://dev.inrupt.net/"},
      {text: "solidweb.org", description:"solidweb.org is a public Solid server based in Germany which is in an experimental state.", url:"https://solidweb.org/"},
      {text: "solid.open.ac.uk", description:"solid.open.ac.uk is a public Solid server based at the UK's Open University.", url:"https://solid.open.ac.uk/"},
      {text: "https://solid.pldn.nl/", description:"solid.pldn.nl is an experimental public Solid server based in the Netherlands.", url:"https://solid.pldn.nl"},
      {text: "solid.openlinksw.com:8444", description:"solid.openlinksw.com:8444 is a public Solid server running 4.x deployed by OpenLink Software Inc., U.S.", url:"https://solid.openlinksw.com:8444"},
      {text: "solid.openlinksw.com:8445", description:"solid.openlinksw.com:8444 is a public Solid server running 5.x deployed by OpenLink Software Inc., U.S.", url:"https://solid.openlinksw.com:8445/"},
      {text: "ld.solidbase.info", description:"ld.solidbase.info is a public Solid server hosted by ecobytes.net, Germany.", url:"https://ld.solidbase.info/", disabled:true},
      {text: "solid.authing", description:"solid.authing was a public Solid server deployed in China.", url:"https://solid.authing.cn/", disabled:true},
      {text: "podware.org", description:"podware.org was a public Solid server deployed in Italy", url:"https://podware.org", disabled:true},
      {text: "solid.community", description:"solid.community was a public server for early adopters of Solid.", url:"https://solid.community/", disabled:true},
      {text: "BECOME A POD PROVIDER", description:"Build Your POD PROVIDER", url:"https://solidproject.org/for-developers/pod-server"},
    ]
  }
},
created(){
  //  console.log("route",this.$route)
  //  this.url = this.$route.params.url
  //  this.getData()
},
methods: {
  openProvider(p){
    console.log(p)
    window.open(p.url, '_blank');

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
