<template>
  <div class="modele-view">
    <!--  <Component /> -->
    - POD :  {{ webId }}<br>
    - storage : {{ storage}}<br>
    - folders :
    <b-list-group>
      <b-list-group-item v-for="folder in folder.folders" :key="folder.url">
        <b-icon-folder-fill></b-icon-folder-fill>
        {{ folder.name}}<br>{{folder.url}}</b-list-group-item>
      </b-list-group>
      - files :

      <b-list-group>
        <b-list-group-item v-for="file in folder.files" :key="file.url">
          <b-icon-file-text></b-icon-file-text>
          {{ file.name}}<br>{{file.url}}</b-list-group-item>

        </b-list-group>



      </div>
    </template>

    <script>
    //import {  fetchDocument } from 'tripledoc';
    //import {  rdf} from 'rdf-namespaces'
    //import ToastMixin from '@/mixins/ToastMixin'
    import auth from 'solid-auth-client';
    const SolidFileClient = window.SolidFileClient
    const fc = new SolidFileClient(auth)

    export default {
      name: 'FilesMigration',
      /*  components: {
      'Component': () => import('@/components/Component'),
    },*/
    //  mixins: [ToastMixin],
    props:['webId'],
    data() {
      return {
        //
        folder: {files:[], folders:[]}
      }
    },
    created(){
      this.storage = this.$store.state.solid.storage
      //  console.log("route",this.$route)
      //  this.url = this.$route.params.url
      //  this.getData()
    },
    methods: {
      async getFolder(url){
        this.folder = await fc.readFolder(url)
        console.log("FOLDER",this.folder)
      }

      /*async getData() {
      let dataDoc = await fetchDocument(this.url);
      let subj = dataDoc.getSubject(this.url+"#this")
      console.log(subj)
      let types = subj.getAllRefs(rdf.type)
      console.log(types)
    }*/
  },

  watch:{
    storage(){
      this.getFolder(this.storage)
    }
    /*'$route' (to) {
    //  '$route' (to, from) {
    console.log(to)
  },
  url(url){
  console.log("URL CHANGE",url)
}*/
},
computed:{
  storage: {
    get: function() { return this.$store.state.solid.storage},
    set: function() {}
  },
},
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
