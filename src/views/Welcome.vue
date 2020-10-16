<i18n src="@/common/locales.json"></i18n>
<template>
  <div class="welcome container ">
    <!--  <Component /> -->
    <div bg-variant="info" text-variant="white" border-variant="dark" >
      <div class="row">
        <!--  -->
        <div class="col my-auto">
          <b-embed class="col"
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/qUZuaNkEvGU?rel=0"
          allowfullscreen
          ></b-embed>
        </div>
<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/qUZuaNkEvGU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

        <b-jumbotron class="col" bg-variant="info" text-variant="white" border-variant="dark">
          <template v-slot:header class="header">Popock</template>

          <template v-slot:lead>
            {{ $t('POds in the POCKet') }}
            <!-- <br>
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
            featured content or information. -->
          </template>

          <hr class="my-4">

          <p>
            It uses utility classes for typography and spacing to space content out within the larger
            container.
          </p>

          <b-button variant="primary" href="#">Do Something</b-button>
          <b-button variant="success" href="#">Do Something Else</b-button>
        </b-jumbotron>




      </div>

      <b-jumbotron>
        <center>  <h3>Services</h3>
          <div class="row">
            <div class="col">
              Service 1
            </div>
            <div class="col">
              Service 2
            </div>
            <div class="col">
              Service 3
            </div>
          </div>


        </center>
      </b-jumbotron>




    </div>
  </div>
</template>

<script>
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'Welcome',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [ToastMixin],
props:['value'],
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
.welcome {
  text-align: left;
}
b-jumbotron header{
  font-size: 10px;
}
</style>
