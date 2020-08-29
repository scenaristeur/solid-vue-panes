<template>
  <div class="group-display">
    <b-card >
      <b-card-header><a v-bind:href="file.url" target="_blank">{{group.name || file.name}}</a></b-card-header>
      <b-card-text>
        <GroupMembers :url="file.url" :members="group.members"/>
        <b-button @click="open('modal-members-'+file.url)" variant="outline-info">{{ group.members.length }} Members</b-button>
        <b-button @click="open('modal-subgroups-'+file.url)" variant="outline-info">{{ group.subgroups.length }} SubGroups</b-button>

      </b-card-text>

      <blockquote class="blockquote mb-0">
        <footer class="blockquote-footer">
          <div class="created">
            {{file.modified}}
          </div>
          <cite title="Purpose">{{group.purpose}}</cite>
        </footer>
      </blockquote>
    </b-card>

    <b-modal v-bind:id="'modal-subgroups-'+file.url" title="SubGroups">
      sb
    </b-modal>

  </div>
</template>

<script>
import groupsMixin from '@/mixins/groupsMixin'


export default {
  name: 'GroupDisplay',
  mixins: [groupsMixin],
  components: {
    'GroupMembers': () => import('@/components/groups/GroupMembers'),
  },
  props: ['file'],
  data: function () {
    return {
      group: {members:[],subgroups: ["one sub group"]},
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
    this.init()
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    storage (st) {
      //  '$route' (to, from) {
      console.log(st)
    }
  },
  methods:{
    async  init(){
    //  console.log(this.url)
      this.group= await this.getGroup(this.file.url)
    //  console.log(this.group)
    },
    open(id){
      this.$bvModal.show(id)
    },
  },
  computed:{
    storage(){
      return this.$store.state.solid.storage
    }
  }
}
</script>
<style>
.created{
  color: #C5C5C5;
  font-size: 13px;
  font-weight: normal;
}
</style>
