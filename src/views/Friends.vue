<template>
  <div class="friends">
    <h3>Friends</h3>
    {{ webId }}

    <div v-if="webId != null" class="container">
      <b-card-group columns >
        <Person v-for="f in friends" :key="f" :webId="f"  class="m-3" />
      </b-card-group>


    </div>
    <div v-else>
      <SolidLogin />
    </div>
  </div>
</template>

<script>
import profileMixin from '@/mixins/profileMixin'


export default {

  name: 'Friends',
  mixins: [profileMixin],
  components: {
    'SolidLogin': () => import('@/components/solid/SolidLogin'),
    'Person': () => import('@/components/layout/Person')
  },
  data: function () {
    return {
      friends: []
    }
  },
  async  created(){
    let friends = this.$store.state.solid.friends
    console.log("FRIENDS FROM STORE", friends)
    //  console.log("WI",this.webId)


    this.friends = await this.getFriends(this.webId)
  //  console.log(this.friends)
    this.$store.commit('solid/setFriends', this.friends)
  },
  computed: {
    webId(){return this.$store.state.solid.webId},
  },
  watch: {
    $route(to, from) {
      console.log(to, from, this.$route)
      // react to route changes...
    }
  }
}
</script>
<style scoped>
.container {
  text-align: center;
}

</style>
