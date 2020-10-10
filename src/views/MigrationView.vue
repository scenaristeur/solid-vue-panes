<template>
  <div class="container">
    <!--  <Component /> -->

    <FilesMigration  v-if="webId != null" :webId="webId"/>
    <SolidLoginButton v-else />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'MigrationView',
  components: {
    'FilesMigration': () => import('@/components/migration/FilesMigration'),
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
  },
  computed:{
    webId: {
      get: function() { return this.$store.state.solid.webId},
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
