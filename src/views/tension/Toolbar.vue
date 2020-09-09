<template>
  <div class="modele-view">
    <b-button-toolbar key-nav aria-label="Toolbar with button groups">
      <b-button-group class="mx-1" size="sm">
        <b-button variant="outline" v-bind:to="{ name: 'View', params: { url: item.url }}">View <b-icon icon="eye" aria-hidden="true" variant="info"></b-icon> </b-button>
        <b-button variant="outline"  v-bind:to="{ name: 'TensionEdit', params: { tension: item }}">Edit <b-icon icon="plus-square" aria-hidden="true" variant="info"></b-icon> </b-button>
        <b-button variant="outline"  @click="openShareDialog"> Share <b-icon icon="list" variant="info"></b-icon></b-button>
        <b-button variant="outline"  to="/tensions">Create Group <b-icon icon="list" variant="info"></b-icon></b-button>
      </b-button-group><br>
      <small>item {{ item.url}}</small>
    </b-button-toolbar>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Toolbar',
  props: ['item'],
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
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
