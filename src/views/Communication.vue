<template>
  <div class="communication">

    <Parle />
    <Inbox />
    <Chat />
  </div>
</template>

<script>
import Inbox from '@/views/Inbox.vue'
import Chat from '@/views/Chat.vue'
import Parle from '@/views/Parle.vue'

export default {
  name: 'Communication',
  components: {
    Inbox,
    Chat,
    Parle

  }
}
</script>
