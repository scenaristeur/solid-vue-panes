<template>
  <div class="browser">
    <b-list-group>
      <b-list-group-item
      v-if="folder.parent != 'https://'"
      class="item"
      @click="goUp()">
      <b-icon-arrow-up></b-icon-arrow-up>
    </b-list-group-item>

    <b-list-group-item
    class="item"
    v-for="fo in folder.folders"
    :key="fo.name"
    @click="selected(fo)">
    <b-icon-folder></b-icon-folder>
    {{ fo.name }}
  </b-list-group-item>
</b-list-group>

<b-list-group>
  <b-list-group-item
  class="item"
  v-for="fi in folder.files"
  :key="fi.name"
  @click="selected(fi)">
  <b-icon-file></b-icon-file> {{ fi.name }}
</b-list-group-item>
</b-list-group>
</div>
</template>

<script>

export default {
  name: 'Browser',
  methods: {
    selected(item){
      item.type == "folder" ?   this.$store.dispatch('solid/updateFolder', item.url) : this.$store.dispatch('solid/updateFile', item)
    },
    goUp(){
      this.$store.dispatch('solid/updateFolder', this.folder.parent)
    }
  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    },
    storage(){
      return this.$store.state.solid.storage
    },
    folder(){
      return  this.$store.state.solid.folder
    }
  },
}
</script>
<style>
.item {
  text-align: left;
}
</style>
