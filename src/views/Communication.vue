<template>
  <div class="communication">

    <Parle root="https://parle.solid.community/public/" />
    <InboxView />
    <Chat />
  </div>
</template>

<script>
import InboxView from '@/views/InboxView.vue'
import Chat from '@/views/Chat.vue'
import Parle from '@/views/Parle.vue'

export default {
  name: 'Communication',
  components: {
    InboxView,
    Chat,
    Parle

  }
}
</script>
