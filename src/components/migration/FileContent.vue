<template>
  <div class="modele-view">
    <div  v-if="found">
      <b-alert  variant="warning" show>
        <b-icon-file-text></b-icon-file-text>
        {{ file.name}}, <a :href="file.url" target="_blank">{{file.url}}</a><br>
        Found <b>{{ search }}</b>
      </b-alert>

      <b-form-textarea v-if="text.length > 0"
        id="textarea"
        v-model="text"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
        ></b-form-textarea>

        <b-button variant="warning" @click="fix">Fix</b-button>

        <!-- <div v-if="meta.url != undefined ">
          <div class="row">META :<FileContent :file="meta" :search="search" :replace="replace" /></div>
        </div>
        <div v-if="acl.url != undefined"><div class="row">ACL :    <FileContent :file="acl" :search="search" :replace="replace" /></div>
      </div> -->

        <hr>
        <hr>
      </div>


      <b-alert v-else variant="success" show>
        <b-icon-file-text></b-icon-file-text>
        <a :href="file.url" target="_blank">{{file.url}}</a>
        <b> OK</b>
      </b-alert>


      <!--  <Component /> -->
    </div>
  </template>

  <script>
  //import {  fetchDocument } from 'tripledoc';
  //import {  rdf} from 'rdf-namespaces'
  import ToastMixin from '@/mixins/ToastMixin'
  import auth from 'solid-auth-client';
  import FC from 'solid-file-client'
  const fc = new FC( auth )

  export default {
    name: 'FileContent',
    /*  components: {
    'Component': () => import('@/components/Component'),
  },*/
  mixins: [ToastMixin],
  props:['file', 'search', 'replace'],
  data() {
    return {
      found : false,
      text: "",

    }
  },
  created(){
    this.getContent()
    //  console.log("route",this.$route)
    //  this.url = this.$route.params.url
    //  this.getData()
  },
  methods: {
    async getContent(){
      let content = await fc.readFile(this.file.url)
      // this.aclObject = await fc.aclUrlParser(this.file.url)
      // console.log("ACLOBJECT", this.aclObject)
      //  console.log("CONTENT", this.file.url, text, typeof text )
      if (typeof content == "string" ){
        //  console.log(text, text.includes(this.search))
        this.text = content
        if (content.includes(this.search)){
          this.found = true
        }

      }

    },
    async fix(){
    //  console.log(this.text)
      let result = this.text.replaceAll(this.search, this.replace);
    //  console.log(result)
    //  console.log(this.file)
      try{
        await fc.createFile( this.file.url, result, this.file.type )
        this.makeToast("FIXED", this.file.url, "success")
      }catch(e){
        this.makeToast("ERROR", e, "danger")
      }

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
  file(){
    this.getContent()
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
