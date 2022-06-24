<template>
  <div class="modele-view">
    <!--  <Component /> -->
    -- migration for <a href="https://gitlab.com/solid.community/proposals/-/issues/16" target="_blank">solid.community shutdown</a><br>
    - POD :  {{ webId }}<br>
    - storage : {{ storage}}<br>
    - SEARCH : <b-input v-model="search" /><br>
    - REPLACE : <b-input v-model="replace" /><br>



    <div v-if="acl != null" >

      <div v-for="f in mustUpdate" :key="f.url+'-up'">
        {{f.url}}
      </div>
      <b-button v-if="mustUpdate.length > 0" @click="updateAll" variant="success">Update All {{mustUpdate.length}} files</b-button>



      <hr>
      <br>- FILES : <br>

      <MigrationItem v-for="f in files"  :key="f.url" :item="f" :search="search" :replace="replace" />

      <hr>
      - FOLDERS :
      <MigrationItem v-for="f in folders" :key="f.url" :item="f" :search="search" :replace="replace"/>
    </div>
    <div v-else>
      I CAN NOT READ {{storage}} .ACL, are you sure that you grant Popock to CONTROL your POD.
      please update in your preferences <a :href="webId" target="_blank">{{webId}}</a>, then refresh this page
    </div>


    <SubFolder :url="storage" v-if="acl != null"  :search="search" :replace="replace" />

  </div>
</template>

<script>
import {
  getSolidDatasetWithAcl,
  getAgentAccessAll,
} from "@inrupt/solid-client";
import ToastMixin from '@/mixins/ToastMixin'


export default {
  name: 'FilesMigration',
  components: {
    'SubFolder': () => import('@/components/migration/SubFolder'),
    'MigrationItem': ()=> import('@/components/migration/MigrationItem'),
  },
  mixins: [ToastMixin],
  props:['webId'],
  data() {
    return {
      acl: null,
      search : "solid.community",
      replace : "solidcommunity.net",
    }
  },
  created(){
    //  this.storage = this.$store.state.solid.storage
    this.$store.commit('migration/init')
  },
  watch:{
    storage(){
      this.$store.commit('migration/init')
      this.$store.commit('migration/addFolders', [{url:this.storage}])
      this.checkStorageAcl()
    }
  },
  methods:{
    async  updateAll(){
      let app = this
      while (this.mustUpdate.length > 0 ) {
        let f = this.mustUpdate.pop()
        try{
          await this.$fc.createFile( f.url, f.newContent, f.type )
          console.log("fixed",f.url)
          app.makeToast("FIXED", this.file.url, "success")
        }catch(e){
          app.makeToast("ERROR", e, "danger")
        }
      }
    },
    async  checkStorageAcl(){
      try{
        console.log(this.storage)
        const myDatasetWithAcl = await getSolidDatasetWithAcl(this.storage);
        let accessByAgent = getAgentAccessAll(myDatasetWithAcl);
        this.acl = accessByAgent
        console.log("STORAGE ACL",this.acl)

      }catch(e){
        this.makeToast("Error", e, "danger")
        alert(e)
        this.acl = null
      }

    }
  },
  computed:{
    storage: {
      get: function() { return this.$store.state.solid.storage},
      set: function() {}
    },
    folders: {
      get: function() { return this.$store.state.migration.folders},
      set: function() {}
    },
    files: {
      get: function() { return this.$store.state.migration.files},
      set: function() {}
    },
    mustUpdate: {
      get: function() { return this.$store.state.migration.mustUpdate},
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
