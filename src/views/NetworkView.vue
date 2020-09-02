<template>
  <div class="network-view">
      <NetworkComponent />
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'NetworkView',
   components: {
  'NetworkComponent': () => import('@/components/network/NetworkComponent'),
},
}
</script>
<style>
.network-view {
  text-align: left;
}
</style>
