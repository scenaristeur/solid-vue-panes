<template>
  <div class="modele-view">
    tension view details
    <!--  <Component /> -->
    <h3>{{ details.label}}</h3>
    <Toolbar :item="details" />
    What Is : {{details.wi}}<br>
    What should be : {{ details.wsb}}<br>
    domains {{ details.domains}}<br>

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
import TensionMixin from '@/mixins/TensionMixin'


export default {
  name: 'TensionDetail',
    mixins: [TensionMixin],
  components: {
    'Toolbar': () => import('@/views/tension/Toolbar'),
  },
  data: function () {
    return {
      details:{}
      //  path: "",
      //  tensions:[]
    }
  },
  async created(){

    if (this.$route.params.details != undefined ){
      console.log("route",this.$route)
      this.details = this.$route.params.details
    }else if (this.$route.query.url != undefined ){
      console.log("URL",this.$route.query.url)
let t = {url: this.$route.query.url}
      this.details = await this.getTensionDetail(t)
    }

  },
  watch: {
    '$route' (to) {
      //  '$route' (to, from) {
      console.log("route to",to)
      this.details = to.params.details // || this.storage+"public/groups/"
      console.log(this.details)
      //  console.log(this.url)
      //  this.initGroups(to.params.url)
      //  this.updateFriends()
      //  this.updateIndexes()
    }
  },
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
