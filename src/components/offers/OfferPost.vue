<template>
  <div class="modele-view">

    <b-button v-if="active == false" @click="newOffer">New Offer</b-button>
    <div v-else>
      <hr>
      <h4>Offering</h4> <a href="http://purl.org/goodrelations/v1#Offering" target="_blank">? <small>Good Relations</small></a>
      <b-input-group prepend="Business Entity">
        <b-form-input v-model="offer['gr:businessEntity']"></b-form-input>
      </b-input-group>
      <b-input-group prepend="Business Function">
        <b-form-select class="" v-model="offer['gr:hasBusinessFunction']" :options="businessFunctionOptions"></b-form-select>
      </b-input-group>
      <b-input-group prepend="Name">
        <b-form-input v-model="offer['gr:name']" placeholder="Name of the Offering"></b-form-input>
      </b-input-group>
      <b-input-group prepend="Description">
        <b-form-textarea
        id="desc_textarea"
        v-model="offer['gr:description']"
        placeholder="Description of the Offering..."
        rows="3"
        max-rows="6"
        ></b-form-textarea>
      </b-input-group>
      <h4>Product or Service</h4>
      <b-input-group prepend="Name">
        <b-form-input v-model="offer.object['gr:name']" placeholder="What is the product or Service ?"></b-form-input>
      </b-input-group>
      <b-input-group prepend="Add an Product / Service Property">
        <b-form-select class="" v-model="newProp" :options="object_properties"></b-form-select>
      </b-input-group>

      <b-input-group :prepend="newProp" v-if="newProp.length > 0">
        <b-form-input v-model="propValue" :placeholder="newProp"></b-form-input>
        <b-button @click="addProperty">Add</b-button>
      </b-input-group>

      <div v-if="Object.entries(offer.object).length > 0">
        Résumé
        <b-list-group>
          <b-list-group-item v-for="(prop, id) of Object.entries(offer.object)" :key="id">
            <!-- {{ prop }}<br>
            type :     {{ }} <br> -->

            <h5>{{ prop[0] }} :</h5>
            <div v-if=" typeof prop[1] == 'string'">
              {{prop[1]}}
            </div>
            <div v-else v-for="(p, id2) in prop[1]" :key="id2">
              {{ p }}
            </div>


          </b-list-group-item>
        </b-list-group>
      </div>

      <b-button variant="success" @click="create">Submit</b-button>
      <hr>    <hr>    <hr>
    </div>


    <!-- if you want to add lots of picture, prefer using <a href="https://solidweb.org/register" target="_blank">https://solidweb.org</a> (250Mo) instead of <a href="https://solidcommunity.net/register"  target="_blank">https://solidcommunity.net</a> (25Mo)



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





<br> -->



</div>
</template>

<script>
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
import SolidMixin from '@/mixins/SolidMixin'

