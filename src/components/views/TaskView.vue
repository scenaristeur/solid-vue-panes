<template>
  <div class="modele-view">
    <!--  <Component /> -->


    <b-card class="mb-2">
      <b-card-title>{{ label }}</b-card-title>
      <b-card-header>
        <p><b>What Is :</b> {{wi}}</p>
        <p><b>What should be :</b> {{wsb}}</p>
      </b-card-header>
      <b-card-text><ToolbarView :url="url" /></b-card-text>
      <b-card-text>
        {{ wsb }}
        <b-button-toolbar key-nav aria-label="Toolbar with button groups">
          <b-button-group class="mx-1" size="sm">
            <b-button variant="outline"  to="/tension/edit"><b-icon icon="plus-square" aria-hidden="true" variant="info"></b-icon> </b-button>
            <b-button variant="outline"  to="/tensions"> <b-icon icon="list" variant="info"></b-icon></b-button>
          </b-button-group>
        </b-button-toolbar>
      </b-card-text>
      <b-card-footer>


        domains {{ domains}}
        {{ created}} -
        <small> {{ types}} </small><br>

        maker {{maker}}<br>
        inbox {{ inbox}}<br>
        roles {{ roles}} <br>
      </b-card-footer>

    </b-card>




  </div>
</template>

<script>
import { /*vcard,*/ dct, foaf, ldp, rdfs, rdf} from 'rdf-namespaces' //

export default {
  name: 'TaskView',
  components: {
    'ToolbarView': () => import('@/components/views/ToolbarView'),
  },
  props:['subject','url'],
  created(){
    console.log("Subject", this.subject)
    this.label = this.subject.getLiteral(rdfs.label)
    this.created = this.subject.getLiteral(dct.created)
    this.label = this.subject.getLiteral(rdfs.label)
    this.inbox = this.subject.getRef(ldp.inbox)
    this.wi = this.subject.getLiteral("https://holacratie.solid.community/public/holacratie#whatis")
    this.wsb = this.subject.getLiteral("https://holacratie.solid.community/public/holacratie#whatshouldbe")
    this.maker = this.subject.getRef(foaf.maker)
    this.types = this.subject.getAllRefs(rdf.type)
    this.roles = this.subject.getAllLiterals("http://www.w3.org/ns/org#memberOf")
    this.domains = this.subject.getAllLiterals("http://www.w3.org/ns/org#purpose")

  }
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
