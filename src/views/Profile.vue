<template>
  <div class="profile">
    <General />
    <Indexes />
    <Friends />
  </div>
</template>

<script>


export default {
  name: 'Profile',
  components: {
    'General': () => import('@/views/General'),
    'Indexes': () => import('@/views/Indexes'),
    'Friends': () => import('@/views/Friends'),
  },
}
</script>
