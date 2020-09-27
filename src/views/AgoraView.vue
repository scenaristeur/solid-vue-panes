<template>
  <div class="agora-view">


    <AgoraList />
<!--    <AgoraTest />-->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AgoraView',
  components: {
  //  'AgoraTest': () => import('@/components/agora/AgoraTest'),
    'AgoraList': () => import('@/components/agora/AgoraList'),
  },
}
</script>
