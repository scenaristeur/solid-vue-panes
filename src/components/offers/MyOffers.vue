<template>
  <div class="modele-view">
    <!--  <Component /> -->
    MyOffers
    <OfferPost />
  </div>
</template>

<script>

//import {  rdf} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'MyOffers',
  components: {
    'OfferPost': () => import('@/components/offers/OfferPost'),
  },
  //  mixins: [ToastMixin],
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
</style>
