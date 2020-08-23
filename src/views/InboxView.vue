<template>
  <div class="inbox">
    <h4>inbox</h4>
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
