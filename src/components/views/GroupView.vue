<template>
  <div class="modele-view">

<GroupDisplay :file="file"/>
  </div>
</template>

<script>
import { vcard, /*dct, foaf, ldp, rdfs,*/ rdf} from 'rdf-namespaces' //

export default {
  name: 'GroupView',
  components: {
  //  'ToolbarView': () => import('@/components/views/ToolbarView'),
  //  'UserName': () => import('@/components/basic/UserName'),
  //  'Date': () => import('@/components/basic/Date'),
    //'Domains': () => import('@/components/basic/Domains'),
        'GroupDisplay': () => import('@/components/groups/GroupDisplay'),
  },
  props:['subject','url'],
  data: function () {
    return {
    file: {}
    }
  },
  created(){
    this.file = {url: this.url}
    console.log("Subject", this.subject)
    this.label = this.subject.getLiteral(vcard.fn)
    /*this.created = this.subject.getLiteral(dct.created)
    this.inbox = this.subject.getRef(ldp.inbox)
    this.wi = this.subject.getLiteral("https://holacratie.solid.community/public/holacratie#whatis")
    this.wsb = this.subject.getLiteral("https://holacratie.solid.community/public/holacratie#whatshouldbe")
    this.maker = this.subject.getRef(foaf.maker)

    this.roles = this.subject.getAllLiterals("http://www.w3.org/ns/org#memberOf")*/
      this.types = this.subject.getAllRefs(rdf.type)
    this.purpose = this.subject.getAllLiterals("http://www.w3.org/ns/org#purpose")

  }
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
