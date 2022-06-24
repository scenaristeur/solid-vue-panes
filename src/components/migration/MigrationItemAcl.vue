<template>
  <div class="modele-view">
    <!--  <Component /> -->
    <div >
      {{ item.url}}
      <b-button size="sm" :variant="acl_variant">
        Acl <b-badge variant="light">{{acl}}</b-badge>
      </b-button>
      {{item.type}}
      <FileContent v-if="item.type=='text/turtle'" :file="item"  :search="search" :replace="replace" />

    </div>
  </div>
</template>

<script>

//import {  rdf} from 'rdf-namespaces'
import ToastMixin from '@/mixins/ToastMixin'
import {
  getSolidDatasetWithAcl,
  getAgentAccessAll,
} from "@inrupt/solid-client";



export default {
  name: 'MigrationItem',
  components: {
    'FileContent': () => import('@/components/migration/FileContent'),
  },
  mixins: [ToastMixin],
  props:['item', 'search', 'replace'],
  data() {
    return {
      acl : "loading",
      acl_variant : "primary"
    }
  },
  async created(){
    if (this.item.url != "https://"){
      try{
        const myDatasetWithAcl = await getSolidDatasetWithAcl(this.item.url);
        let accessByAgent = getAgentAccessAll(myDatasetWithAcl);
        //  this.acl = accessByAgent
        //console.log(accessByAgent)
        let entries = Object.keys(accessByAgent)
        //console.log(this.search)
        if(entries.includes(this.search)){
          this.acl = "must update"
          this.acl_variant = "danger"
        }else{
          this.acl = "ok"
          this.acl_variant = "success"
        }
      }catch(e){
        this.acl = "no acl"
        this.acl_variant = "light"
      }




      // try{
      //   const { acl: aclUrl } = await this.$fc.getItemLinks(this.item.url, { links: 'include_possible'})
      //   this.aclUrl = aclUrl
      //   let content = await this.$fc.aclUrlParser(this.item.url)
      //   console.log(content)
      // }catch(e){
      //   this.makeToast("Error", e, "danger")
      // //  alert(e)
      // }
    }
    // const myDatasetWithAcl = await getSolidDatasetWithAcl(this.item.url);
    // let accessByAgent = getAgentAccessAll(myDatasetWithAcl);
    // this.acl = accessByAgent
    // console.log(this.acl)
    //  console.log("route",this.$route)
    //  this.url = this.$route.params.url
    //  this.getData()
  },
  methods: {
    /*async getData() {
    let dataDoc = await this.$fc.readFile(this.url);
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
