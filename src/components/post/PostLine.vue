<template>
  <div class="post-line container">

  <b-card
  tag="article"
  style="max-width: 20rem;"
  class="mb-2">
  <b-card-img src=""></b-card-img>
  <b-card-title>{{ label }}</b-card-title>
  <b-card-text>
    {{content}}
  </b-card-text>

  <b-card-footer>
    <small>{{created}}</small>
  </b-card-footer>
  <small>{{maker.split('/').slice(2,3)[0]}}</small>
  {{type}}

  <!--<b-button href="#" variant="primary">Go somewhere</b-button> -->
</b-card>
</div>
</template>

<script>
import { getSolidDataset, getThing, getStringNoLocale, getUrl} from "@inrupt/solid-client";
import { RDFS, FOAF , DCTERMS, RDF } from "@inrupt/vocab-common-rdf";

export default {
  name: 'PostLine',
  props: ['post'],
data: function () {
  return {
    label : "",
    created : "",
    maker: "",
    content: "...loading artcle...",
    type: ""
  }
},
async created() {
  const myDataset = await getSolidDataset(
    this.post.internal_url
  );
  const thing = getThing(
    myDataset,
    this.post.internal_url
  );
  this.label = getStringNoLocale(thing, RDFS.label)
  this.maker = getUrl(thing, FOAF.maker);
  this.created = getStringNoLocale(thing, DCTERMS.created)
  this.type = getStringNoLocale(thing, RDF.type)
  this.content = getStringNoLocale(thing, "http://rdfs.org/sioc/ns#content")
//  console.log("POSTLINE", this.post)
},
computed:{
  storage:{
    get: function() { return this.$store.state.solid.storage},
    set: function() {}
  },
}
}
</script>
