<template>
  <div class="modele-view">
    NetworkView
    <EditorNetwork />
  </div>
</template>

<script>
import {/* vcard, dct, foaf, ldp,*/ rdfs, rdf} from 'rdf-namespaces' //

export default {
  name: 'NetworkView',
  components: {
        'EditorNetwork': () => import('@/components/editor/EditorNetwork'),
  },
  props:['subject','url'],
  data: function () {
    return {
      file: {}
    }
  },
  created(){
    this.file = {url: this.url}
     this.$store.commit('solid/setFile', this.file)
    console.log("Subject", this.subject)
    this.label = this.subject.getLiteral(rdfs.label)
    /*this.created = this.subject.getLiteral(dct.created)
    this.inbox = this.subject.getRef(ldp.inbox)
    this.wi = this.subject.getLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatis")
    this.wsb = this.subject.getLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatshouldbe")
    this.maker = this.subject.getRef(foaf.maker)

    this.roles = this.subject.getAllLiterals("http://www.w3.org/ns/org#memberOf")*/
    this.types = this.subject.getAllRefs(rdf.type)
  //  this.purpose = this.subject.getAllLiterals("http://www.w3.org/ns/org#purpose")
console.log("LABEL de Network",this.label)
  }
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
