<template>
  <div class="group-members">
    <div v-if="webId != null">
      <h4>Members :</h4>
    <!--  url GM : {{ url }}
      members : {{ members}}-->
      <GroupMember v-for="m in members" :key="m" :member="m" />
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
  },
  props : ['url']
  ,
  data: function () {
    return {
      members: [""]
    }
  },
  created(){
    console.log("GROUP MEMBERS")
    this.initMembers(this.url)
  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    },

  },
  methods: {
    async  initMembers(url){
      console.log("init members : ",url)

      const groupDoc = await fetchDocument(url);
      console.log("GROUPDOC ", groupDoc)
      let index = groupDoc.findSubject()
      console.log(index)
      this.members = index.getAllNodeRefs(vcard.hasMember)
      console.log(this.members)
      /*  let  subjects = chatDoc.findSubjects();
      subjects = subjects.filter( this.onlyUnique )*/
      //  console.log(subjects)
      //let triples = []

    }
  },


}
</script>
