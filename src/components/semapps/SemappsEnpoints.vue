<i18n src="@/common/locales.json"></i18n>

<template>
  <div class="modele-view">
    <h5>{{$t('choose_source')}}</h5>
    <b-list-group>
      <b-list-group-item button v-for="e in endpoints" :key="e.name" @click="changeEndpoint(e)" variant="success" :disabled="e.disabled">
        <b>{{ e.name}} : </b>{{ e.url}}

      </b-list-group-item>
    </b-list-group>

  </div>
</template>

<script>


//import {  rdf} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'SemappsEnpoints',
  /*  components: {
  'Thing': () => import('@/components/basic/Thing'),
},*/
//  mixins: [ToastMixin],
props:['endpoints'],
data() {
  return {
    //
  }
},
created(){
  //  console.log("route",this.$route)
  //  this.url = this.$route.params.url
  //  this.getData()
},
methods: {
  changeEndpoint(e){
    //  console.log(e)
    this.$store.commit('semapps/setEndpoint',e)
  }
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
