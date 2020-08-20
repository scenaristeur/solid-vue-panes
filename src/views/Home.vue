<template>
  <div class="home">
    <img  width="100px" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="PoPock, the Pod in the Pocket"/>
    <Share />
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    'Share': () => import('@/views/Share')
  }
}
</script>
