<template>
  <div class="browser">
    <div v-if="webId != null">
      <b-list-group>
        <b-list-group-item
        v-if="folder.parent != 'https://'"
        class="item"
        @click="goUp()">
        <b-icon-arrow-up></b-icon-arrow-up>   {{ folder.url }} <b-icon-upload></b-icon-upload>
      </b-list-group-item>
      <b-list-group-item v-else class="item">
        {{ storage }} <b-icon-upload></b-icon-upload>
      </b-list-group-item>

      <b-list-group-item
      class="item list-group-item d-flex justify-content-between"
      v-for="fo in folder.folders"
      :key="fo.name"
      @click="selected(fo)"
      @contextmenu.prevent="right(fo)"
      >
      <p class="p-0 m-0 flex-grow-1">  <b-icon-folder></b-icon-folder>
        {{ fo.name }}</p>
      <b-button size="sm" variant="outline-danger">
        <b-icon-trash @click.stop="trash(fo)" variant="danger"></b-icon-trash>
      </b-button>

    </b-list-group-item>
  </b-list-group>

  <b-list-group>
    <b-list-group-item
    class="item list-group-item d-flex justify-content-between"
    v-for="fi in folder.files"
    :key="fi.name"
    @click="selected(fi)"
    @contextmenu.prevent="right(fi)">

    <p class="p-0 m-0 flex-grow-1"><b-icon-file></b-icon-file> {{ fi.name }}</p>
    <b-button size="sm" variant="outline-danger">
      <b-icon-trash @click.stop="trash(fi)" variant="danger"></b-icon-trash>
    </b-button>

  </b-list-group-item>
</b-list-group>
</div>
<div v-else>
  <SolidLogin />
</div>


<b-modal id="context-menu" :title="contextTitle">
  <b-list-group>

    <b-input-group prepend="Rename">
      <b-form-input v-model="newName"></b-form-input>
    </b-input-group>

    <!--<b-list-group-item>Move</b-list-group-item>-->
    <!--<b-list-group-item><b-icon-trash @click="trash"></b-icon-trash></b-list-group-item>-->
    <!--  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
    <b-list-group-item>Vestibulum at eros</b-list-group-item>-->
  </b-list-group>
</b-modal>

<b-modal id="confirm-delete" title=" !!! Are you sure you want to delete ??? ">
  {{ currentItem.name }}
  <br>
  <small>
    {{ currentItem.url }}
  </small>
</b-modal>

</div>
</template>

<script>

export default {
  name: 'Browser',
  components: {
    'SolidLogin': () => import('@/components/solid/SolidLogin')
  },
  data: function () {
    return {
      contextTitle: "",
      currentItem: {},
      newName: "",
      deleteMessage: ""
      //  storage: "",
      //folder: {}
    }
  },
  methods: {
    selected(item){
      item.type == "folder" ?   this.$store.dispatch('solid/updateFolder', item.url) : this.$store.dispatch('solid/updateFile', item)
    },
    right(item){
      console.log("right",item)
      this.contextTitle = item.name
      this.newName = item.name
      this.$bvModal.show("context-menu")
      this.currentItem = item
    },
    trash(item){
      console.log(item)
      this.$bvModal.show("confirm-delete")
      this.currentItem = item
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
