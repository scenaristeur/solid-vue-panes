<template>
  <div class="profile">
    <General />
    <Indexes />
    <FriendsView />
  </div>
</template>

<script>


export default {
  name: 'Profile',
  components: {
    'General': () => import('@/views/General'),
    'Indexes': () => import('@/views/Indexes'),
    'FriendsView': () => import('@/views/FriendsView'),
  },
}
</script>
