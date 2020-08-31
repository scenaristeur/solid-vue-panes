<template>
  <div class="agora-notif">

    <div class="text-center">


      <!--{{ config }}<br>
      {{ inbox }}
      <button @click="show = !show">Permuter l'affichage</button>-->
      <transition name="bounce">
        <b-badge class="btn" v-if="show"  variant="light" @click="open_agora">{{activities_cnt}} acitivities</b-badge>
      </transition>


    </div>

  </div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'AgoraNotif',
  //mixins: [profileMixin],
  components: {
    //'PeopleItem': () => import('@/components/profile/PeopleItem'),
  },
  data: function () {
    return {
      acitivities_cnt: 0,
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
    config (config) {
      //  '$route' (to, from) {
      console.log(config)
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
      if (this.$route.path !== "/agora"){
        this.$router.push({ path: '/agora' })
      }
      this.show = false
    }
},
computed:{
  /*  storage(){
  return this.$store.state.solid.storage
},
,
webId: {
get: function() { return this.$store.state.inbox.webId},
set: function() {}
},
inbox_log_file: {
get: function() { return this.$store.state.inbox.inbox_log_file},
set: function() {}
},
inbox_urls: {

},*/
activities: {
  get: function() { return this.$store.state.agora.activities},
  set: function() {}
},
config:{
  get: function() { return this.$store.state.agora.config},
  set: function() {}
}
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
