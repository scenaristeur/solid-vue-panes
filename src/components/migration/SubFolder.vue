<template>
  <div class="modele-view">
    <!-- <div v-if="meta.url != undefined ">
    <div class="row">META :<FileContent :file="meta" :search="search" :replace="replace" /></div>
  </div>
  <div v-if="acl.url != undefined"><div class="row">ACL :    <FileContent :file="acl" :search="search" :replace="replace" /></div>
</div> -->

<div v-for="folder in folder.folders" :key="folder.url">
  <!--<b-icon-folder-fill></b-icon-folder-fill>
  <a href="folder.url" target="_blank"> {{folder.url}}</a>-->
  <SubFolder :url="folder.url"  :search="search" :replace="replace" />
</div>

<!--
<div v-for="file in folder.files" :key="file.url">
  <FileContent :file="file" :search="search" :replace="replace" />
</div>-->

</div>
</template>

<script>

import ToastMixin from '@/mixins/ToastMixin'
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )


export default {
  name: 'SubFolder',
  components: {
  //  'FileContent': () => import('@/components/migration/FileContent'),
    'SubFolder': () => import('@/components/migration/SubFolder'),
  },
  mixins: [ToastMixin],
  props:['url', 'search', 'replace'],
  data() {
    return {
      folder:{ folders: [], files: []},
    }
  },
  async created(){
    this.update()
  },
  methods: {
    async update(){
      if (this.url != undefined){


        try{
          this.folder = await fc.readFolder(this.url)


          this.$store.commit('migration/addFolders', this.folder.folders)
          this.$store.commit('migration/addFiles', this.folder.files)

          this.makeToast("loaded Folder",this.url, "success")
        }
        catch(e){
          console.error("ERROR",e)
          this.makeToast("Error"+this.url,e, "danger")
        }


      }
    }
  },

  watch:{
    url(){
      this.update()
    }
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
