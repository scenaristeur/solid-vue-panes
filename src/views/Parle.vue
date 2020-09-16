

<template>
  <div class="parle">
    PARLE
    <BreadCrumb />
    <!--    <SolidChatRooms :root="this.base" :index="this.index" /> -->
    <ParleList />
    <ParleSend />
  </div>
</template>

<script>
import store from '@/store'
//import ChatMixin from '@/mixins/ChatMixin' // manage Chat functionnalities


import BreadCrumb from '@/components/layout/BreadCrumb.vue'

export default {
  store,
  name: 'Parle',
  //  mixins: [ ChatMixin ],
  components: {
    'ParleList': () => import('@/components/parle/ParleList'),
    'ParleSend': () => import('@/components/parle/ParleSend'),
    //  SolidChatRooms,
    BreadCrumb
  },

  async  created() {
    //only for dev
    this.url = this.$route.params.url
    this.root == undefined ? this.root = "https://parle.solid.community/public/" : ""
    console.log("root",this.root)
    !this.root.endsWith("/") ? this.root = this.root+"/" : "";
    !this.root.endsWith("/parle/") ? this.root = this.root+"parle/" : "";
    console.log("Root root",this.root)
    this.$store.commit('parle/setRoot', this.root)
    console.log("ROOT FROM STORE", this.$store.state.parle.root)
      this.$store.commit('parle/setUrl', this.url)

  },
  watch: {
    '$route' (to) {
      //  '$route' (to, from) {
      this.url = to.params.url
        this.$store.commit('parle/setUrl', this.url)
      //  this.updateFriends()
      //  this.updateIndexes()
    }
  },

}
</script>
