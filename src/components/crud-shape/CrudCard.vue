<template>
  <div class="crud-card">
    <b-card

    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2">
    <!--    img-src="https://picsum.photos/600/300/?image=25" -->
    <b-card-title>{{shape.name}}</b-card-title>
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>
    <CrudToolbar :shape="shape" />
    <!--<b-button href="#" variant="primary">Go somewhere</b-button>-->
    <small>
      shape.url : {{ shape.url }}
    </small>
  </b-card>
</div>
</template>

<script>
import ShexMixin from '@/mixins/crud/ShexMixin'

export default {
  name: 'CrudCard',
  mixins: [ShexMixin],
  components: {
    'CrudToolbar': () => import('@/components/crud-shape/CrudToolbar'),
  },
  props: ['shape'],
  data: function () {
    return {
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
  //  this.load_schema()
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    storage (st) {
      //  '$route' (to, from) {
      console.log(st)
    },
    shape(s){
      console.log("shape changed",s)
    //  this.load_schema()
    }

  },
  methods:{

    load_schema(){
      this.load_remote_schema(this.shape.url)
    }

    /*  async updateFriends(){
    this.friends = await this.getFriends(this.webId)
  }*/
},
computed:{
  storage(){
    return this.$store.state.solid.storage
  }
}
}
</script>
