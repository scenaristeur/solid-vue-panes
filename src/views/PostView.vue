<template>
  <div class="post-view container">
      <div v-if="webId != null">
    <PostSend />
    <PostList />
  </div>
  <div v-else>
    <SolidLoginButton />
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'PostView',
  components: {
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
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
