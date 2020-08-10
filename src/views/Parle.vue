

<template>
  <div class="parle">
    PARLE
    <BreadCrumb />

    <!--    <SolidChatRooms :root="this.base" :index="this.index" /> -->
    <SolidChatList />
    <SolidChatSend />
  </div>
</template>

<script>
import store from '@/store'
import ChatMixin from '@/mixins/ChatMixin' // manage Chat functionnalities


import BreadCrumb from '@/components/layout/BreadCrumb.vue'
import SolidChatSend from '@/components/SolidChatSend.vue'
import SolidChatList from '@/components/SolidChatList.vue'

export default {
  store,
  name: 'Parle',
  mixins: [ ChatMixin ],
  components: {
    SolidChatSend,
    //  SolidChatRooms,
    SolidChatList,
    BreadCrumb
  },

  async  created() {
    //only for dev
    this.root == undefined ? this.root = "https://parle.solid.community/public/" : ""
    console.log("root",this.root)
    !this.root.endsWith("/") ? this.root = this.root+"/" : "";
    !this.root.endsWith("/parle/") ? this.root = this.root+"parle/" : "";
    console.log("Root root",this.root)
    this.$store.commit('chat/setRoot', this.root)
    console.log("ROOT FROM STORE", this.$store.state.chat.root)

  },

}
</script>
