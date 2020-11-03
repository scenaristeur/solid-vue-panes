<template>
  <div class="view container">

    <TaskView v-if="types.includes('http://purl.org/vocab/lifecycle/schema#Task')" :subject="subject" :url="url"/>
    <GroupView v-else-if="types.includes('http://www.w3.org/2006/vcard/ns#Group')" :subject="subject" :url="url"/>
    <ArticleView v-else-if="types.includes('https://www.w3.org/ns/activitystreams#Article')" :subject="subject" :url="url"/>
    <NetworkView v-else-if="isNetwork == true" :subject="subject" :url="url"/>
    <div v-else>
      no template for {{ url }} with types : {{ types }}<br>
      view : {{ url }}

    </div>
    <ResourceView v-if="types.includes('http://www.w3.org/ns/ldp#Resource')" :subject="subject" :url="url"/>

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
  },
  data() {
    return {
      types: [],
      isNetwork: false
    }
  },
  created(){
    console.log("route",this.$route)
    this.url = this.$route.params.url
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
      console.log(url)
      this.subject = await dataDoc.getSubject(url)
      console.log(this.subject)
      this.types = await this.subject.getAllRefs(rdf.type)
      console.log(this.types)

      this.types.forEach((t) => {
        if (t.endsWith('#Network') ){
          this.isNetwork = true
        }
      });



    }
  },
  watch:{
    '$route' (to) {
      //  '$route' (to, from) {
      console.log(to)
      this.url = to.params.url // || this.storage+"public/groups/"
      this.getData()
      //  console.log(this.url)
      //  this.initGroups(to.params.url)
      //  this.updateFriends()
      //  this.updateIndexes()
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
