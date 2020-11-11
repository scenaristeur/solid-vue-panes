<template>
  <div class="modele-view">
    <!--  <Component /> -->


    <b-card class="mb-2">
      <b-card-title>{{ label }}</b-card-title>

      <b-card-header>
        <UserName :webId="maker" />
        <Date :dateIso="created"/>
      </b-card-header>

      <b-card-text v-html="HtmlContent"> </b-card-text>



      <b-card-footer>


        <small> {{ types}} </small><br>
        <!-- <router-link v-bind:to="{ name: 'Inbox', params: { inbox: inbox }}">inbox</router-link> <br> -->
        <!-- <router-link v-bind:to="{ name: 'Post'}">Create a Article</router-link> -->
            <b-button  v-bind:to="{ name: 'Post', params: { url: url }}" variant="outline-info">Reply / New</b-button>
        <b-button  v-if="inReplyTo != undefined" v-bind:to="{ name: 'View', query: { url: article_url }}" variant="outline-info">in Reply to</b-button>
        <b-card-text v-if="inReplyTo != undefined"> in reply to {{ inReplyTo }} </b-card-text>

      </b-card-footer>
    </b-card>

  </div>
</template>

<script>
import { fetchDocument } from 'tripledoc';
import { /*vcard,*/ dct, foaf, ldp, rdfs, rdf, sioc} from 'rdf-namespaces' //
import {markdown} from 'markdown';

export default {
  name: 'ArticleView',
  components: {
    'UserName': () => import('@/components/basic/UserName'),
    'Date': () => import('@/components/basic/Date'),
  },
  props:['subject','url'],
  created(){
    this.update(this.subject)
    this.article_url = this.$route.params.url
  if( this.article_url == undefined){
   this.article_url = this.$route.query.url
    this.$route.query.hash != "" ? this.article_url = this.article_url+this.$route.query.hash : ""
  }
  console.log(this.$route.query.hash != "")
    console.log("article_url",this.article_url)
  },
  watch:{
  async  '$route' (to) {
      console.log(to)
      this.article_url = to.params.url
    if( this.article_url == undefined){
     this.article_url = to.query.url
     console.log(to.query.hash)
      to.query.hash != undefined && to.query.hash.length > 0 ? this.article_url = this.article_url+to.query.hash : ""
    }
      console.log("article_url",this.article_url)
      if (this.article_url != this.url){
        this.url = this.article_url
        let dataDoc = await fetchDocument(this.url);
        let url =  this.url.includes("#") ? this.url : this.url+"#this"
         console.log(url)
        let subject = await dataDoc.getSubject(url)
        this.update(subject)
      }
    },
    async  article_url(){
      console.log(this.article_url)
      if (this.article_url != this.url){
        this.url = this.article_url
        let dataDoc = await fetchDocument(this.url);
        let url =  this.url.includes("#") ? this.url : this.url+"#this"
         console.log(url)
        let subject = await dataDoc.getSubject(url)
        this.update(subject)
      }
    }
  },
  methods: {
    update(subject) {
    //  console.log("Subject", subject)
      this.label = subject.getLiteral(rdfs.label)
      this.created = subject.getLiteral(dct.created)
      this.content = subject.getLiteral(sioc.content)
      this.HtmlContent = markdown.toHTML( this.content)
      this.inbox = subject.getRef(ldp.inbox)
      this.maker = subject.getRef(foaf.maker)
      this.types = subject.getAllRefs(rdf.type)
      this.inReplyTo = subject.getRef("https://www.w3.org/ns/activitystreams#inReplyTo")
console.log("update",this.label)
    }
  }
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
