<template>
  <div class="pod container mb-5">

    <b-list-group>
      <b-list-group-item class="item mb-2 mt-2">
        {{ folder.url }} <!--<b-icon-upload></b-icon-upload>-->
      </b-list-group-item>

      <b-list-group-item
      v-if="folder.parent != 'https://'"
      class="item mt-2"
      v-bind:to="{ name: 'Pod', params: { path: folder.parent }}">
      <b>..</b><!--  <b-icon-arrow-up></b-icon-arrow-up>  {{ folder.parent }}-->
    </b-list-group-item>


    <b-list-group-item
    class="item"
    v-for="fo in folder.folders"
    :key="fo.url"
    v-bind:to="{ name: 'Pod', params: { path: fo.url }}">
    <b-icon-folder></b-icon-folder>
    {{ fo.name }}
  </b-list-group-item>
</b-list-group>

<b-list-group>
  <b-list-group-item
  class="d-flex align-items-center"
  v-for="fi in folder.files"
  :key="fi.name"
  v-bind:to="{ name: 'File', params: { file: fi }}">

  <div class="mr-auto">
    <b-icon-file></b-icon-file> {{ fi.name }}
  </div>
  <div class="col">
    {{ fi.size }} ko
  </div>
  <div class="col">
    {{ fi.type }}
  </div>
  <div class="col">
    {{ fi.modified.toLocaleString()}}
  </div>


</b-list-group-item>
</b-list-group>


</div>
</template>

<script>
// @ is an alias to /src
import auth from 'solid-auth-client';

export default {
  name: 'Pod',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
data: function () {
  return {
    //  webId: {},
    path:"",
    folder:{}
  }
},
created() {
  const SolidFileClient = window.SolidFileClient
  console.log("SFC", SolidFileClient)
  this.fc = new SolidFileClient(auth)
  this.path = this.$route.params.path || this.$store.state.solid.storage
  this.updatePod()
},
watch: {
  '$route' (to) {
    //  '$route' (to, from) {
    this.path = to.params.path || this.$store.state.solid.storage
    this.updatePod()
  }
},
methods:{
  async updatePod(){
    this.folder = await this.fc.readFolder(this.path)
  },
}
}
</script>
<style>
.item {
  text-align: left;
}
</style>
