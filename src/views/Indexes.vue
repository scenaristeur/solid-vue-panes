<template>
  <div class="indexes">
    <PublicTypeIndex />
    <PrivateTypeIndex />
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

  }
}
</script>
