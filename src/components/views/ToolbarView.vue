<template>
  <div class="modele-view">

    <b-button-toolbar key-nav aria-label="Toolbar with button groups">
      <b-button-group class="mx-1" size="sm">
        <b-button variant="outline" v-bind:to="{ name: 'TensionDetail', params: { details: url }}">Details <b-icon icon="eye" aria-hidden="true" variant="info"></b-icon> </b-button>
        <b-button variant="outline"  v-bind:to="{ name: 'TensionEdit', params: { tension: url }}">Edit <b-icon icon="plus-square" aria-hidden="true" variant="info"></b-icon> </b-button>
        <b-button variant="outline" v-if="navigator_share" @click="openShareDialog"> Share <b-icon icon="list" variant="info"></b-icon></b-button>
        <b-button variant="outline"  to="/tensions">Create Group <b-icon icon="list" variant="info"></b-icon></b-button>
        <b-button variant="outline"  to="/tensions">Fork <b-icon icon="list" variant="info"></b-icon></b-button>
      </b-button-group><br>
      <small>{{ url}}</small>
    </b-button-toolbar>

  </div>
</template>

<script>

//import toastMixin from '@/mixins/toastMixin'

export default {
  name: 'ModeleView',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [toastMixin],
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
