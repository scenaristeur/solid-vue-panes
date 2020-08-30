<template>
  <div class="general">
    <Profile />
    <Indexes />
    <FriendsView />
  </div>
</template>

<script>


export default {
  name: 'General',
  components: {
    'Profile': () => import('@/views/Profile'),
    'Indexes': () => import('@/views/Indexes'),
    'FriendsView': () => import('@/views/FriendsView'),
  },
}
</script>
