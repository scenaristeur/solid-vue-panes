<template>
  <div class="modele-view">
    <!-- {{file.name}} -->
    <b-list-group>
      <b-list-group-item v-for="(s, index) in subjects" :key="index" href="#some-link">
        <SubjectToArticle :subject="s" />
      </b-list-group-item>
    </b-list-group>
    <!--  <Component /> -->
  </div>
</template>

<script>

export default {
  name: 'ArticlesInFile',
    components: {
  'SubjectToArticle': () => import('@/components/blog/SubjectToArticle'),
},
//  mixins: [ToastMixin],
props:['file'],
data() {
  return {
    subjects: []
  }
},
async created(){
  try{

    const chatDoc = await this.$fc.readFile(this.file.url);
    let subjects = chatDoc.findSubjects()
    this.subjects = subjects.filter( this.onlyUnique ).reverse()
  //  console.log(this.subjects)
  }
  catch(e){
    console.log(e)
  }


  //  console.log("route",this.$route)
  //  this.url = this.$route.params.url
  //  this.getData()
},
methods: {
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  },
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
