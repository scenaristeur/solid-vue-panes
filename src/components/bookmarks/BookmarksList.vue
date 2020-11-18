<template>
  <div class="bookmarks-list container">
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

<h5>Categories :</h5>

<b-button v-for="fo in bm.folders" :key="fo.url" variant="info" class="m-1" @click="updateBm(fo.url)">{{ fo.name }}</b-button>

</div>
</template>

<script>
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
import { fetchDocument } from 'tripledoc';
import { sioc, rdfs } from 'rdf-namespaces'

export default {
  name: 'BookmarksList',
  props: ['mode'],
  data: function () {
    return {
      bm : {files: [], folders: []},
      bookmarks: []
      }
  },
  mounted() {
    this.path = this.$store.state.solid.storage+this.mode+"/bookmarks/"
    this.updateBm()
  },
  watch: {
    path () {
      this.updateBm()
    },
    storage (st) {
      this.path = st+this.mode+"/bookmarks/"
    },
  },
  methods:{
    async updateBm(path = this.path){
      let bm = {files: [], folders: []}
      let bookmarks = []

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
