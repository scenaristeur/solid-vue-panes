<template>
  <div class="modele-view">
    <!--  <Component /> -->
    <b-card
    style="max-width: 20rem;"
    class="mb-2">
    <b-card-title>Domains</b-card-title>
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

export default {
  name: 'DomainsView',
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
    this.path = this.config.workspace+"domains/"
    this.folder = await this.$fc.readFolder(this.path)
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
