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
      //  path: "",
      //  tensions:[]
    }
  },
  async created(){
  //  console.log("tension",this.tension)
    await  this.updateTension(this.tension)

  },
  watch: {
    async  tension () {
    //  console.log(t)
      await  this.updateTension(this.tension)
    },
  },

  methods: {
    async updateTension(t){
      console.log("updateTension")
      if (t != undefined){
        this.details = await this.getTensionDetail(t)
      //  console.log(this.details)
      }

    }
  },
  computed:{
    config: {
      get: function() { return this.$store.state.gouvernance.config},
      set: function() {}
    },
  }
}
</script>
