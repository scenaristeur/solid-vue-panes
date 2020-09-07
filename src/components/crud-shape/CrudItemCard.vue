<template>
  <div class="crud-item-card">
    <b-card

    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2">
    <!--    img-src="https://picsum.photos/600/300/?image=25" -->
    <b-card-title>{{decodeURI(item.name)}}</b-card-title>
    <b-card-text>
      {{purpose}}
    </b-card-text>
    <!--    <CrudToolbar :shape="shape" />-->
    <!--<b-button href="#" variant="primary">Go somewhere</b-button>-->
    <small>
    {{ dateCreated}} <br> {{ item.url }}
    </small>
  </b-card>
</div>
</template>

<script>
//import ShexMixin from '@/mixins/crud/ShexMixin'
import {
  getSolidDataset,
  getThing,
  getStringNoLocale,
} from "@inrupt/solid-client";
//import { SCHEMA } from "@inrupt/vocab-common-rdf";

export default {
  name: 'CrudItemCard',
  //mixins: [ShexMixin],
  components: {
    //'CrudToolbar': () => import('@/components/crud-shape/CrudToolbar'),
  },
  props: ['item'],
  data: function () {
    return {
      dateCreated: "",
      purpose: ""
      //  webId: {},
      //  friends: [],
    }
  },
  async   created() {
    let file = this.item.url+this.item.name+".ttl"
    let resource =   this.item.url+this.item.name+".ttl#this"
    console.log(file, resource)
    const itemResource = await getSolidDataset(
      file
    );
    const thing = getThing(
      itemResource,
      resource
    );

    this.dateCreated = getStringNoLocale(thing, "https://schema.org/dateCreated");
  //  console.log("Date created",dateCreated)
    this.purpose = getStringNoLocale(thing, "http://www.w3.org/ns/org#purpose");
  //  console.log("PURPOSE",purpose)
    //  this.load_schema()
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    storage (st) {
      //  '$route' (to, from) {
      console.log(st)
    },
    /*shape(s){
    console.log("shape changed",s)
    //  this.load_schema()
  }*/

},
methods:{
  /*
  load_schema(){
  this.load_remote_schema(this.shape.url)
}*/

/*  async updateFriends(){
this.friends = await this.getFriends(this.webId)
}*/
},
computed:{
  storage(){
    return this.$store.state.solid.storage
  }
}
}
</script>