export default {
  name: 'OfferPost',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
 mixins: [SolidMixin],
props:['value'],
data() {
  return {
    active: true,
    offer: {
      "@context":  [ "https://www.w3.org/ns/activitystreams",
      {"@language": "en"},
      {"gr": "http://purl.org/goodrelations/v1"}],
      "@id": "",
      "type": "gr:Offering",
      "gr:hasBusinessFunction": null,
      "gr:name": "",
      "gr:description": "",
      "published": "",
      "object": {}
    },
    businessFunctionOptions: [
      {value: null, text: 'Please select an Business Function (Selectionnez un type de transaction)' },
      {value: "gr:Sell", text:"Sell (Vente)"},
      {value: "gr:Buy", text:"Buy (Achat)"},
      {value: "gr:ProvideService", text:"Provide Service (Fourniture de Service)"},
      {value: "gr:Repair", text:"Repair (Reparation)"},
      {value: "gr:ConstructionInstallation", text:"Construction Installation"},
      {value: "gr:Dispose", text:"Dispose (Don)"},
      {value: "gr:LeaseOut", text:"Lease Out (Location)"},
      {value: "gr:Maintain", text:"Maintain (Maintenance)"},
    ],
    object_properties : [
      {value: "gr:category", text:"category"},
      {value: "gr:color", text:"color"},
      {value: "gr:condition", text:"condition"},
      {value: "gr:datatypeProductOrServiceProperty", text:"datatypeProductOrServiceProperty"},
      {value: "gr:depth", text:"depth"},
      {value: "gr:description", text:"description"},
      {value:  "gr:hasBrand", text:"hasBrand"},
      {value:  "gr:hasEAN_UCC-13", text:"hasEAN_UCC"},
      {value:  "gr:hasGTIN-14", text:"hasGTIN"},
      {value:  "gr:hasGTIN-8", text:"hasGTIN"},
      {value:  "gr:hasMPN", text:"hasMPN"},
      {value:  "gr:hasManufacturer", text:"hasManufacturer"},
      {value:  "gr:hasStockKeepingUnit", text:"hasStockKeepingUnit"},
      {value:  "gr:height", text:"height"},
      {value:  "gr:isAccessoryOrSparePartFor", text:"isAccessoryOrSparePartFor"},
      {value:  "gr:isConsumableFor", text:"isConsumableFor"},
      {value:  "gr:isSimilarTo", text:"isSimilarTo"},
      {value:  "gr:name", text:"name"},
      {value:  "gr:qualitativeProductOrServiceProperty", text:"qualitativeProductOrServiceProperty"},
      {value:  "gr:quantitativeProductOrServiceProperty", text:"quantitativeProductOrServiceProperty"},
      {value:  "gr:weight", text:"weight"},
      {value:  "gr:width", text:"width"}
    ],
    newProp: "",
    propValue:""

    //  businessFunction: null
  }
},
created(){
  this.webId = this.$store.state.solid.webId
  this.init()
  //  console.log("route",this.$route)
  //  this.url = this.$route.params.url
  //  this.getData()
},
methods: {
  newOffer(){
    this.active = !this.active
  },
  addProperty(){
    console.log(this.newProp, this.propValue)
    //this.propField = this.newProp
    this.offer.object[this.newProp] == undefined ? this.offer.object[this.newProp] = [] : ""
    this.propValue.length > 0 ? this.offer.object[this.newProp].push(this.propValue) : ""
    this.propValue = ""
    console.log(this.offer.object)
  },


  init(){
    // https://www.w3.org/TR/activitystreams-core/#extensibility
    //based on JSON-LD activitypub example https://www.w3.org/TR/activitypub/#obj-id
    //https://www.w3.org/TR/activitypub/#create-activity-outbox
    // this.offer['@context'] = ["https://www.w3.org/ns/activitystreams", {"@language": "en"}],
    // this.offer.type = ""
    // this.offer.id = "_???"
    // this.offer.gr_businessEntity = this.webId
    this.offer['gr:businessEntity'] = this.webId
  },
  create(){

    let d = new Date()
    //  this.d = d
    let iso_date = d.toISOString()
    this.offer.published = iso_date
    this.offer.actor = this.webId
    this.offer.folder = "public/Offering/"

    if (this.offer["gr:hasBusinessFunction"] == null){
      alert ("you must select business Function")
    }else{
      this.offer.publish = true
      console.log(this.offer)
      this.putOnPod(this.offer)

      this.active = false
    }

    //  console.log(this.businessFunction)
    //foo:imageLicense a gr:License;
    //     rdfs:label "ACME Image License (gr:License)"@en .
    //
    // foo:offer a gr:Offering;
    //     gr:hasBusinessFunction foo:imageLicense .


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
  webId(){
    console.log(this.webId)
    this.init()
  }
  /*'$route' (to) {
  //  '$route' (to, from) {
  console.log(to)
},
url(url){
console.log("URL CHANGE",url)
}*/
},
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
