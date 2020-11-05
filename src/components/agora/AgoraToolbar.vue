<template>
  <div class="modele-view">

    <b-button-toolbar key-nav aria-label="Toolbar with button groups">
      <b-button-group class="mx-1" size="sm">
        <b-button  v-bind:to="{ name: 'View', params: { url: url }}" variant="outline-info">View  <b-icon icon="eye" aria-hidden="true" variant="info"></b-icon> </b-button>
        <b-button variant="outline" v-if="navigator_share" @click="openShareDialog"> Share <b-icon icon="share" variant="info"></b-icon></b-button>

        <!--    <b-button variant="outline" v-bind:to="{ name: 'View', params: { url: url }}">View <b-icon icon="eye" aria-hidden="true" variant="info"></b-icon> </b-button>
        <b-button variant="outline"  v-bind:to="{ name: 'TensionEdit', params: { tension: url }}">Edit <b-icon icon="pen" aria-hidden="true" variant="info"></b-icon> </b-button>
        <b-button variant="outline" v-if="navigator_share" @click="openShareDialog"> Share <b-icon icon="share" variant="info"></b-icon></b-button>
        <b-button variant="outline"  to="/groups">Create Group <b-icon icon="people" variant="info"></b-icon></b-button>
        <b-button variant="outline"  to="/storage">Fork <b-icon icon="back" variant="info"></b-icon></b-button>
        <b-button variant="outline"  v-bind:to="{ name: 'Parle', params: { url: url }}">Parle <b-icon icon="chat-text-fill" variant="info"></b-icon></b-button>
      -->       <!--<b-button variant="outline"  to="/tensions">Fork <b-icon icon="list" variant="info"></b-icon></b-button>-->
    </b-button-group>
  </b-button-toolbar>

</div>
</template>

<script>

//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'AgoraToolbar',
props:['url'],
data() {
  return {
    navigator_share : navigator && navigator.share
  }
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
      title: this.label,
      text: 'This could interest you : ',
      url: 'https://scenaristeur.github.io/solid-vue-panes/view/?url='+this.url,
    })
    .then(() => console.log('Successful share'))
    .catch(error => console.log('Error sharing', error));
  },
},
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
