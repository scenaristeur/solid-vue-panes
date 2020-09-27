<template>
  <div class="modele-view container">
    <h3>{{ details.label}}</h3>

    <b>What Is :</b> {{details.wi}}<br>
    <b>What should be :</b> {{ details.wsb}}<br>

    <Domains :domains="details.domains" />



    <Toolbar :item="details" />
    created  {{ details.created}}<br>
      <!--
    <small> {{ details.types}} </small><br>

    Tension : {{ tension.name }}, {{tension.url}}<br>
    maker {{details.maker}}<br>
    inbox {{ details.inbox}}<br>
    roles {{ details.roles}} <br>
  -->
</div>
</template>

<script>
// @ is an alias to /src


// @ is an alias to /src
import TensionMixin from '@/mixins/TensionMixin'

export default {
  name: 'TensionItem',
  mixins: [TensionMixin],
  components: {
    'Toolbar': () => import('@/views/tension/Toolbar'),
    'Domains': () => import('@/components/basic/Domains'),
  },
  props: ['tension'],
  data: function () {
    return {
      details:{}
    }
  },
  async created(){
    this.currentWorkspace = this.$store.state.workspaces.currentWorkspace
        if (this.currentWorkspace.path != undefined){
    await  this.updateTension(this.tension)
  }
  },
  watch: {
  /*  async  tension () {
      await  this.updateTension(this.tension)
    },*/
  },

  methods: {
    async updateTension(t){
      console.log("updateTension")
      if (t != undefined){
        this.details = await this.getTensionDetail(t)
      }
    }
  },
  computed:{
  /*  config: {
      get: function() { return this.$store.state.gouvernance.config},
      set: function() {}
    },*/
    currentWorkspace: {
      get: function() { return this.$store.state.workspaces.currentWorkspace},
      set: function() {}
    },
  }
}
</script>
