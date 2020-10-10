<template>
  <div class="modele-view">
    <div v-if="meta.url != undefined ">
      <div class="row">META :<FileContent :file="meta" :search="search" :replace="replace" /></div>
    </div>
    <div v-if="acl.url != undefined"><div class="row">ACL :    <FileContent :file="acl" :search="search" :replace="replace" /></div>
  </div>

  <div v-for="folder in folder.folders" :key="folder.url">
    <b-icon-folder-fill></b-icon-folder-fill>
    <a href="folder.url" target="_blank"> {{folder.url}}</a>
    <SubFolder :url="folder.url"  :search="search" :replace="replace" />
  </div>


  <div v-for="file in folder.files" :key="file.url">
    <FileContent :file="file" :search="search" :replace="replace" />
  </div>

</div>
</template>

<script>
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
import ToastMixin from '@/mixins/ToastMixin'
import auth from 'solid-auth-client';
const SolidFileClient = window.SolidFileClient
const fc = new SolidFileClient(auth)

export default {
  name: 'SubFolder',
  components: {
    'FileContent': () => import('@/components/migration/FileContent'),
    'SubFolder': () => import('@/components/migration/SubFolder'),
  },
  mixins: [ToastMixin],
  props:['url', 'search', 'replace'],
  data() {
    return {
      folder:{ folders: [], files: []},
      meta: {},
      acl: {}
    }
  },
  async created(){
    this.makeToast("loading",this.url)
    this.folder = await fc.readFolder(this.url, {links:"include"} )
    this.meta.url = this.folder.links.meta
    this.acl.url = this.folder.links.acl

    // console.log(folder.links.meta || "no .meta for this folder")
    //console.log(folder.files[0].links.acl || "no .acl for this file")
    //  console.log("FOLDER",this.folder)
    //  console.log("route",this.$route)
    //  this.url = this.$route.params.url
    //  this.getData()
  },
  methods: {
    /*async getData() {
    let dataDoc = await fetchDocument(this.url);
    let subj = dataDoc.getSubject(this.url+"#this")
    console.log(subj)
    let types = subj.getAllRefs(rdf.type)
    console.log(types)
  }*/
},

watch:{
  /*'$route' (to) {
  //  '$route' (to, from) {
  console.log(to)
},
url(url){
console.log("URL CHANGE",url)
}*/
},
computed:{
  /*storage: {
  get: function() { return this.$store.state.solid.storage},
  set: function() {}
},*/
},
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
