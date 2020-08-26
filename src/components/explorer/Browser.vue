<template>
  <div class="browser">
    <div v-if="webId != null">
      <b-list-group>
        <b-list-group-item
        v-if="folder.parent != 'https://'"
        class="item"
        @click="updateFolder(folder.parent)">
        <b-icon-arrow-up></b-icon-arrow-up>   {{ folder.url }}
      </b-list-group-item>
      <b-list-group-item v-else class="item">
        {{ storage }}
      </b-list-group-item>

      <div>
        <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
          <b-button-group class="mx-1">
            <b-button title="New Folder" @click="init_folder"><b-icon-folder-plus></b-icon-folder-plus></b-button>
            <b-button title="Upload Files" @click="$refs.fileInput.$el.childNodes[0].click()"> <b-icon-files></b-icon-files></b-button>
            <b-button title="Upload Folder" @click="$refs.folderInput.$el.childNodes[0].click()"> <b-icon-folder-symlink></b-icon-folder-symlink></b-button>


            <!--  <b-button>Edit</b-button>
            <b-button>Undo</b-button>-->
          </b-button-group>
        </b-button-toolbar>

        <b-form-file
        ref="fileInput" style="display:none;"
        v-model="files"
        placeholder="upload files"
        drop-placeholder="Drop file here..."
        multiple
        ></b-form-file>

        <b-form-file
        ref="folderInput" style="display:none;"
        v-model="files"
        placeholder="Upload directory"
        drop-placeholder="Upoload directory"
        directory
        multiple
        ></b-form-file>
      </div>


      <b-list-group-item
      class="item list-group-item d-flex justify-content-between"
      v-for="fo in folder.folders"
      :key="fo.name"
      @click="selected(fo)"
      @contextmenu.prevent="right(fo)"
      >
      <p class="p-0 m-0 flex-grow-1">  <b-icon-folder2></b-icon-folder2>
        {{ fo.name }}</p>
        <b-button size="sm mr-2" variant="outline-primary">
          <b-icon-alt @click.stop="init_move(fo)" variant="primary"></b-icon-alt>
        </b-button>

        <b-button size="sm" variant="outline-danger">
          <b-icon-trash @click.stop="init_trash(fo)" variant="danger"></b-icon-trash>
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

      <p class="p-0 m-0 flex-grow-1"><b-icon-file-text></b-icon-file-text> {{ fi.name }}</p>
      <b-button size="sm mr-2" variant="outline-primary" disabled>
        <b-icon-download></b-icon-download>
      </b-button>
      <b-button size="sm mr-2" variant="outline-primary">
        <b-icon-alt @click.stop="init_move(fi)" variant="primary"></b-icon-alt>
      </b-button>
      <b-button size="sm" variant="outline-danger">
        <b-icon-trash @click.stop="init_trash(fi)" variant="danger"></b-icon-trash>
      </b-button>

    </b-list-group-item>
  </b-list-group>
</div>
<div v-else>
  <SolidLoginButton />
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

<b-modal id="confirm-trash" title="Trash" @ok="trash">
  Are you sure you want to delete
  <b-icon-trash variant="danger"></b-icon-trash>
  <b>{{ currentItem.name }}</b> ({{ currentItem.type }})
  <b-icon-trash variant="danger"></b-icon-trash> and all its content ?
  <br>
  <small>
    {{ currentItem.url }}
  </small>
</b-modal>

<b-modal id="move" title="Are you sure you want to move or rename" @ok="move">
  name : {{ currentItem.name }}
  <br>
  <small>
    {{ currentItem.url }}
  </small>
  <b-input-group size="sm" prepend="New location">
    <b-form-input v-model="new_location"></b-form-input>
  </b-input-group>
</b-modal>

<b-modal id="folder-modal" title="New Folder" @ok="createFolder">
  <b-input-group size="sm" prepend="New Folder">
    <b-form-input v-model="new_folder"></b-form-input>
  </b-input-group>
</b-modal>

</div>
</template>

<script>
import { deleteFile } from "@inrupt/solid-client";
import auth from 'solid-auth-client';
const SolidFileClient = window.SolidFileClient
const fc = new SolidFileClient(auth)

export default {
  name: 'Browser',
  components: {
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton')
  },
  data: function () {
    return {
      contextTitle: "",
      currentItem: {},
      newName: "",
      //  deleteMessage: "",
      new_location:"",
      new_folder:"",
      files:[],

      //  storage: "",
      //folder: {}
    }
  },
  watch: {
    async  files (files) {
      console.log(files)
      let folder = this.folder.url
      console.log(folder)
      await   files.forEach(async function(f, i)  {
        console.log(f,i)

        let uri = f.webkitRelativePath.length > 0 ? folder+f.webkitRelativePath : folder+f.name
        console.log(uri, f, f.type)
        await fc.createFile(uri, f, f.type)
      })
      this.updateFolder(this.folder.url)

    },
  },
  methods: {
    selected(item){
      item.type == "folder" ?   this.$store.dispatch('solid/updateFolder', item.url) : this.$store.dispatch('solid/updateFile', item)
    },
    init_folder(){

      this.$bvModal.show("folder-modal")
    },
    async createFolder(){
      console.log(this.new_folder)
      if (this.new_folder.length > 0){
        //  this.new_folder =  ! this.new_folder.endsWith("/") ? this.new_folder+"/" : this.new_folder
        let f = this.folder.url+this.new_folder
        console.log(f)
        if( !(await fc.itemExists(f)) ) {
          await fc.createFolder(f) // only create if it doesn't already exist
        }else{
          alert (f+" already exists")
        }
        this.updateFolder(this.folder.url)
      }else{
        alert("folder name can not be empty")
      }
    },
    right(item){
      console.log("right",item)
      this.contextTitle = item.name
      this.newName = item.name
      this.$bvModal.show("context-menu")
      this.currentItem = item
    },
    init_trash(item){
      console.log(item)
      this.$bvModal.show("confirm-trash")
      this.currentItem = item
    },
    init_move(item){
      console.log(item)
      this.$bvModal.show("move")
      this.currentItem = item
      this.new_location = item.url
    },
    async  move(){
      console.log("Move",this.currentItem.type, this.currentItem.url, "to", this.new_location)
      this.currentItem.type == "folder" ? await fc.move( this.currentItem.url, this.new_location ) : await fc.move( this.currentItem.url, this.new_location )
      this.updateFolder(this.folder.url)

    },
    async  trash(){
      console.log("Trash",this.currentItem.type,this.currentItem.url)
      if (this.currentItem.type != "folder"){
        await deleteFile(
          this.currentItem.url
        );
        console.log("File deleted !");
      }else{
        await  fc.deleteFolder(this.currentItem.url)
      }
      this.updateFolder(this.folder.url)
    },
    updateFolder(folder){
      this.$store.dispatch('solid/updateFolder', folder)
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
