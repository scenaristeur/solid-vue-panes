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
      <SolidLoginButton />
    </div>
  </div>
</template>

<script>



export default {

  name: 'Friends',

  components: {
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
    'Person': () => import('@/components/layout/Person')
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
<style scoped>
.container {
  text-align: center;
}

</style>
