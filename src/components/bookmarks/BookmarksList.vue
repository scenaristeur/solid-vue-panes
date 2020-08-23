<template>
  <div class="bookmarks-list container">
    <!--  storage: {{storage}}<br>
    path : {{path}} <br>-->

    <b-button @click="updateBm()" variant="outline-info" >Back to {{mode}}/bookmarks/</b-button><br>

    <h5>Bookmarks :</h5>


    <div>
      <b-card-group columns>

        <b-card v-for="b in bookmarks" :key="b.id"
        v-bind:img-src="b.img" img-alt="Image" img-top>
        <b-card-title>{{b.label}}</b-card-title>
        <b-card-text>
          {{b.content}}
        </b-card-text>
        <b-card-text class="small text-muted">
          <a v-bind:href="b.url" target="_blank">{{b.url}}</a>
        </b-card-text>
      </b-card>


    </b-card-group>
  </div>

  <!--
  <b-list-group>
  <b-list-group-item v-for="b in bookmarks" :key="b.id" >
  <h5 class="mr-2">  {{ b.label }}</h5>
  <p>{{b.content}}</p>
  <p class="ml-2">

  <a v-bind:href="b.url" v-if="b.url != null" target="_blank">{{b.url}}</a>
</p>
</b-list-group-item>
</b-list-group>
-->


<h5>Categories :</h5>

<b-button v-for="fo in bm.folders" :key="fo.url" variant="info" class="m-1" @click="updateBm(fo.url)">{{ fo.name }}</b-button>
<!--
<b-list-group>
<b-list-group-item v-for="fo in bm.folders" :key="fo.url" class="d-flex align-items-center">
{{ fo }}
</b-list-group-item>
</b-list-group>-->
<!--  {{ bm }} -->

<!--  Current :  {{ webId }}, {{ friends.length }} friends<br>

<router-link :to="{ name: 'FoFri'}">Me</router-link><br>
<router-link :to="{ name: 'FoFri', params: { webId: 'https://spoggy.solid.community/profile/card#me' }}">spoggy</router-link>
<b-button disabled>add Spoggy to your friends</b-button><br>
<router-link :to="{ name: 'FoFri', params: { webId: 'https://spoggy-test.solid.community/profile/card#me' }}">spoggy-test6</router-link><br>
<hr>



<b-list-group>
<b-list-group-item v-for="f in friends" :key="f" v-bind:to="{ name: 'FoFri', params: { webId: f }}" class="d-flex align-items-center">
<b-avatar class="mr-3"></b-avatar>
<b-avatar button  src="https://placekitten.com/300/300" badge badge-variant="danger" class="mr-3"></b-avatar>
<span class="mr-auto">{{ f }}</span>
<b-badge>12</b-badge>
<PeopleItem :webId="f" />
</b-list-group-item>
</b-list-group>-->

<!--  <div v-for="f in friends" :key="f"  style="font-size: 2rem;">
<router-link v-bind:to="{ name: 'FoFri', params: { webId: f }}">
<b-avatar rounded="lg"></b-avatar>  {{ f }}
</router-link>
<br>
</div > -->


</div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'
import auth from 'solid-auth-client';
const SolidFileClient = window.SolidFileClient
const fc = new SolidFileClient(auth)
import { fetchDocument } from 'tripledoc';
import { sioc, rdfs } from 'rdf-namespaces'

export default {
  name: 'BookmarksList',
  //  mixins: [profileMixin],
  components: {
    //  'PeopleItem': () => import('@/components/profile/PeopleItem'),
  },
  props: ['mode'],
  data: function () {
    return {
      bm : {files: [], folders: []},
      bookmarks: []
      //  webId: {},
      //  friends: [],
    }
  },
  mounted() {
    this.path = this.$store.state.solid.storage+this.mode+"/bookmarks/"
    this.updateBm()
  },
  watch: {
    path (path) {
      console.log("path",path)
      this.updateBm()
    },
    storage (st) {
      this.path = st+this.mode+"/bookmarks/"
    },
  },
  methods:{
    async updateBm(path = this.path){
      console.log("path updated",path)
      let bm = {files: [], folders: []}
      let bookmarks = []
      console.log(bm.files.length)

      try {
        bm = await fc.readFolder(path)
        if (bm.files.length > 0){
          const bookmarkDoc = await fetchDocument(bm.files[0].url);
          let  subjects = bookmarkDoc.findSubjects();
          subjects = subjects.filter( this.onlyUnique )
          for  (let s of subjects) {
            let b ={id:s.asRef(),
              content : s.getLiteral(sioc.content),
              label: s.getLiteral(rdfs.label),
              url: s.getNodeRef("http://www.w3.org/2002/01/bookmark#recalls"),

            }
            b.img= "//image.thum.io/get/width/355/crop/600/"+b.url
            console.log(b)
            bookmarks.unshift(b)
          }
        }
      }catch(e){
        //  console.log(e)
      }

      this.bm = bm
      this.bookmarks = bookmarks
      //  this.friends = await this.getFriends(this.webId)
    },
    onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    },
  },
  computed:{
    storage(){
      return this.$store.state.solid.storage
    }
  },
}
</script>
