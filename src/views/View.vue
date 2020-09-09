<template>
  <div class="view container">

    <TaskView v-if="types.includes('http://purl.org/vocab/lifecycle/schema#Task')" :subject="subject" :url="url"/>
    <ResourceView v-if="types.includes('http://www.w3.org/ns/ldp#Resource')" :subject="subject" :url="url"/>
    view : {{ url }}
  </div>
</template>

<script>
import { fetchDocument } from 'tripledoc';
import { rdf} from 'rdf-namespaces'

export default {
  name: 'View',
  components: {
    'ResourceView': () => import('@/components/views/ResourceView'),
    'TaskView': () => import('@/components/views/TaskView'),
  },
  data() {
    return {
      types: []
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
      let dataDoc = await fetchDocument(this.url);
      this.subject = dataDoc.getSubject(this.url+"#this")
      console.log(this.subject)
      this.types = this.subject.getAllRefs(rdf.type)
      console.log(this.types)

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
