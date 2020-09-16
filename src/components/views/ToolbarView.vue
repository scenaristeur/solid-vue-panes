<template>
  <div class="modele-view">

    <b-button-toolbar key-nav aria-label="Toolbar with button groups">
      <b-button-group class="mx-1" size="sm">
        <!--    <b-button variant="outline" v-bind:to="{ name: 'View', params: { url: url }}">View <b-icon icon="eye" aria-hidden="true" variant="info"></b-icon> </b-button>
      -->      <b-button variant="outline"  v-bind:to="{ name: 'TensionEdit', params: { url: url }}">Edit <b-icon icon="pen" aria-hidden="true" variant="info"></b-icon> </b-button>
      <b-button variant="outline" v-if="navigator_share" @click="openShareDialog"> Share <b-icon icon="share" variant="info"></b-icon></b-button>
      <b-button variant="outline"  to="/groups">Create Group <b-icon icon="people" variant="info"></b-icon></b-button>
      <b-button variant="outline"  to="/storage">Fork <b-icon icon="back" variant="info"></b-icon></b-button>
      <b-button variant="outline"  v-bind:to="{ name: 'Parle', params: { url: url }}">Parle <b-icon icon="chat-text-fill" variant="info"></b-icon></b-button>
      <!--<b-button variant="outline"  to="/tensions">Fork <b-icon icon="list" variant="info"></b-icon></b-button>-->
    </b-button-group>
  </b-button-toolbar>
  <small>{{ url}}</small>
</div>
</template>

<script>

//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'ToolbarView',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [ToastMixin],
props:['url'],
data() {
  return {
    navigator_share : navigator && navigator.share
  }
},
created(){
  //console.log("route",this.$route)
  //this.url = this.$route.params.url
  //  this.getData()
},
computed:{
  /*  storage: {
  get: function() { return this.$store.state.solid.storage},
  set: function() {}
},*/
},
methods: {
  async  openShareDialog() {
    if (navigator && navigator.share) {
      await this.shareNative();
    } else {
      //  await this.shareFallback();
    }
  },
  async shareNative(){
    window.navigator
    .share({
      title: this.label,
      text: 'This could interest you : ',
      url: 'https://scenaristeur.github.io/solid-vue-panes/view/'+this.url,
    })
    .then(() => console.log('Successful share'))
    .catch(error => console.log('Error sharing', error));
  },
  /*  async getData() {
  let dataDoc = await fetchDocument(this.url);
  let subj = dataDoc.getSubject(this.url+"#this")
  console.log(subj)
  let types = subj.getAllRefs(rdf.type)
  console.log(types)
}*/
},
watch:{
  /*  '$route' (to) {
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
}*/
}
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
