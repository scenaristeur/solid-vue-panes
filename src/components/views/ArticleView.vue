<template>
  <div class="modele-view">
    <!--  <Component /> -->


    <b-card class="mb-2">
      <b-card-title>{{ label }}</b-card-title>

      <b-card-header>
        <UserName :webId="maker" />
        <Date :dateIso="created"/>
      </b-card-header>

      <b-card-text>

        {{ content }}

      </b-card-text>

      <b-card-footer>


        <small> {{ types}} </small><br>
        <!-- <router-link v-bind:to="{ name: 'Inbox', params: { inbox: inbox }}">inbox</router-link> <br> -->
        <router-link v-bind:to="{ name: 'Post'}">Create a Article</router-link>
      </b-card-footer>
    </b-card>

  </div>
</template>

<script>
import { /*vcard,*/ dct, foaf, ldp, rdfs, rdf, sioc} from 'rdf-namespaces' //

export default {
  name: 'ArticleView',
  components: {
    'UserName': () => import('@/components/basic/UserName'),
    'Date': () => import('@/components/basic/Date'),
  },
  props:['subject','url'],
  created(){
    console.log("Subject", this.subject)
    this.label = this.subject.getLiteral(rdfs.label)
    this.created = this.subject.getLiteral(dct.created)
    this.content = this.subject.getLiteral(sioc.content)
    this.inbox = this.subject.getRef(ldp.inbox)
    this.maker = this.subject.getRef(foaf.maker)
    this.types = this.subject.getAllRefs(rdf.type)

  }
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
