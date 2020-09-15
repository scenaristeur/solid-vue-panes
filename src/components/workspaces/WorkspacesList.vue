<template>
  <div class="modele-view">
    <b-list-group>
      <b-list-group-item v-for="w in workspaces" :key="w.name">
        <h3>{{ w.name }}</h3>
        <b-form-input v-model="w.pod" placeholder="webId / POD"></b-form-input>
        <b-form-input v-model="w.path" placeholder="path"></b-form-input>
        <b-button @click="update">Update</b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>

export default {
  name: 'WorkspaceList',
computed:{
  workspaces: {
    get: function() { return this.$store.state.workspaces.workspaces},
    set: function() {}
  },
},
methods: {
  update(){
    console.log(this.workspaces)
    this.$store.dispatch('workspaces/updateWorkspaces', this.workspaces)
  }
},
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
