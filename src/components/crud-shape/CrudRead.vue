<template>
  <div class="crud-read">
    Read<br>
    workspace : {{ workspace }} <br>
    shape.name : {{ shape.name}}<br>
    shape.url: {{ shape.url }}<br>
    folder_path: {{ folder_path }}<br>
    folder: {{ folder }}<br>

    folders:
    <div v-for="fo in folder.folders" :key="fo.url">{{decodeURI(fo.name)}}</div>

    <b-card-group deck>
      <CrudItemCard v-for="fo in folder.folders" :key="fo.url" :item="fo"/>
    </b-card-group>

    <br>
    files :
    <div v-for="fi in folder.files" :key="fi.url">{{fi}}</div>

  </div>
</template>

<script>
//import ShexMixin from '@/mixins/crud/ShexMixin'
import auth from 'solid-auth-client';
const SolidFileClient = window.SolidFileClient
const fc = new SolidFileClient(auth)

export default {
  name: 'CrudRead',
  //  mixins: [ShexMixin],
  components: {
     'CrudItemCard': () => import('@/components/crud-shape/CrudItemCard'),
  },
  data: function () {
    return {
      folder_path: "",
      folder: {}
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
    this.workspace = this.$store.state.crud.workspace
    this.shape = this.$store.state.crud.shape
    this.setFolderPath()
    //this.load_schema()
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    workspace (wsp) {
      //  '$route' (to, from) {
      console.log(wsp)
      this.setFolderPath()
    },
    shape (shape) {
      //  '$route' (to, from) {
      console.log(shape)
      this.setFolderPath()
    },
    async   folder_path(fp){
      this.folder = await fc.readFolder(fp)
      console.log("FOLDER",this.folder)
    }
    /*shape(s){
    console.log("shape changed",s)
    this.load_schema()
  }*/

},
methods:{
  setFolderPath(){
    this.folder_path = this.workspace+this.shape.name+"/"
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
  shape: {
    get: function() { return this.$store.state.crud.shape},
    set: function() {}
  },

}
}
</script>
