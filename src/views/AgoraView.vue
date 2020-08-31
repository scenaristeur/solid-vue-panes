<template>
  <div class="modele">
    <h1>This is an Agora view page</h1>
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
