<template>
  <div class="storage container-fluid">
    <div v-if="webId != null">
      <Explorer />

      <Browser class="col-6" />
      <Editor class="col-6" />
    </div>
    <div v-else>
      <SolidLoginButton />
    </div>
  </div>
</template>

<script>
//import store from "@/store";
//import { fetchDocument } from 'tripledoc';
//import { sioc, dct, foaf } from 'rdf-namespaces' //
//const { namedNode } = require('@rdfjs/data-model');
import loginMixin from '@/mixins/loginMixin'

export default {
  //  store,

  name: 'Storage',
  components: {
    'Browser': () => import('@/components/explorer/Browser'),
    'Explorer': () => import('@/components/explorer/Explorer'),
    'Editor': () => import('@/components/explorer/Editor'),
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton')
  },
  mixins: [loginMixin],
  data: function () {
    return {
      //  storage: "",
      //folder: {}
    }
  },
  created(){

    if (this.webId == null){
      this.popupLogin()
    }
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
