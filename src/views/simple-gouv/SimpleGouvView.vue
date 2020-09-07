<template>
  <div class="simple-gouv-view container">
    <!--  <Component /> -->


    <b-card-group deck>
      <GroupsView />
      <DomainsView />
      <TensionsView />
    </b-card-group>
    storage {{ storage}}
    workspace  {{ workspace}}

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'SimpleGouvView',
  components: {
    'GroupsView': () => import('@/views/simple-gouv/GroupsView'),
    'DomainsView': () => import('@/views/simple-gouv/DomainsView'),
    'TensionsView': () => import('@/views/simple-gouv/TensionsView'),
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
      //  '$route' (to, from) {
      console.log(st)
      this.setWorkspace()
    },
    /*shape(s){
    console.log("shape changed",s)
    this.load_schema()
  }*/

},
methods:{
  setWorkspace(){
    this.workspace = this.storage+this.path
    this.$store.commit('gouvernance/setWorkspace', this.workspace)
  }
  /*load_schema(){
  this.load_remote_schema(this.shape.url)

}*/

/*  async updateFriends(){
this.friends = await this.getFriends(this.webId)
}*/
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
.modele-view {
  text-align: left;
}
</style>
