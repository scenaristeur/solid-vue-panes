<template>
  <div class="groups-list">
    <GroupsToolbar :path="url"/>
    <GroupCreate v-on:created="initGroups" />

    <!--    <b-button variant="info" @click="initGroups">Reload groups</b-button>-->
    <div>
      <b-card-group columns>
        <GroupDisplay v-for="f in folder.files" :key="f.url" :file="f"/>
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
    this.initGroups()
  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    },
    storage(){
      return this.$store.state.solid.storage
    },
    url(){
      return this.storage+"public/groups/"
    }
  },
  methods: {
    async  initGroups(){
      if (this.storage != null && this.storage.length > 0){
        console.log("init groups : ",this.url)
        this.folder = await fc.readFolder(this.url)
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
        this.initGroups()
      }
    }
  },

}
</script>
