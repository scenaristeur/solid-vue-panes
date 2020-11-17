<template>
  <div class="resource-view">
Default  Resource Template <br>
    No template found for {{ types }}. <br>
    Switching to the default view for <a v-bind:href="url" target="_blank">{{url}}</a>.
    <hr>

    <h3>{{ resource.label }}</h3>
    <h5>{{ resource.businessFunction }} </h5>
    <b-card-header>
      <UserName :webId="resource.maker" />
      <Date :dateIso="resource.created"/>
    </b-card-header>


    <ul>
      <li v-for ="(q, i) of resource.thing.quads" :key="i">
        <small>{{ q.subject.id }} --> {{ q.predicate.id }} --> {{ q.object.id}}
        </small>
      </li>
    </ul>
    <hr>
    More Resources :
    <ul>
      <li v-for="(t,k) of things" :key="'th'+k">

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
  getStringNoLocale,
   getUrl
} from "@inrupt/solid-client";

import { RDFS, FOAF/* VCARD*/ } from "@inrupt/vocab-common-rdf";

export default {
  name: 'ResourceView',
  components: {
    'UserName': () => import('@/components/basic/UserName'),
    'Date': () => import('@/components/basic/Date'),
  },
props:['subject','url', 'types'],
data() {
  return {
    dataset: {},
    things: {},
    resource: {thing: {}, maker:""}
  }
},
created(){
  this.update()
},
methods: {
  async   update() {
    //https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/read-write-data/
    this.dataset = await getSolidDataset(this.url);
    console.log(this.dataset)
    this.things = getThingAll(this.dataset, this.url);
    console.log(this.things)
    this.resource.thing = getThing(this.dataset, this.url);
    console.log(this.resource.thing)
    this.resource.label = getStringNoLocale(this.resource.thing, RDFS.label) || this.resource.thing.internal_url
    this.resource.created = getStringNoLocale(this.resource.thing, 'http://purl.org/dc/terms/created')
    this.resource.maker = getUrl(this.resource.thing, FOAF.maker) || ""
  },

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
