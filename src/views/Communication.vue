<template>
  <div class="communication">
    <Inbox />
    <Chat />
  </div>
</template>

<script>
import Inbox from '@/views/Inbox.vue'
import Chat from '@/views/Chat.vue'
export default {
  name: 'Communication',
  components: {
    Inbox,
    Chat

  }
}
</script>
