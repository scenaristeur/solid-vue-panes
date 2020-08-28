<template>
  <div class="inbox">
    <Inbox />
  </div>
</template>

<script>


export default {
  name: 'InboxView',
  components: {
    'Inbox': () => import('@/components/inbox/Inbox'),
  },
}
</script>
