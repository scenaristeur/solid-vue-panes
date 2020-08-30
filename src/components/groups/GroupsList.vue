<template>
  <div class="groups-list">
    {{url}}
    <GroupsToolbar :path="url"/>
    <GroupCreate v-on:created="initGroups" />

    <!--    <b-button variant="info" @click="initGroups">Reload groups</b-button>-->
    <div>
      <b-card-group columns>
        <GroupDisplay v-for="f in folder.files" :key="f.url" :file="f" v-on:created="initGroups"/>
      </b-card-group>
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
      folder: {}
    }
  },
  created(){

    console.log(this.url)
    this.initGroups()
  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    },
    storage(){
      return this.$store.state.solid.storage
    },
    url: {
      get: function() { return this.storage+"public/groups/"},
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
    }
  },
  watch: {
    url: function (url) {
      if(url != null){
        console.log(url)
        //  this.sendMessage("switched to "+url)
        this.initGroups(url)
      }
    },
    '$route' (to) {
      //  '$route' (to, from) {
      console.log(to)
      this.url = to.params.url // || this.storage+"public/groups/"
    //  console.log(this.url)
      this.initGroups(to.params.url)
      //  this.updateFriends()
      //  this.updateIndexes()
    }
  },

}
</script>
