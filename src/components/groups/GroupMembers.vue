<template>
  <div class="group-members">
    <div v-if="webId != null">
      <h4>Members :</h4>
      <GroupAddMember  :url="url"   v-on:added="initMembers"/>
      <GroupMember v-for="m in members" :key="m" :member="m" :url="url" />
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import { fetchDocument } from 'tripledoc';
import { vcard } from 'rdf-namespaces'

export default {
  name: 'GroupMembers',
  components: {
    'GroupMember': () => import('@/components/groups/GroupMember'),
    'GroupAddMember': () => import('@/components/groups/GroupAddMember'),
  },
  props : ['url']
  ,
  data: function () {
    return {
      members: [""]
    }
  },
  created(){
    this.initMembers()
  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    },

  },
  methods: {
    async  initMembers(){
      const groupDoc = await fetchDocument(this.url);
      let index = groupDoc.findSubject()
      this.members = index.getAllNodeRefs(vcard.hasMember)
    }
  },


}
</script>
