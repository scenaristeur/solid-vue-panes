<template>
  <div class="inbox-notif">

    <div class="text-center">

<!--
      webId : {{ webId }} <br>

      storage : {{ storage }}<br>

      log : {{ inbox_log_file}} <br>
      urls : {{ inbox_urls}}
      <button @click="show = !show">Permuter l'affichage</button> -->
      <transition name="bounce">
        <b-badge v-if="show"  variant="light" @click="open_inbox">{{inbox_cnt}}</b-badge>
      </transition>


    </div>

  </div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'InboxNotif',
  //mixins: [profileMixin],
  components: {
    //'PeopleItem': () => import('@/components/profile/PeopleItem'),
  },
  props: ['value'],
  data: function () {
    return {
      inbox_cnt: 0,
      show: false,
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    storage (st) {
      //  '$route' (to, from) {
      console.log(st)
    },
    inbox(inbox){
      console.log(inbox.files.length)
      if (this.inbox_cnt != inbox.files.length){
        this.inbox_cnt = inbox.files.length
        this.show = true
      }

    }
  },
  methods:{
    open_inbox(){
      this.$router.push({ path: '/inbox' })
      this.show = false
      console.log(this.$router)
    }
    /*  async updateFriends(){
    this.friends = await this.getFriends(this.webId)
  }*/
},
computed:{
  storage(){
    return this.$store.state.solid.storage
  },
  inbox: {
    get: function() { return this.$store.state.inbox.inbox},
    set: function() {}
  },
  webId: {
    get: function() { return this.$store.state.inbox.webId},
    set: function() {}
  },
  inbox_log_file: {
    get: function() { return this.$store.state.inbox.inbox_log_file},
    set: function() {}
  },
  inbox_urls: {
    get: function() { return this.$store.state.inbox.inbox_urls},
    set: function() {}
  },
}
}
</script>

<style>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
