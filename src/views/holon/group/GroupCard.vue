<template>
  <div class="groups-view">
    <b-card

    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2">
    <!--    img-src="https://picsum.photos/600/300/?image=25" -->
    <b-card-title>{{decodeURI(item.name)}}</b-card-title>
    <b-card-text>
      Purpose : {{purpose.substring(0,100)}}
    </b-card-text>
    <b-card-text>
      Parent : {{parent}}
    </b-card-text>
    <!--    <CrudToolbar :shape="shape" />-->
    <b-button @click="open" variant="primary">Open</b-button>
    <small>
      {{ dateCreated}} <br> {{ item.url }}
    </small>
  </b-card>
</div>
</template>

<script>
// @ is an alias to /src
import {
  getSolidDataset,
  getThing,
  getStringNoLocale,
  getUrl
} from "@inrupt/solid-client";

export default {
  name: 'GroupCard',
  components: {
    //    'GroupsView': () => import('@/views/holon/GroupsView'),

  },
  props: ['item'],
  data: function () {
    return {
      dateCreated: "",
      purpose: "",
      parent : ""
      //  webId: {},
      //  friends: [],
    }
  },
  async   created() {
    let file = this.item.url+"index.ttl"
    let resource =   this.item.url+"index.ttl#this"
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
    this.parent = getUrl(thing, "http://www.w3.org/ns/org#subOrganizationOf");
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
  open(){
    this.$router.push('/group')
    this.$store.commit('gouvernance/setCurrentGroup', this.item)
  }
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
