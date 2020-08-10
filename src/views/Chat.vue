<template>
  <div class="chat">
    <h1>This is an chat page</h1>
<PopChat uri="https://solidarity.inrupt.net/public/Solidarity/" />
  </div>
</template>

<script>


export default {
  name: 'Chat',
  components: {
        'PopChat': () => import('@/components/PopChat') 
  }
}
</script>
