<template>
  <div>
    <b-card>
      <b-card-title>{{ prod.label }}</b-card-title>
      <b-card-header>  <small>{{ url }}</small></b-card-header>
      <p class="card-text" v-for="(p, k) in prod.quads" :key="'pr'+k">
        {{localname(p.predicate.id)}} : {{ localname(p.object.id) }}
      </p>
    </b-card>
  </div>
</template>

<script>

import {
  getSolidDataset,
  getThing,
  getStringNoLocale,
} from "@inrupt/solid-client";
import UtilMixin from '@/mixins/UtilMixin'
import { RDFS} from "@inrupt/vocab-common-rdf";


export default {
  name: 'ProductOrServiceView',
  mixins: [UtilMixin],
  props:['url'],
  data() {
    return {
      prod: {}
    }
  },
  created(){
    this.update()
  },
  methods: {
    async update(){
      this.dataset = await getSolidDataset(this.url);
      this.prod = getThing(this.dataset, this.url);
      this.prod.label = getStringNoLocale(this.prod, RDFS.label)
    },
  },
  watch:{
    url(){
      this.update()
    }
  },
}
</script>
