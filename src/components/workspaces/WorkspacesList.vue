<template>
  <div class="modele-view">
    <b-list-group>
      <b-list-group-item v-for="w in workspaces" :key="w.subject">
        <b-form-input v-model="w.name" placeholder="Name"></b-form-input>
        <b-form-input v-model="w.subject" placeholder="Subject"></b-form-input>
        <b-form-input v-model="w.pod" placeholder="webId / POD"></b-form-input>
        <b-form-input v-model="w.path" placeholder="path"></b-form-input>

      </b-list-group-item>
    </b-list-group>
    <b-button @click="update">Update Workspaces</b-button>
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
