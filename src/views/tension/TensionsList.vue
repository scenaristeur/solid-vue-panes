<template>
  <div class="modele-view container">
    <!--  <Component /> -->

    <b-list-group>
      <b-list-group-item v-for="t in tensions" :key="t.url">
        <TensionItem :tension="t" />
      </b-list-group-item>
    </b-list-group>
    path : {{ path }}
  </div>
</template>

<script>
// @ is an alias to /src


// @ is an alias to /src
import TensionMixin from '@/mixins/TensionMixin'

export default {
  name: 'TensionsList',
  mixins: [TensionMixin],
  components: {
    'TensionItem': () => import('@/views/tension/TensionItem'),
  },
  data: function () {
    return {
      path: "",
      tensions:[]
    }
  },
  async created(){
    this.path = this.config.workspace+"tensions/"
    this.tensions = await this.getTensions()
    console.log(this.tensions)
  },

  methods: {
  },
  computed:{
    config: {
      get: function() { return this.$store.state.gouvernance.config},
      set: function() {}
    },
  }
}
</script>
