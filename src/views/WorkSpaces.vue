<template>
  <div class="modele-view container">
    <!--  <Component /> -->
    WorkSpaces
    <NewWorkspace />
    <WorkspacesList />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'WorkSpaces',
  components: {
    'NewWorkspace': () => import('@/components/workspaces/NewWorkspace'),
    'WorkspacesList': () => import('@/components/workspaces/WorkspacesList'),
  },
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
