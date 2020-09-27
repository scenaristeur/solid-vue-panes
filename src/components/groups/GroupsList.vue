<template>
  <div class="groups-list">


    <div  v-if="currentWorkspace.name == 'gouvernance'">
        {{url}}<br>
      <GroupsToolbar :path="url"/>
      <GroupCreate v-on:created="initGroups" />

      <!--    <b-button variant="info" @click="initGroups">Reload groups</b-button>-->
      <div>
        <b-card-group columns>
          <GroupDisplay v-for="f in folder.files" :key="f.url" :file="f" v-on:created="initGroups"/>
        </b-card-group>
      </div>

    </div>
    <div v-else>
      To use this part of Popock, you need to choose a workspace with name "gouvernance".<br>
      <b-button size="sm" to="/workspaces" variant="outline-warning"><span v-if="currentWorkspace.name != undefined">{{ currentWorkspace.name}}</span> <span v-else>Workspaces </span></b-button>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import auth from 'solid-auth-client';
//import { fetchDocument } from 'tripledoc';
//import { vcard, foaf /*sioc, dct, foaf*/ } from 'rdf-namespaces'

const SolidFileClient = window.SolidFileClient
console.log("SFC", SolidFileClient)
const fc = new SolidFileClient(auth)

export default {
  name: 'GroupsList',
  components: {
    'GroupsToolbar': () => import('@/components/groups/GroupsToolbar'),
    'GroupCreate': () => import('@/components/groups/GroupCreate'),
    'GroupDisplay': () => import('@/components/groups/GroupDisplay'),
  },
  data: function () {
    return {
      folder: {},
    }
  },
  created(){
    this.currentWorkspace = this.$store.state.workspaces.currentWorkspace

    this.update()
    this.$route.params.tension != undefined ?   this.tension = this.$route.params.tension :""
    console.log("TEnsion", this.tension)

  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    },
    storage(){
      return this.$store.state.solid.storage
    },
    currentWorkspace: {
      get: function() { return this.$store.state.workspaces.currentWorkspace},
      set: function() {}
    },
  },
  methods: {
    async  initGroups(url = this.url){
      console.log(url)
      if (this.storage != null && this.storage.length > 0){
        console.log("init groups : ",url)
        this.folder = await fc.readFolder(url)
        console.log("Folder : ", this.folder)
      }
    },
    sorted(groups) {
      if (groups != undefined){
        return groups.sort(function (a,b) {
          return a.modified < b.modified
        })
      }else {
        return []
      }
    },
    update(){
          if (this.currentWorkspace.path != undefined && this.currentWorkspace.name == "gouvernance"){
      console.log("CURRENT WORKSPACE", this.currentWorkspace)
      this.url = this.currentWorkspace.path+'groups/'
      this.initGroups()

    }
    }

  },
  watch: {
    url: function (url) {
      if(url != null){
    //    console.log(url)
        //  this.sendMessage("switched to "+url)
        this.initGroups(url)
      }
    },
    currentWorkspace(){
      this.update()
    },
    '$route' (to) {
      //  '$route' (to, from) {
  //    console.log(to)
      this.url = to.params.url // || this.storage+"public/groups/"
      //  console.log(this.url)
      this.initGroups(to.params.url)
      if(to.params.tension != undefined ){
        this.tension = to.params.tension
      //  console.log("tension",this.tension)
      }
      //  this.updateFriends()
      //  this.updateIndexes()
    }
  },

}
</script>
