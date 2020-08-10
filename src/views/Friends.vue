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
import router from '@/router'

export default {
  router,
  name: 'Friends',
  components: {
    'SolidLogin': () => import('@/components/solid/SolidLogin'),
    'Person': () => import('@/components/layout/Person')
  },
  computed: {
    webId(){return this.$store.state.solid.webId},
    friends(){return this.$store.state.solid.friends},
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
