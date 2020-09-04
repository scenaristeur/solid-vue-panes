<template>
  <div class="organization-new container">
    <h5>Orga new</h5>
    orga_new_shape_url : {{ shape_url }}
<ShapeCreate :shape_url="shape_url" />

</div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'OrganizationNew',
  //mixins: [profileMixin],
  components: {
    'ShapeCreate': () => import('@/components/crud-shape/ShapeCreate'),
  },
  props: ['shape_url'],
  data: function () {
    return {
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    storage (st) {
      //  '$route' (to, from) {
      console.log(st)
    }
  },
  methods:{
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
