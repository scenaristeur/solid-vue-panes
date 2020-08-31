<template>
  <div class="modele">
  
    <Agora />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AgoraView',
  components: {
    'Agora': () => import('@/components/agora/Agora'),
  },
}
</script>
