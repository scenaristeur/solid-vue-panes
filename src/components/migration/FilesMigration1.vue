<template>
  <div class="modele-view">
    <!--  <Component /> -->
    -- migration for <a href="https://gitlab.com/solid.community/proposals/-/issues/16" target="_blank">solid.community shutdown</a><br>
    - POD :  {{ webId }}<br>
    - storage : {{ storage}}<br>
    - SEARCH : {{ search }}<br>
    - REPLACE : {{ replace }}<br>
    - folders :

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

  computed:{
    storage: {
      get: function() { return this.$store.state.solid.storage},
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
