<template>
  <div class="profile">
    <General />
    <Friends />
  </div>
</template>

<script>

import General from '@/views/General.vue'
import Friends from '@/views/Friends.vue'
export default {
  name: 'Profile',
  components: {
    General, Friends
  }
}
</script>
