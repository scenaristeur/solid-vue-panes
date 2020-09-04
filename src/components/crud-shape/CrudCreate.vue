<template>
  <div class="crud-create">
    Create<br>
    workspace : {{ workspace }}<br>
    shape_url : {{ shape_url }}
  </div>
</template>

<script>
//import ShexMixin from '@/mixins/crud/ShexMixin'

export default {
  name: 'CrudCreate',
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
    this.workspace = this.$store.state.crud.workspace
    //this.load_schema()
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    workspace (wsp) {
      //  '$route' (to, from) {
      console.log(wsp)
    },
    shape_url (shape_url) {
      //  '$route' (to, from) {
      console.log(shape_url)
    },
    /*shape(s){
    console.log("shape changed",s)
    this.load_schema()
  }*/

},
methods:{

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
  shape_url: {
    get: function() { return this.$store.state.crud.shape_url},
    set: function() {}
  },
}
}
</script>
