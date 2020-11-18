<template>
  <div class="view container">
    <TaskView v-if="types.includes('http://purl.org/vocab/lifecycle/schema#Task')" :subject="subject" :url="url"/>
    <GroupView v-else-if="types.includes('http://www.w3.org/2006/vcard/ns#Group')" :subject="subject" :url="url"/>
    <ArticleView v-else-if="types.includes('https://www.w3.org/ns/activitystreams#Article')" :subject="subject" :url="url"/>
    <OfferView v-else-if="types.includes('http://purl.org/goodrelations/v1#Offering')" :subject="subject" :url="url"/>
    <ProductOrServiceView v-else-if="types.includes( 'http://purl.org/goodrelations/v1#ProductOrService')" :url="url"/>
    <NetworkView v-else-if="isNetwork == true" :subject="subject" :url="url"/>

    <ResourceView  v-else :subject="subject" :url="url" :types="types"/>
    <!-- <ResourceView v-if="types.includes('http://www.w3.org/ns/ldp#Resource')" :subject="subject" :url="url"/> -->

  </div>
</template>

<script>
import { fetchDocument } from 'tripledoc';
import { rdf} from 'rdf-namespaces'

export default {
  name: 'ViewAll',
  components: {
    'ResourceView': () => import('@/components/views/ResourceView'),
    'TaskView': () => import('@/components/views/TaskView'),
    'GroupView': () => import('@/components/views/GroupView'),
    'NetworkView': () => import('@/components/views/NetworkView'),
    'ArticleView': () => import('@/components/views/ArticleView'),
    'OfferView': () => import('@/components/offers/OfferView'),
    'ProductOrServiceView': () => import('@/components/offers/ProductOrServiceView'),
  },
  data() {
    return {
      types: [],
      subject: {},
      isNetwork: false
    }
  },
  created(){
    //console.log("route",this.$route)
    this.url = this.$route.params.url
    if( this.url == undefined){
      this.url = this.$route.query.url
      this.$route.query.hash != "" ? this.url = this.url+this.$route.query.hash : ""
    }
    this.getData()
  },
  computed:{
    storage: {
      get: function() { return this.$store.state.solid.storage},
      set: function() {}
    },
  },
  methods: {
    async getData() {
      this.isNetwork = false
      let dataDoc = await fetchDocument(this.url);
      let url =  this.url.includes("#") ? this.url : this.url+"#this"
      //  console.log(url)
      this.subject = await dataDoc.getSubject(url)
      //  console.log(this.subject)
      this.types = await this.subject.getAllRefs(rdf.type)
      console.log(this.types)

      this.types.forEach((t) => {
        if (t.endsWith('Network') ){
          this.isNetwork = true
        }
      });
    }
  },
  watch:{
    '$route' (to) {
      //  '$route' (to, from) {
      this.url = to.params.url
      if( this.url == undefined){
        this.url = to.query.url
        to.query.hash != "" ? this.url = this.url+to.query.hash : ""
      }
      this.getData()
    },
    url(url){
      console.log("URL CHANGED",url)
    }
  }
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
