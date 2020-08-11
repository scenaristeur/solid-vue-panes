<template>
  <div class="profile">
    <General />
    <Friends />
  </div>
</template>

<script>


export default {
  name: 'Profile',
  components: {
    'General': () => import('@/views/General'),
    'Friends': () => import('@/views/Friends'),
  },
}
</script>
