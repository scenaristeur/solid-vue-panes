<template>
  <div class="modele-view">
    <b-button-toolbar key-nav aria-label="Toolbar with button groups">
      <b-button-group class="mx-1" size="sm">
        <b-button variant="outline-info" v-bind:to="{ name: 'View', params: { url: item.url }}">View <b-icon icon="eye" aria-hidden="true" variant="info"></b-icon> </b-button>
        <b-button variant="outline-info"  v-bind:to="{ name: 'TensionEdit', params: { url: item.url }}">Edit <b-icon icon="pen" aria-hidden="true" variant="info"></b-icon> </b-button>
        <b-button variant="outline-info"  @click="openShareDialog"> Share <b-icon icon="list" variant="info"></b-icon></b-button>




        <b-button variant="outline-info" v-if="item.actors == undefined || item.actors.length == 0" v-bind:to="{ name: 'GroupsTension', params: { tension: item.url }}">Create Group <b-icon icon="list" variant="info"></b-icon></b-button>
        <div v-else>
          <GroupNameButton v-for="actor in item.actors" :key="actor" :url="actor"/>
        </div>
    </b-button-group><br>
  <!--    <small>item {{ item.url}}</small>-->
    </b-button-toolbar>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Toolbar',
  props: ['item'],
  components: {
    'GroupNameButton': () => import('@/components/groups/GroupNameButton'),
  },
  methods: {
    async  openShareDialog() {
      if (navigator && navigator.share) {
        await this.shareNative();
      } else {
        //  await this.shareFallback();
      }
    },
    async shareNative(){
      window.navigator
      .share({
        title: this.item.label,
        text: 'This tension could interest you',
        url: 'https://scenaristeur.github.io/solid-vue-panes/tension/detail/?url='+this.item.url,
      })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error sharing', error));
    },


  }
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
