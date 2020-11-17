<template>
  <div class="resource-view">
    Offer template   <hr>
    <h3>{{ offer.label }}</h3>
    <h5>{{ offer.businessFunction }} </h5>
    <b-card-header>
      <UserName :webId="offer.maker" />
      <Date :dateIso="offer.created"/>
    </b-card-header>

    <p>
      {{ offer.description }}<br>
      {{ offer.object_label }}<br>
      {{ offer.currencyValue }} {{ offer.currency }}
    </p>

    <ul>
      <li v-for ="(q, i) of offer.thing.quads" :key="i">
        <small>{{ q.subject.id }} --> {{ q.predicate.id }} --> {{ q.object.id}}
        </small>
      </li>
    </ul>

    <hr>
    More Offers :
    <ul>
      <li v-for="(t,k) of things" :key="'thi'+k">

        <router-link v-bind:to="{ name: 'View', params: { url: t.internal_url }}">
          <!-- <b-avatar rounded="lg"></b-avatar> -->
          <!-- {{label(t.internal_url)}} -->
          {{t.internal_url}}
        </router-link>
      </li>
    </ul>
    <hr>
    Dataset : {{ dataset }}
    <hr>

  </div>
</template>

<script>
import {
  getSolidDataset,
  getThingAll,
  getThing,
  //  getLiteral,
  getStringNoLocale,
  getUrl
  //   getUrlAll
} from "@inrupt/solid-client";

import { RDFS, FOAF,/*, RDF*/ /*, VCARD*/ } from "@inrupt/vocab-common-rdf";

export default {
  name: 'OfferView',
  components: {
    'UserName': () => import('@/components/basic/UserName'),
    'Date': () => import('@/components/basic/Date'),
  },
  props:['subject','url', 'types'],
  data() {
    return {
      dataset: {},
      things: {},
      offer: {thing:{}, maker:""},

    }
  },
  created(){
    this.update()
  },
  methods: {
    async update() {
      //https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/read-write-data/
      this.dataset = await getSolidDataset(this.url);
      console.log(this.dataset)
      this.things = getThingAll(this.dataset, this.url);
      console.log(this.things)
      this.offer.thing = getThing(this.dataset, this.url);
      console.log(this.offer.thing)
      // console.log(getLiteral(this.thing, RDFS.label))
      // console.log(getStringNoLocale(this.thing, RDFS.label))
      // const types = getUrlAll(this.thing, RDF.type);
      // console.log(types)

      this.offer.label = getStringNoLocale(this.offer.thing, RDFS.label) || this.offer.thing.internal_url
      this.offer.created = getStringNoLocale(this.offer.thing, 'http://purl.org/dc/terms/created')
      this.offer.maker = getUrl(this.offer.thing, FOAF.maker)
      this.offer.businessFunction = getUrl(this.offer.thing, 'http://purl.org/goodrelations/v1#hasBusinessFunction')
      this.offer.description = getStringNoLocale(this.offer.thing, 'http://purl.org/goodrelations/v1#description')
      this.offer.currencyValue = getStringNoLocale(this.offer.thing, 'http://purl.org/goodrelations/v1#hasCurrencyValue')
      this.offer.currency = getStringNoLocale(this.offer.thing, 'http://purl.org/goodrelations/v1#hasCurrency')

    },
    // label(resource){
    //   return getLiteral(resource, RDFS.label) || resource
    // }
  },
  watch:{
    url(){
      console.log(this.url)
      this.update()
    }
  }
}

</script>
<style>
.resource-view {
  text-align: left;
}
</style>
