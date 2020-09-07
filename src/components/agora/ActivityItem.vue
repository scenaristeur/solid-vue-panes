<template>
  <div class="activity container">
    Label :  {{ label }}<br>
    Maker:   {{maker}}<br>
    created :    {{created}}<br>
    actor :  {{actor}}<br>
    summary :  {{ summary}}<br>
    object:  <router-link v-bind:to="{ name: 'Groups', params: { url: object }}"> {{ object}}</router-link><br>
    type:     {{ type}}<br>
  </div>
</template>

<script>

import { getStringNoLocale, getUrl} from "@inrupt/solid-client";
  import { RDFS, DCTERMS, AS, FOAF, RDF } from "@inrupt/vocab-common-rdf"; //https://solidproject.org/for-developers/apps/vocabularies/well-known/common#dc
  export default {
    name: 'ActivityItem',
    components: {
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
      }
    },
    created() {
      this.label = getStringNoLocale(this.activity, RDFS.label);
      this.created = getStringNoLocale(this.activity, DCTERMS.created);
      this.summary = getStringNoLocale(this.activity, AS.summary);
      this.object = getUrl(this.activity, AS.object);
      this.maker = getUrl(this.activity, FOAF.maker);
      this.maker = getUrl(this.activity, FOAF.maker);
      this.actor = getUrl(this.activity, AS.actor);
      this.type = getUrl(this.activity, RDF.type);
    },
  }
  </script>
