<template>
  <div class="post-view container">
    <PostSend />
    <PostList />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'PostView',
  components: {
    'PostList': () => import('@/components/post/PostList'),
    'PostSend': () => import('@/components/post/PostSend'),
  },
}
</script>
<style>
.post-view {
  text-align: left;
}
</style>
