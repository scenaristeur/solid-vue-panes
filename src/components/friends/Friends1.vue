<template>
  <div class="friends container">
    <h5>Friends</h5>

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
//import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'Friends',
  //mixins: [profileMixin],
  components: {
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
    'Person': () => import('@/components/layout/Person'),
    //'PeopleItem': () => import('@/components/profile/PeopleItem'),
  },
  props: ['value'],
  data: function () {
    return {
      //  webId: {},
      //  friends: [],
    }
  },
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
