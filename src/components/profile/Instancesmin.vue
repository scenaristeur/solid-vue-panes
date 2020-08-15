<template>
  <div class="instances">
    {{ webId }}<br>
    {{ instances }}
    <!--  <AddInstance />
    <b-button to="/chat" variant="info">go to Chat</b-button>
    <b-list-group flush>
    <b-list-group-item v-for="i in instances" :key="i.instance">
    Label : {{i.label}}<br>
    created: {{i.created}}<br>
    instance: {{i.instance}}<br>
    classe:  {{i.classe}}<br>
  </b-list-group-item>
</b-list-group>-->
</div>
</template>
<script>
import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'instances',
  props: ["webId"],
  mixins: [profileMixin],
  data: function () {
    return {
      //  webId: {},
      instances: []
    }
  },
  watch: {
    indexes (indexes){
      if (indexes != null && indexes.puti.instances.length >0){
        console.log(this.indexes.puti.instances)
        this.instances = `${this.indexes.puti.instances}`
      }
    }
    /*  '$route' (to) {
    //  '$route' (to, from) {
    this.webId = to.params.webId || this.$store.state.solid.webId
    this.updateFriends()
  }*/
  },
  computed:{
   indexes(){
      return  this.getIndexes(this.webId) || null
    },

  }
}
</script>
