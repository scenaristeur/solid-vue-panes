<template>
  <div class="">

    <b-card style="max-width: 20rem;">
      <b-card-title>{{ label }}</b-card-title>
      <b-card-header>
        <UserName :webId="maker" />
        <Date :dateIso="created"/>
      </b-card-header>

      <b-card-text>{{ summary}}</b-card-text>
      <b-button  v-bind:to="{ name: 'View', params: { url: object_url }}" variant="outline-info">See</b-button>
      {{ object_url }}

      <b-card-footer>

        actor : {{actor}}<br>
        type: {{ type}}<br>
      </b-card-footer>
    </b-card>

  </div>
</template>

<script>

import { getStringNoLocale, getUrl} from "@inrupt/solid-client";
import { RDFS, DCTERMS, AS, FOAF, RDF } from "@inrupt/vocab-common-rdf"; //https://solidproject.org/for-developers/apps/vocabularies/well-known/common#dc
export default {
  name: 'ActivityItem',
  components: {
    'UserName': () => import('@/components/basic/UserName'),
    'Date': () => import('@/components/basic/Date'),
  },
  props: ['activity'],
  data: function () {
    return {
      label: "Loding",
      created: "",
      maker: "",
      actor:"",
      summary: "",
      object_url:"",
      type:"",
    }
  },
  created() {
    this.label = getStringNoLocale(this.activity, RDFS.label);
    this.created = getStringNoLocale(this.activity, DCTERMS.created);
    this.summary = getStringNoLocale(this.activity, AS.summary);
    this.object_url = getUrl(this.activity, AS.object);
    this.maker = getUrl(this.activity, FOAF.maker);
    this.maker = getUrl(this.activity, FOAF.maker);
    this.actor = getUrl(this.activity, AS.actor);
    this.type = getUrl(this.activity, RDF.type);
  },
}
</script>
