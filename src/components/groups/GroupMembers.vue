<template>
  <div class="groups">
    <div v-if="webId != null">
      <h1>This is an group members page</h1>
      url GM : {{ url }}
      members : {{ members}}
      <GroupMember  />
    </div>


  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'GroupMembers',


  components: {
    'GroupMember': () => import('@/components/groups/Member'),
  },
  props : ['url']
  ,
  data: function () {
    return {
      members: []
    }
  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    },
  }


}
</script>
