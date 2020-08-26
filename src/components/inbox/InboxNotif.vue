<template>
  <div class="inbox-notif">

    <div class="text-center">

  inbox  <b-badge variant="light" to="/inbox">4</b-badge>

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
    }
  },
  methods:{
    /*  async updateFriends(){
    this.friends = await this.getFriends(this.webId)
  }*/
},
computed:{
  storage(){
    return this.$store.state.solid.storage
  }
}
}
</script>
