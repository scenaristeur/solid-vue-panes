<template>
  <div class="home">

    <img  width="100px" alt="Vue logo" src="../assets/logo.png">
    <h1>PoPock</h1>
    <h4>POds in the POCKet</h4>
    <ShareTarget />
    <HelloWorld />

  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    'ShareTarget': () => import('@/components/share/ShareTarget')

  }
}
</script>
