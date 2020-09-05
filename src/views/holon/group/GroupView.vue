<template>
  <div class="groups-view">
    <!--  <Component /> -->
    groups
    <GroupEdit />
    <GroupList />


  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'GroupsView',
  components: {
    'GroupEdit': () => import('@/views/holon/group/GroupEdit'),
    'GroupList': () => import('@/views/holon/group/GroupList'),

  },
}
</script>
