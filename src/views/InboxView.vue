<template>
  <div class="inbox">
    <h1>This is an inbox page</h1>
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
