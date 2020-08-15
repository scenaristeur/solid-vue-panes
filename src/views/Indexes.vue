<template>
  <div class="indexes">
    <!--{{ indexes }}-->
    <div v-if="webId != null" class="container">
      <PublicTypeIndex :puti="indexes.puti"/>
      <PrivateTypeIndex :prti="indexes.prti"/>
    </div>
    <div v-else>
      <SolidLogin />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Indexes',
  components: {
    'SolidLogin': () => import('@/components/solid/SolidLogin'),
    'PublicTypeIndex': () => import('@/views/PublicTypeIndex.vue'),
    'PrivateTypeIndex': () => import('@/views/PrivateTypeIndex.vue'),
  },
  computed:{
    webId(){return this.$store.state.solid.webId},
    indexes(){return this.$store.state.solid.indexes},
  },
}
</script>
