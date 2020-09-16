<template>
  <div class="modele-view">
    <b-form-input v-model="workspace.name" placeholder="Enter the name of the new workspace"></b-form-input>
    <b-button @click="add">Add</b-button>  <b-button :to="'/editor?url='+storage+'popock/workspaces.ttl'">Edit</b-button>
  </div>
</template>

<script>


export default {
  name: 'NewWorkspace',
  data() {
    return {
      workspace: {}
    }
  },
  computed:{
    storage: {
      get: function() { return this.$store.state.solid.storage},
      set: function() {}
    },
    webId: {
      get: function() { return this.$store.state.solid.webId},
      set: function() {}
    },
  },
  methods: {
    add(){
      console.log(this.workspace)

      this.workspace.pod = this.webId
      this.$store.dispatch('workspaces/addWorkspace', this.workspace)
      this.workspace = {}
    }
  },
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
