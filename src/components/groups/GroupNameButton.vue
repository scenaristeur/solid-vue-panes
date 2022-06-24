<template>
  <div class="modele-view">
    <b-button variant="info" v-bind:to="{ name: 'Groups', params: { url: url }}">{{ name }}</b-button>
  </div>
</template>

<script>
import { vcard} from 'rdf-namespaces'

export default {
  name: 'GroupNameButton',
  props:['url'],
  data() {
    return {
      name:""
    }
  },
  created(){
    this.update()
  },
  methods: {
    async update(){
      let path = this.url.split("#")
      let groupDoc =    await this.$fc.readFile(path[0]);
      let gSubj = groupDoc.getSubject(this.url)
      this.name = gSubj.getString(vcard.fn)
    }
  },

  watch:{
    url(){
      this.update()
    }
  },

}
</script>
