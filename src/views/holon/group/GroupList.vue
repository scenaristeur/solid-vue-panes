<template>
  <div class="groups-view">
    <!--  <Component /> -->

    workspace : {{ workspace }} <br>
    folder_path :  {{ folder_path }}<br>
    folder : {{ folder}}<br>

    <b-card-group deck>
      <GroupCard v-for="groupFolder in folder.folders" :key="groupFolder.url" :item="groupFolder" />
    </b-card-group>


  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'GroupsList',
  components: {
    'GroupCard': () => import('@/views/holon/group/GroupCard'),
  },
  data: function () {
    return {
      folder_path: "",
      folder: {},
      config: {classe:"Group"}
      //  webId: {},
      //  friends: [],
    }
  },
  created(){
    this.workspace = this.$store.state.crud.workspace
    this.setFolderPath()
  },
  watch: {
    workspace (wsp) {
      //  '$route' (to, from) {
      console.log(wsp)
      this.setFolderPath()
    },
    async folder_path(fp){
      this.folder = await this.$fc.readFolder(fp)
      console.log("FOLDER",this.folder)
      this.$store.commit('gouvernance/setGroups', this.folder)

    }
  },
  computed:{
    webId: {
      get: function() { return this.$store.state.solid.webId},
      set: function() {}
    },
    workspace: {
      get: function() { return this.$store.state.crud.workspace},
      set: function() {}
    },
  },
  methods:{
    setFolderPath(){
      this.folder_path = this.workspace+this.config.classe+"/"
      console.log("FP",this.folder_path)
    }
  }
}
</script>
<style>
.users-view {
  text-align: left;
}
</style>
