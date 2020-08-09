<template>
  <div class="friends">
    <h3>Friends</h3>
    {{ webId }}

    <div v-if="webId != null" class="container row">

      <Person v-for="f in friends" :key="f" :webId="f"  class="m-3" />

      {{ friends }}


    </div>
    <div v-else>
      <SolidLogin />
    </div>
  </div>
</template>

<script>


export default {
  name: 'Friends',
  components: {
    'SolidLogin': () => import('@/components/solid/SolidLogin'),
    'Person': () => import('@/components/layout/Person')
  },
  computed: {
    webId(){return this.$store.state.solid.webId},
    friends(){return this.$store.state.solid.friends},
  }
}
</script>
<style scoped>
.container {
  text-align: center;
}

</style>
