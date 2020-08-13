<template>
  <div class="groups-list">

    <GroupCreate v-on:created="initGroups" />

    <!--    <b-button variant="info" @click="initGroups">Reload groups</b-button>-->

    <b-list-group flush>
      <b-list-group-item v-for="f in folder.files" :key="f.url"> <!-- sorted(folder.files) -->
        <div class="item">
          <div class="avatar"></div>
          <div class="name text-info">
            {{f.name}}
          </div>
          <!--<div class="maker text-info">
          {{m.maker.split('/').slice(2,3)[0]}}
        </div>-->
        <div class="content">
          {{f.url}}
          <GroupMembers :url="f.url" />
        </div>
        <div class="created">
          {{f.modified}}
        </div>
        <!--  <div class="row">
        {{m.id.split("#")[1]}}
      </div>-->
    </div>
  </b-list-group-item>
</b-list-group>



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
    'GroupCreate': () => import('@/components/groups/GroupCreate'),
    'GroupMembers': () => import('@/components/groups/GroupMembers'),
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
<style>
.Asolid-chat-list{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-width: 320px;
  background: #fff;
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0,0,0,.87);
}
.Bitem{
  position: absolute;
  /*  left: 0px;
  top: 0px; */
  margin-left: 0px;
  margin-top: 0px;
  /*  width: 722px; */
  /*  height: 574px; */
  background-color: rgb(255, 255, 255);
}
.avatar{
  position: absolute;
  left: 0px;
  top: 8px;
  width: 29px;
  height: 29px;
  background-image: url(no-avatar.png);
  background-size: contain;
  opacity: .3;
}
.maker{
  position: absolute;
  left: 35px;
  top: 4px;
  width: auto;
  height: auto;
  text-align: left;
}
.content{
  position: relative;
  padding-left: 36px;
  padding-top: 23px;
  padding-bottom: 5px;
  width: 90%;
  height: auto;
  text-align: left;
}
.created{
  color: #C5C5C5;
  font-size: 13px;
  font-weight: normal;
}
</style>
