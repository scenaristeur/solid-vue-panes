<template>
  <div class="organization-new container">
    <h5>ShapeList</h5>

    <b-card-group deck>
      <CrudCard v-for="shape in folder.files" :key="shape.name" :shape="shape"/>
    </b-card-group>

    <CrudConfig :path="config.path" />

  </div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'

import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )

export default {
  name: 'OrganizationNew',
  //mixins: [profileMixin],
  components: {
    'CrudCard': () => import('@/components/crud-shape/CrudCard'),
    'CrudConfig': () => import('@/components/crud-shape/CrudConfig'),
  },
  props: ['config'],
  data: function () {
    return {
      folder:{}
      //  webId: {},
      //  friends: [],
    }
  },
  async created() {
    this.folder = await fc.readFolder(this.config.folder)
    console.log("FOLDER",this.folder)
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
