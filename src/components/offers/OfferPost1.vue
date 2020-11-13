<template>
  <div class="modele-view">

    <b-button v-if="active == false" @click="newOffer">New Offer</b-button>
    <div v-else>

      if you want to add lots of picture, prefer using <a href="https://solidweb.org/register" target="_blank">https://solidweb.org</a> (250Mo) instead of <a href="https://solidcommunity.net/register"  target="_blank">https://solidcommunity.net</a> (25Mo)

      <b-input-group prepend="title">
        <b-form-input v-model="offer.title"></b-form-input>
      </b-input-group>

      <b-input-group prepend="Categories">

        <b-form-input v-model="offer.categories" placeholder="/cars/prestige/BMW, "></b-form-input>
      </b-input-group>
      <small>can be nested categories : /cars/prestige/BMW or coma separated : furniture, decoration, fun</small>


      <b-input-group prepend="Type">
        <b-form-input v-model="offer.type" placeholder="service, item..."></b-form-input>
      </b-input-group>

      <b-input-group prepend="Status">
        <b-form-input v-model="offer.status" placeholder="new, used, handlemade "></b-form-input>
      </b-input-group>


      <b-input-group prepend="Add one property per line">
        <b-form-textarea
        id="props_textarea"
        v-model="offer.properties"
        placeholder="width: 20cm..."
        rows="3"
        max-rows="6"
        ></b-form-textarea>
      </b-input-group>
      <small>Style : "property: value", ex :<br> weight: 24 kg<br>width: 20cm<br>height: 89 cm</small>



      <b-input-group prepend="Description">
        <b-form-textarea
        id="desc_textarea"
        v-model="offer.description"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
        ></b-form-textarea>
      </b-input-group>






      <br>
      <b-button variant="success" @click="create">Submit</b-button>





    </div>




  </div>
</template>

<script>
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'OfferPost',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [ToastMixin],
props:['value'],
data() {
  return {
    active: true,
    offer: {},
    BusinessFunction: [
      "gr:ConstructionInstallation",
      "gr:Dispose",
      "gr:LeaseOut",
      "gr:Maintain",
      "gr:ProvideService",
      "gr:Repair",
      "gr:Sell",
      "gr:Buy",
    ]
  }
},
created(){
  //  console.log("route",this.$route)
  //  this.url = this.$route.params.url
  //  this.getData()
},
methods: {
  newOffer(){
    this.active = !this.active
  },
  create(){
    console.log(this.offer)







    this.active = false
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
