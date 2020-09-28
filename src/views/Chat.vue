<template>
  <div class = "chat">

    <ChatUrl v-if="group.length > 0" :group="group" />
      <div v-else>
        <ChatSelector  />
        <ChatList v-if="channel != null" />
      </div>
    </div>
  </template>

  <script>
  export default  {
    name :  'Chat' ,

    components :  {
      'ChatList' :  () => import ( '@/components/chat/ChatList' ),
      'ChatSelector' :  () => import ( '@/components/chat/ChatSelector' ),
      'ChatUrl' :  () => import ( '@/components/chat/ChatUrl' ),
    },
    data: function () {
      return {
        group: ""
      }
    },
    created(){
      if (this.$route.params.group != undefined){
        this.group  = this.$route.params.group
      }
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
