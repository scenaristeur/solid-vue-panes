<template>
  <div class="resource-view">

    No template found for {{ types }}. <br>
    Switching to the default view for <a v-bind:href="url" target="_blank">{{url}}</a>.
    <hr>
    Thing : <b>{{ thing.internal_url }}</b><br>
    <ul>
      <li v-for ="(q, i) of thing.quads" :key="i">
        <small>{{ q.subject.id }} --> {{ q.predicate.id }} --> {{ q.object.id}}
        </small>
      </li>
    </ul>
    {{ thing.quads}}
    <hr>
    Things : {{ things }}
    <hr>
    Dataset : {{ dataset }}
    <hr>

  </div>
</template>

<script>
import {
  getSolidDataset,
  getThingAll,
  getThing
  // getStringNoLocale,
  // getUrlAll
} from "@inrupt/solid-client";

// import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";

export default {
  name: 'ResourceView',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
props:['subject','url', 'types'],
data() {
  return {
    dataset: {},
    things: {},
    thing: {}
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
    this.thing = getThing(this.dataset, this.url);
    console.log(this.thing)
  }
}
}

</script>
<style>
.resource-view {
  text-align: left;
}
</style>
