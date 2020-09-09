<template>
  <div class="simple-gouv-view container">
    <b-card-group deck>
        <TensionsCard />
      <GroupsView />
      <DomainsView />
        </b-card-group>
    storage {{ storage}}
    workspace  {{ workspace}}

  </div>
</template>
<script>

export default {
  name: 'SimpleGouvView',
  components: {
    'GroupsView': () => import('@/views/simple-gouv/GroupsView'),
    'DomainsView': () => import('@/views/simple-gouv/DomainsView'),
    'TensionsCard': () => import('@/views/simple-gouv/TensionsCard'),
  },
  created(){
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
}
}
</script>
<style>
.simple-gouv-view {
  text-align: left;
}
</style>
