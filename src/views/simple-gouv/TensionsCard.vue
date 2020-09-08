<template>
  <div class="modele-view">
    <!--  <Component /> -->
    <b-card
    style="max-width: 20rem;"
    class="mb-2">
    <b-card-title>Tensions</b-card-title>
    <b-card-header>
      A tension is a difference between "What is" and "What should be". I'm sure there are a lot of thing that you want to change...
    </b-card-header>

    <b-card-text>
      <b-button-toolbar key-nav aria-label="Toolbar with button groups">
        <b-button-group class="mx-1" size="sm">
          <b-button variant="outline"  to="/tension/edit"><b-icon icon="plus-square" aria-hidden="true" variant="info"></b-icon> </b-button>
          <b-button variant="outline"  to="/tensions"> <b-icon icon="list" variant="info"></b-icon></b-button>
        </b-button-group>
      </b-button-toolbar>
    </b-card-text>
    <b-card-footer>

    </b-card-footer>
    {{ config.workspace}}<br>
    gf : {{ path}}

  </b-card>
</div>
</template>

<script>
// @ is an alias to /src
import auth from 'solid-auth-client';
const SolidFileClient = window.SolidFileClient
const fc = new SolidFileClient(auth)

export default {
  name: 'TensionsCard',
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
  async  updatePath(){
    this.path = this.config.workspace+"tensions/"
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
