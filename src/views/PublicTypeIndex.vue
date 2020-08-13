<template>
  <div class="puti">
  <!--  PUTI : {{ puti}}<br>-->
<Instances :index="puti" />
  </div>
</template>

<script>
//import Inbox from '@/views/Inbox.vue'
//import Chat from '@/views/Chat.vue'

export default {
  name: 'PublicTypeIndex',
  props: ['puti'],
  components: {
    'Instances': () => import('@/components/profile/Instances'),
  },
}
</script>
