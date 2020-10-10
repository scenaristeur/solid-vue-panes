<template>
  <div class="modele-view">
    <!--  <Component /> -->
    <b-card
    style="max-width: 20rem;"
    class="mb-2">
    <b-card-title>Groups</b-card-title>
    <b-card-text>
      Some quick example text to build on the card and make up the bulk of the card's content.
      <br>
      {{ config.workspace}}<br>
      gf : {{ path}}
    </b-card-text>
  </b-card>
</div>
</template>

<script>
// @ is an alias to /src
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
import groupsMixin from '@/mixins/groupsMixin'

export default {
  name: 'GroupsView',
  mixins: [groupsMixin],
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
data: function () {
  return {
    path: "",
  }
},
created(){
  this.config = this.$store.state.gouvernance.config
  this.updatePath()
},
watch: {
  config (c) {
    console.log(c)
    this.updatePath()
  },
},
methods:{
async   updatePath(){
    this.path = this.config.workspace+"groups/"
    this.folder = await fc.readFolder(this.path)
  }
},
computed:{
  config: {
    get: function() { return this.$store.state.gouvernance.config},
    set: function() {}
  },
}
}
</script>
