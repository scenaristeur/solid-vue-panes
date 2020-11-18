<template>
  <div class="">

    <b-card style="max-width: 20rem;" class="mb-2">
      <b-card-title>{{ label }}</b-card-title>
      <b-card-header>
        {{ summary}}
      </b-card-header>


      <!--
      <b-card-text></b-card-text>-->
      <AgoraToolbar :url="object_url"/>
      <b-card-footer>
        <UserName :webId="maker" />
        <Date :dateIso="created"/>
        <!-- actor : {{actor }}<br> -->
        <p>
        types:
        <span v-for="t in types" :key="t.uri">- {{ t.localname }} -</span>


      </p>
        <p><a :href="object_url" target="_blank">link</a></p>
      </b-card-footer>
    </b-card>

  </div>
</template>

<script>
import UtilMixin from '@/mixins/UtilMixin'

import { getStringNoLocale, getUrl, getUrlAll} from "@inrupt/solid-client";
import { RDFS, DCTERMS, AS, FOAF, RDF } from "@inrupt/vocab-common-rdf"; //https://solidproject.org/for-developers/apps/vocabularies/well-known/common#dc
export default {
  name: 'ActivityItem',
  components: {
    'UserName': () => import('@/components/basic/UserName'),
    'Date': () => import('@/components/basic/Date'),
    'AgoraToolbar': () => import('@/components/agora/AgoraToolbar'),
  },
  mixins: [UtilMixin],

  props: ['activity'],
  data: function () {
    return {
      label: "Loding",
      created: "",
      maker: "",
      actor:"",
      summary: "",
      object_url:"",
      types: [],
    }
  },
  created() {
  //  console.log(this.activity)
    this.label = getStringNoLocale(this.activity, RDFS.label);
    this.created = getStringNoLocale(this.activity, DCTERMS.created);
    this.summary = getStringNoLocale(this.activity, AS.summary);
    this.object_url = getUrl(this.activity, AS.object);
    this.maker = getUrl(this.activity, FOAF.maker);
    this.actor = getUrl(this.activity, AS.actor);
  //  this.type = getUrl(this.activity, RDF.type);
    let types = getUrlAll(this.activity, RDF.type);

    this.activitiesUrl = this.$store.state.agora.activitiesUrl

    types.forEach((t) => {
      this.types.push({uri: t, localname: this.localname(t) })
    });

  //  console.log("ACTIVITIES URL",this.activitiesUrl)
  //  console.log("LITERAL TYPE",this.LiteralType)



    //  console.log(this.object_type)
  },
}
</script>
