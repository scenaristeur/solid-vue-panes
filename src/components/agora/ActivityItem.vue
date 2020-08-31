<template>
  <div class="activity container">
    Label :  {{ label }}<br>
    Maker:   {{maker}}<br>
    created :    {{created}}<br>
    actor :  {{actor}}<br>
    summary :  {{ summary}}<br>
    object:   {{ object}}<br>
    type:     {{ type}}<br>

  </div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'
import {
  getStringNoLocale, getUrl} from "@inrupt/solid-client";
  import { RDFS, DCTERMS, AS, FOAF, RDF } from "@inrupt/vocab-common-rdf"; //https://solidproject.org/for-developers/apps/vocabularies/well-known/common#dc
  //FOAF,
  export default {
    name: 'ActivityItem',
    //mixins: [profileMixin],
    components: {
      //'PeopleItem': () => import('@/components/profile/PeopleItem'),
    },
    props: ['activity'],
    data: function () {
      return {
        label: "Loding",
        created: "",
        maker: "",
        actor:"",
        summary: "",
        object:"",
        type:"",

        //  webId: {},
        //  friends: [],
      }
    },
    created() {
      this.label = getStringNoLocale(this.activity, RDFS.label);
      this.created = getStringNoLocale(this.activity, DCTERMS.created);
      this.summary = getStringNoLocale(this.activity, AS.summary);
      this.object = getStringNoLocale(this.activity, AS.object);
      console.log("Summary",this.summary)
      this.maker = getUrl(this.activity, FOAF.maker);
      console.log("maker", this.maker)
      this.maker = getUrl(this.activity, FOAF.maker);
      this.actor = getUrl(this.activity, AS.actor);
      console.log("actor",this.actor)
      this.type = getUrl(this.activity, RDF.type);
      console.log("type", this.type)
      /* NE SEMBLE PAS FONCTIONNER VIENT DE LA CREATION AVEC TRIPLEDOC ?
      */
      this.type2 = getUrl(this.activity, AS.type);
      console.log("type AS", this.type2)


      console.log("LAB",this.label)
      //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
      //  this.updateFriends()
    },
    watch: {
      storage (st) {
        //  '$route' (to, from) {
        console.log(st)
      }
    },
    methods:{
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
