<template>
  <div class="modele">

    <Agora />
    <AgoraList />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AgoraView',
  components: {
    'Agora': () => import('@/components/agora/Agora'),
    'AgoraList': () => import('@/components/agora/AgoraList'),
  },
}
</script>
