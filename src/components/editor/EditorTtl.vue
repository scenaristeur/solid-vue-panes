<template>
  <div class="modele-view">
    <!--  <Component /> -->
    EditorTtl {{ file.url }}

    <b-list-group>
      <b-list-group-item v-for="(t,i) in triples" :key="i">
        <div class="row">
          <div class="col rounded">
            <b><a :href="t.subject.id" target="_blank">{{t.subject.id }}</a></b>
          </div>
          <div class="col">
            {{ t.predicate.id }}
          </div>
          <div class="col">
            <span v-if="t.object.id.startsWith('http')">
              <b><a :href="t.object.id" target="_blank">{{t.object.id }}</a></b>
            </span>
            <span v-else>
              {{ t.object.id }}
            </span>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import {  fetchDocument } from 'tripledoc';

export default {
  name: 'EditorTtl',
//props:['file'],
data() {
  return {
    triples: []
  }
},
async created(){
  this.file = this.$store.state.solid.file
  this.update()
},

methods: {
  async update(){
    this.triples = []
    console.log(this.file.url)
    if (this.file.url != undefined && (this.file.url.endsWith('.ttl') || (this.file.url.endsWith('card')))){
      let fileDoc = await fetchDocument(this.file.url)
      console.log("fileDoc",fileDoc)
      this.triples = fileDoc.getTriples()
      console.log(this.triples)
    }else{
      console.log(this.file.url)
    }

  }
},
watch:{
  file(){
    console.log("watch")
    this.update()
  }
},
computed:{
file: {
  get: function () {return this.$store.state.solid.file},
  set: function (file) {return this.$store.commit('solid/setFile', file)}
},
}
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
