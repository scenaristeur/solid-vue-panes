<template>
  <div class="simple-gouv-view container">

    <b-card-group deck v-if="currentWorkspace.name == 'gouvernance'">
      <TensionsCard />
      <!--  <GroupsView />
      <DomainsView />-->
    </b-card-group>
    <div v-else>
      To use this part of Popock, you need to choose a workspace with name "gouvernance".<br>
      <b-button size="sm" to="/workspaces" variant="outline-warning"><span v-if="currentWorkspace.name != undefined">{{ currentWorkspace.name}}</span> <span v-else>Workspaces </span></b-button>

    </div>
    storage {{ storage}}<br>
    workspace  {{ workspace}}<br>
    current Workspace : {{ currentWorkspace.name }}, {{ currentWorkspace.path }}
    <!--   <WorkspaceChoose name="Gouvernance"/> -->
  </div>
</template>
<script>

export default {
  name: 'SimpleGouvView',
  components: {
    //  'GroupsView': () => import('@/views/simple-gouv/GroupsView'),
    //  'DomainsView': () => import('@/views/simple-gouv/DomainsView'),
    'TensionsCard': () => import('@/views/simple-gouv/TensionsCard'),
    //  'WorkspaceChoose': () => import('@/components/workspaces/WorkspaceChoose'),
  },
  created(){
        console.log("TTTTTTTTTTTTTTTT currentWorkspace", this.currentWorkspace)
    this.storage = this.$store.state.solid.storage
    this.setWorkspace()
  },
  data: function () {
    return {
      path: "public/gouvernance/",
    }
  },
  watch: {
    storage (st) {
      console.log(st)
      this.setWorkspace()
    },
  },
  methods:{
    setWorkspace(){
      this.workspace = this.storage+this.path
      this.$store.commit('gouvernance/setWorkspace', this.workspace)
    }
  },
  computed:{
    storage: {
      get: function() { return this.$store.state.solid.storage},
      set: function() {}
    },
    currentWorkspace: {
      get: function() { return this.$store.state.workspaces.currentWorkspace},
      set: function() {}
    },
  }
}
</script>
<style>
.simple-gouv-view {
  text-align: left;
}
</style>
