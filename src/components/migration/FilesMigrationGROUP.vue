<template>
  <div class="modele-view">
    <!--  <Component /> -->
    -- migration for <a href="https://gitlab.com/solid.community/proposals/-/issues/16" target="_blank">solid.community shutdown</a><br>
    - POD :  {{ webId }}<br>
    - storage : {{ storage}}<br>
    - SEARCH : <b-input v-model="search" /><br>
    - REPLACE : <b-input v-model="replace" /><br>

    <br>FILES : <br>
    {{files}}<br>
    <hr>
    - folders :
    {{ folders }}


    <SubFolder :url="storage"  :search="search" :replace="replace" />

  </div>
</template>

<script>

export default {
  name: 'FilesMigration',
  components: {
    'SubFolder': () => import('@/components/migration/SubFolder'),
  },
  props:['webId'],
  data() {
    return {
      search : "solid.community",
      replace : "solidcommunity.net",
    }
  },
  created(){
    //  this.storage = this.$store.state.solid.storage

  },
  watch:{
    storage(){
      this.$store.commit('migration/init')
            this.$store.commit('migration/addFolders', [{url:this.storage}])
    }
  },

  computed:{
    storage: {
      get: function() { return this.$store.state.solid.storage},
      set: function() {}
    },
    folders: {
      get: function() { return this.$store.state.migration.folders},
      set: function() {}
    },
    files: {
      get: function() { return this.$store.state.migration.files},
      set: function() {}
    },
  },
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
