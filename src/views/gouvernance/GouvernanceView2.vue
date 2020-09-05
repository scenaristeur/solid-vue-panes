<template>
  <div class="gouvernance-view container">

    <ShapeList  v-if="webId != null" :config="config"/>
    <SolidLoginButton v-else />

    <br>
    Inspired from
    <a href="https://fr.wikipedia.org/wiki/Holacratie" target="_blank">Holacratie sur Wikipedia</a>, but considering Orga, Circle & Role are all Solid Groups.
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'GouvernanceView',
  components: {
    //  'OrganizationView': () => import('@/views/gouvernance/OrganizationView'),
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
    'ShapeList': () => import('@/components/durc/ShapeList'),
  },
  data: function () {
    return {
      config: {
        folder: "https://holacratie.solid.community/public/Schema/governance/",
        path: "public/gouvernance/"
      }

      //  webId: {},
      //  friends: [],
    }
  },
  created(){

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
