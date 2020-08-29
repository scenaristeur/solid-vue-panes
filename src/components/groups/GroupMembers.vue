<template>
  <div class="group-members">
    <div v-if="webId != null">

      <b-modal v-bind:id="'modal-members-'+url" title="Members">
        <GroupMember v-for="m in members" :key="m" :member="m" :url="url" />
        <GroupAddMember  :url="url" />
      </b-modal>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'GroupMembers',
  components: {
    'GroupMember': () => import('@/components/groups/GroupMember'),
    'GroupAddMember': () => import('@/components/groups/GroupAddMember'),
  },
  props : ['members', 'url']
  ,
  data: function () {
    return {

    }
  },
  created(){

  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    },

  },
  methods: {


  },


}
</script>
