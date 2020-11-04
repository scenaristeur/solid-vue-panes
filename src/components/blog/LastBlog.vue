<template>
  <div class="modele-view">
    <div class="accordion scroll" role="tablist">
      <b-card no-body class="mb-1" v-for="(f, index) in files" :key="f.name" bg-variant="dark" text-variant="white">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle="'accordion-'+index" variant="info">{{ f.name }}</b-button>
        </b-card-header>
        <b-collapse v-bind:id="'accordion-'+index" :visible="true" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text >
              <ArticlesInFile :file="f" />
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>

    {{ pubPod }}



    <!-- <b-list-group>
    <b-list-group-item v-for="f in files" :key="f.name" href="#some-link">{{ f.name }}
  </b-list-group-item>
  <b-list-group-item href="#">Link with active state</b-list-group-item>
  <b-list-group-item href="#">Action links are easy</b-list-group-item>
  <b-list-group-item href="#foobar">Disabled link</b-list-group-item>
</b-list-group> -->
</div>
</template>

<script>
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
import ActivityMixin from '@/mixins/ActivityMixin'
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )

export default {
  name: 'LastBlog',
  components: {
    'ArticlesInFile': () => import('@/components/blog/ArticlesInFile'),
  },
  mixins: [ActivityMixin],
  props:['value'],
  data() {
    return {
      folder: {files:[]},
      files: []
    }
  },
  created(){
    var dateObj = new Date();
    let d = this.formatDate(dateObj)
    this.fileUrl = this.pubPod+d+".ttl"

    this.update()

    //  console.log("route",this.$route)
    //  this.url = this.$route.params.url
    //  this.getData()
  },
  methods: {
    async update(){
      await fc.readFolder(this.pubPod).then(folder => {
        console.log("Folder",folder.folders)
        //  store.commit('crud/setShapeUrl', this.shape_url)
        this.folder = folder
        this.files = this.folder.files.reverse()
      },
      err => { console.log("erreur for url : ", this.pubPod,err) })
    }
    //  }
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
.scroll{
  position: relative;
  bottom:0px;
  max-height: 75vh;
  margin-bottom: 10px;
  overflow-y:scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
