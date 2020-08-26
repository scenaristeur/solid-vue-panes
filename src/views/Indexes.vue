<template>
  <div class="indexes">
    <!--{{ indexes }}-->
    <div v-if="webId != null" class="container">
      <PublicTypeIndex :puti="indexes.puti"/>
      <PrivateTypeIndex :prti="indexes.prti"/>
    </div>
    <div v-else>
      <SolidLoginButton />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Indexes',
  components: {
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
    'PublicTypeIndex': () => import('@/views/PublicTypeIndex.vue'),
    'PrivateTypeIndex': () => import('@/views/PrivateTypeIndex.vue'),
  },
  computed:{
    webId(){return this.$store.state.solid.webId},
    indexes(){return this.$store.state.solid.indexes},
  },
}
</script>
