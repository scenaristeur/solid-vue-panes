<template>
  <div class="friends-view">
    <h3>Friends vue</h3>
    <FriendAdd />
    <Friends />
  </div>
</template>

<script>

export default {

  name: 'FriendsView',

  components: {
    'FriendAdd': () => import('@/components/friends/FriendAdd'),
    'Friends': () => import('@/components/friends/Friends')
  },
  data: function () {
    return {
      //  friends: []
    }
  },
  /*  async  created(){
  this.friends = this.$store.state.solid.friends
},*/
computed: {
  webId(){return this.$store.state.solid.webId},
  friends(){return this.$store.state.solid.friends}
},
watch: {
  $route(to, from) {
    console.log(to, from, this.$route)
    // react to route changes...
  }
}
}
</script>
