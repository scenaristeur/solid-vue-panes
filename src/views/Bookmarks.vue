<template>
  <div class="bookmarks">
    <BookmarksList mode="public"/>
    <BookmarksList mode="private" />

  </div>
</template>

<script>
export default {
  name: 'BookmarksView',
  components: {
    'BookmarksList': () => import('@/components/bookmarks/BookmarksList'),
  },
}
</script>
