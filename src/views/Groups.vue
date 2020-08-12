<template>
  <div class="groups">
    <div v-if="webId != null">
      <h1>This is an experimental groups page</h1>
      <GroupsList />
    </div>

    <div v-else>
      <SolidLogin />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Groups',


  components: {
    'GroupsList': () => import('@/components/groups/GroupsList'),
    'SolidLogin': () => import('@/components/solid/SolidLogin')
  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    },
  }


}
</script>
