<template>
  <div class="modele-view container">
    <!--  <Component /> -->
    <div v-if="currentWorkspace.name == 'gouvernance'">
      <b-list-group>
        <b-list-group-item v-for="t in tensions" :key="t.url">
          <TensionItem :tension="t" />
        </b-list-group-item>
      </b-list-group>
      path : {{ path }}
    </div>
    <div v-else>
      To use this part of Popock, you need to choose a workspace with name "gouvernance".<br>
      <b-button size="sm" to="/workspaces" variant="outline-warning"><span v-if="currentWorkspace.name != undefined">{{ currentWorkspace.name}}</span> <span v-else>Workspaces </span></b-button>

    </div>



  </div>
</template>

<script>
// @ is an alias to /src


// @ is an alias to /src
import TensionMixin from '@/mixins/TensionMixin'

export default {
  name: 'TensionsList',
  mixins: [TensionMixin],
  components: {
    'TensionItem': () => import('@/views/tension/TensionItem'),
  },
  data: function () {
    return {
      path: "",
      tensions:[]
    }
  },
  created(){
    this.currentWorkspace = this.$store.state.workspaces.currentWorkspace
    this.update()
  },

  methods: {
    async update(){
      if (this.currentWorkspace.path != undefined && this.currentWorkspace.name == "gouvernance"){
        console.log(this.currentWorkspace)
        this.path = this.currentWorkspace.path+"tensions/"
        this.tensions = await this.getTensions()
        console.log(this.tensions)
      }
    }
  },
  watch:{
    currentWorkspace(){
      this.update()
    }
  },
  computed:{
    /*  config: {
    get: function() { return this.$store.state.gouvernance.config},
    set: function() {}
  },*/
  currentWorkspace: {
    get: function() { return this.$store.state.workspaces.currentWorkspace},
    set: function() {}
  },
}
}
</script>
