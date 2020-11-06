<template>
  <div class="agora-list container">
    <h5> {{ activities.length}} Activities</h5>
    <b-card>
      <b-card-body>
        <b-card-title>

        <h2>Do you want to share your activities to poPock users ?</h2>
      </b-card-title>
         Use <h3><router-link to="/post">poPock/post </router-link>!</h3>
         or programaticaly append the current day file like those
        <a href="https://agora.solidcommunity.net/public/popock/inbox/" target="_blank">
          https://agora.solidcommunity.net/public/popock/inbox/</a>
        </b-card-body>
      </b-card>
      <b-card-group deck>
        <ActivityItem v-for="a in activities" :key="a.id" :activity="a" />
      </b-card-group>

    </div>
  </template>

  <script>

  export default {
    name: 'AgoraList',
    components: {
      'ActivityItem': () => import('@/components/agora/ActivityItem'),
    },
    props: ['value'],
    data: function () {
      return {
      }
    },
    created() {
      let d = new Date()
      this.date = this.formatDate(d)
      this.max = this.date
      this.activities = this.$store.state.agora.activities
    },
    /*watch: {
    async activities (activities) {
    console.log("ACTIVITIES",activities.length, activities)
  },
},*/
methods:{
  sort(){
    this.activities.reverse()
  },
  formatDate(d) {
    return [d.getFullYear(), ("0" + (d.getMonth() + 1)).slice(-2), ("0" + d.getDate()).slice(-2)].join("-")
  },
  /*  async updateFriends(){
  this.friends = await this.getFriends(this.webId)
}*/
},
computed:{
  storage(){
    return this.$store.state.solid.storage
  },
  activities:{
    get: function() { return this.$store.state.agora.activities},
    set: function() {}
  },
}
}
</script>
<style>
.container {
  text-align: left;
}
</style>
