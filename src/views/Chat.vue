<template>
  <div class = "chat">
    <ChatSelector  />
    <ChatList v-if="channel != null" />
  </div>
</template>

<script>
export default  {
  name :  'Chat' ,

  components :  {
    'ChatList' :  () => import ( '@/components/chat/ChatList' ),
    'ChatSelector' :  () => import ( '@/components/chat/ChatSelector' )
  },
  computed:{
    channel: {
      get: function() { return this.$store.state.chat.channel},
      set: function() {}
    },
  }
}
</script>
<style>
.chat {
  text-align : left;
}
</style>
