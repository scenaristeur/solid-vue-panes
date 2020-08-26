<template>
  <div class="groups">
    <div v-if="webId != null">
      <GroupsList />
    </div>

    <div v-else>
      <SolidLoginButton />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Groups',


  components: {
    'GroupsList': () => import('@/components/groups/GroupsList'),
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton')
  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    },
  }


}
</script>
