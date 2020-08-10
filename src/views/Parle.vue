

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
  props: {
    root: String,
  },
  async  created() {
      this.root == undefined ? this.root="https://parle.solid.community/public/" :""
        await this.fixRoot(this.root)
    console.log("ROOT FROM STORE", this.$store.state.chat.root)

  },

}
</script>
