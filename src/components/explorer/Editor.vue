<template>
  <div class="editor">

    File : {{ file }}<br>

  </div>
</template>

<script>
//import store from "@/store";
//import { fetchDocument } from 'tripledoc';
//import { sioc, dct, foaf } from 'rdf-namespaces' //
//const { namedNode } = require('@rdfjs/data-model');


export default {
  //  store,

  name: 'Browser',
  components: {

  },
  data: function () {
    return {
      //  storage: "",
      //folder: {}
    }
  },
  async   created(){
    //  this.solid= window.solid
    //  this.webId =
    //  this.fc = new SolidFileClient(auth)
    //  example     await solid.data.from(this.fileUrl)[index]['http://www.w3.org/2005/01/wf/flow#message'].set(namedNode(messUri))

  },
  methods: {
    selected(item){
      console.log(item)
      item.type == "folder" ?   this.$store.dispatch('solid/updateFolder', item.url) : this.openFile(item)
      //  this.folder =  this.$store.state.solid.folder
    },
    openFile(item){
      console.log("Open",item.url)
    },
    goUp(){
      console.log(this.folder)
      this.$store.dispatch('solid/updateFolder', this.folder.parent)
    }
    /*  updateBrowser: async  function (){
    this.folder = await this.fc.readFolder(this.storage)
    console.log(this.folder)
  }*/
},
computed:{
  webId(){
    return this.$store.state.solid.webId
  },
  storage(){
    return this.$store.state.solid.storage
  },
  folder(){
    return  this.$store.state.solid.folder
  },
  file(){
    return  this.$store.state.solid.file
  }
},
watch: {
  // whenever question changes, this function will run
  /*  webIb: async function (webId) {
  this.storage =   await this.solid.data[webId].storage
  console.log("Storage",`${this.storage}`)
  this.updateBrowser()
}*/
},
}
</script>
<style>
.item {
  text-align: left;
}
</style>
