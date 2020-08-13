<template>
  <div class="indexes">
    <!--{{ indexes }}-->
    <PublicTypeIndex :puti="indexes.puti"/>
    <PrivateTypeIndex :prti="indexes.prti"/>
  </div>
</template>

<script>
import PublicTypeIndex from '@/views/PublicTypeIndex.vue'
import PrivateTypeIndex from '@/views/PrivateTypeIndex.vue'
export default {
  name: 'Indexes',
  components: {
    PublicTypeIndex,
    PrivateTypeIndex
  },
  computed:{
    indexes(){
      return this.$store.state.solid.indexes
    },
  },
}
</script>
