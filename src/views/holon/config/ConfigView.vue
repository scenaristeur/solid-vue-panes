<template>
  <div class="crud-config">
    <b-card bg-variant="secondary" text-variant="white" header="Config" class="text-center">
      <!--  <b-card-text>Workspace: </b-card-text> -->

      <b-input-group prepend="Workspace" class="mt-3">
        <b-form-input v-model="workspace"></b-form-input>
        <b-input-group-append>
          <b-button variant="info" disabled >Update</b-button>
        </b-input-group-append>
      </b-input-group>

    </b-card>
  </div>
</template>

<script>
//import ShexMixin from '@/mixins/crud/ShexMixin'

export default {
  name: 'ConfigView',
  //  mixins: [ShexMixin],
  components: {
    //  'FormTab': () => import('@/components/crud/FormTab'),
  },
  props: ['path'],
  data: function () {
    return {
      workspace: ""
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
    this.storage = this.$store.state.solid.storage
    this.setWorkspace()
    //this.load_schema()
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    storage (st) {
      //  '$route' (to, from) {
      console.log(st)
      this.setWorkspace()
    },
    /*shape(s){
    console.log("shape changed",s)
    this.load_schema()
  }*/

},
methods:{
  setWorkspace(){
    this.workspace = this.storage+this.path
    this.$store.commit('crud/setWorkspace', this.workspace)
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
}
}
</script>
