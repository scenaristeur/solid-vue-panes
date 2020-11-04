<template>
  <div class="groups-toolbar container">
    <div>
      <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
        <b-button-group class="mx-1">
          <b-button @click="newGroup">New</b-button>
          <b-button :to="'/editor?path='+path">Edit</b-button>
        <!--  <b-button>Undo</b-button>-->
        </b-button-group>
      <!--  <b-dropdown class="mx-1" right text="menu">
          <b-dropdown-item>Item 1</b-dropdown-item>
          <b-dropdown-item>Item 2</b-dropdown-item>
          <b-dropdown-item>Item 3</b-dropdown-item>
        </b-dropdown>
        <b-button-group class="mx-1">
          <b-button>Save</b-button>
          <b-button>Cancel</b-button>
        </b-button-group>-->
      </b-button-toolbar>
    </div>

</div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'GroupsToolbar',
  //mixins: [profileMixin],
  components: {
    //'PeopleItem': () => import('@/components/profile/PeopleItem'),
  },
  props: ['path'],
  data: function () {
    return {
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    /*storage (st) {
      //  '$route' (to, from) {
      console.log(st)
    }*/
  },
  methods:{
    newGroup(){
      this.$bvModal.show("new-group-modal")
    }
    /*  async updateFriends(){
    this.friends = await this.getFriends(this.webId)
  }*/
},
computed:{
  /*storage(){
    return this.$store.state.solid.storage
  }*/
}
}
</script>
