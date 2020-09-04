<template>
  <div class="crud-toolbar">
    <div>
      <b-button-toolbar key-nav aria-label="Toolbar with button groups">
        <!--<b-button-group class="mx-1">
        <b-button>&laquo;</b-button>
        <b-button>&lsaquo;</b-button>
      </b-button-group>-->
      <b-button-group class="mx-1" size="sm">
        <b-button variant="outline" @click="create"><b-icon icon="plus-square" aria-hidden="true" variant="info"></b-icon> </b-button>
        <b-button variant="outline" @click="read"> <b-icon icon="list" variant="info"></b-icon></b-button>
        <!--<b-button>Redo</b-button> -->
      </b-button-group>
      <!--  <b-button-group class="mx-1">
      <b-button>&rsaquo;</b-button>
      <b-button>&raquo;</b-button>
    </b-button-group>-->
  </b-button-toolbar>
</div>
workspace {{ workspace}}
</div>
</template>

<script>
//import ShexMixin from '@/mixins/crud/ShexMixin'

export default {
  name: 'CrudToolbar',
  //  mixins: [ShexMixin],
  components: {
    //  'FormTab': () => import('@/components/crud/FormTab'),
  },
  props: ['shape'],
  data: function () {
    return {
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
    //this.load_schema()
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    workspace (wsp) {
      //  '$route' (to, from) {
      console.log(wsp)
    },
    /*shape(s){
    console.log("shape changed",s)
    this.load_schema()
  }*/

},
methods:{
  create(){
    console.log("create",this.shape, this.workspace)
      this.$store.commit('crud/setShape', this.shape)
    this.$router.push('create/')
  },
  read(){
    console.log("read",this.shape,this.workspace)
      this.$store.commit('crud/setShape', this.shape)
    this.$router.push('read/')
  }
  /*load_schema(){
  this.load_remote_schema(this.shape.url)

}*/

/*  async updateFriends(){
this.friends = await this.getFriends(this.webId)
}*/
},
computed:{
  storage: {
    get: function() { return this.$store.state.solid.storage},
    set: function() {}
  },
  workspace: {
    get: function() { return this.$store.state.crud.workspace},
    set: function() {}
  },
}
}
</script>
