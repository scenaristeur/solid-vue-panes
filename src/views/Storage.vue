<template>
  <div class="storage">
    <div v-if="webId != null" class="row">

      <Browser class="col-md-6" />
      <Editor class="col-md-6" />
    </div>
    <div v-else>
      <SolidLogin />
    </div>
  </div>
</template>

<script>
//import store from "@/store";
//import { fetchDocument } from 'tripledoc';
//import { sioc, dct, foaf } from 'rdf-namespaces' //
//const { namedNode } = require('@rdfjs/data-model');


export default {
  //  store,

  name: 'Storage',
  components: {
    'Browser': () => import('@/components/explorer/Browser'),
    'Editor': () => import('@/components/explorer/Editor'),
    'SolidLogin': () => import('@/components/solid/SolidLogin')  
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
