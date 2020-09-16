<template>
  <div class="modele-view container">
    <b-button @click="$router.go(-1)" variant="outline-secondary">Back</b-button>
    <h3>Wwowwowwworkspaces</h3>
    Choose :
    <WorkspaceChoose />
    Or create :
    <NewWorkspace />
    Update your workspaces :
    <WorkspacesList />
    <b-button @click="$router.go(-1)" variant="outline-secondary">Back</b-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'WorkSpaces',
  components: {
    'NewWorkspace': () => import('@/components/workspaces/NewWorkspace'),
    'WorkspacesList': () => import('@/components/workspaces/WorkspacesList'),
    'WorkspaceChoose': () => import('@/components/workspaces/WorkspaceChoose'),
  },
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
