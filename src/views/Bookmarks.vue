<template>
  <div class="bookmarks">
    <ShareTarget />
    <BookmarksList mode="public"/>
    <BookmarksList mode="private" />


  </div>
</template>

<script>
export default {
  name: 'BookmarksView',
  components: {
    'BookmarksList': () => import('@/components/bookmarks/BookmarksList'),
    'ShareTarget': () => import('@/components/share/ShareTarget')
  },
}
</script>
