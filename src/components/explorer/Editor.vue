<template>
  <div class="editor">
    {{ url }}
    <div v-if="webId != null">
      <div>
        <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
          <b-button-group size="sm" class="mr-1">
            <b-button  @click="clean"><b-icon-file-plus></b-icon-file-plus> </b-button>
            <!--  <b-button size="sm" disabled>Edit</b-button>
            <b-button size="sm" disabled>Undo</b-button>-->
          </b-button-group>
          <!--    <b-dropdown size="sm" class="mr-1" right text="menu">
          <b-dropdown-item size="sm">Item 1</b-dropdown-item>
          <b-dropdown-item size="sm">Item 2</b-dropdown-item>
          <b-dropdown-item size="sm">Item 3</b-dropdown-item>
        </b-dropdown>-->
        <b-button-group size="sm" class="mr-1">
          <b-button size="sm" variant="warning" v-b-modal.modal-1>Save <b-icon-file-arrow-up></b-icon-file-arrow-up></b-button>
          <!--<b-button size="sm" variant="warning" disabled @click="save_as">Save as...</b-button>-->
          <!--  <b-button size="sm">Cancel</b-button>-->

          <b-modal id="modal-1" title="Save" @show="fill" @ok="save">
            <b-form-group
            label-cols-sm="3"
            label="Path:"
            label-align-sm="right"
            label-for="path">
            <b-form-input id="path" v-model="path"></b-form-input>
          </b-form-group>

          <b-form-group
          label-cols-sm="3"
          label="Filename:"
          label-align-sm="right"
          label-for="name">
          <b-form-input id="name" v-model="name"></b-form-input>
        </b-form-group>

        <b-form-group
        label-cols-sm="3"
        label="Mimetype:"
        label-align-sm="right"
        placeholder="text/plain ? text/turtle ? application/json ?"
        label-for="type">
        <b-form-input id="type" v-model="type"></b-form-input>
      </b-form-group>


    </b-modal>
  </b-button-group>
</b-button-toolbar>
</div>

<div>
  <b-form-textarea
  id="textarea"
  v-model="text"
  placeholder="Enter something, then click 'Save' button..."
  rows="3"
  max-rows="15"
  @change="change"
  >
</b-form-textarea>

<EditorTtl :file="file" />
<!-- <Crud />-->
</div>
</div>
<div v-else>
  <SolidLoginButton />
</div>


</div>
</template>

<script>

export default {
  //  store,

  name: 'Editor',
  components: {
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
    'EditorTtl': () => import('@/components/explorer/EditorTtl'),
    //  'Crud': () => import('@/components/crud/Crud')
  },
  data: function () {
    return {
      name: "",
      type: "",
      path: "",
      url: ""
    }
  },
  async   created(){
    this.url = this.$route.query.url
    if (this.url != undefined){
      console.log("created", this.url)
      this.updateFile()
    }else{
      this.name = "new_file.txt"
      this.type = "text/plain"
      this.path = this.storage
    }
  },
  methods: {
    clean(){
      this.text=""
      let f = {name: "new_file.txt", type: "text/plain", parent: this.folder.url || this.storage}
      this.$store.commit('solid/setFile', f)
      this.$store.commit('solid/setContent', "" )
    },
    change(e){
      console.log("change",e)
    },
    /*  input(e){
    console.log("input",e)
  },*/
  fill(){
    this.name = this.file.name
    this.type = this.file.type
    this.path = this.file.parent
  },
  save(){
    console.log("text", this.text)
    this.path =   this.path.endsWith("/") ? this.path : this.path+"/"
    console.log('File',this.type, this.path, this.name)
    let file = {path: this.path, name: this.name, content: this.text, contentType: this.type}
    this.$store.dispatch('solid/writeFile', file)
    this.$store.dispatch('solid/updateFolder', this.path)
  },
  updateFile(){

    let url_splitted = this.url.split('/')
    let name = url_splitted.pop()
    let parent = url_splitted.join('/')+"/"
    let type = "text/turtle"
    let file = {url: this.url, name: name, parent: parent, type: type}
    console.log(file)
    this.$store.dispatch('solid/updateFile', file)
    console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",this.name, this.path, this.type)
  }
  /*    selected(item){
  console.log(item)
  item.type == "folder" ?   this.$store.dispatch('solid/updateFolder', item.url) : this.openFile(item)
  //  this.folder =  this.$store.state.solid.folder
},
openFile(item){
console.log("Open",item.url)
},
goUp(){
console.log(this.folder)
this.$store.dispatch('solid/updateFolder', this.folder.parent)
}*/
/*  updateBrowser: async  function (){
this.folder = await this.fc.readFolder(this.storage)
console.log(this.folder)
}*/
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
  },
  file(){
    return  this.$store.state.solid.file
  },

  text: {
    get: function () {
      return this.$store.state.solid.content
    },
    set: function (text) {
      return this.$store.commit('solid/setContent', text)
    }
  },

},
watch: {
  url() {
    if(this.url != undefined){
      console.log("url", this.url)
      this.updateFile()
    }
  }
  // whenever question changes, this function will run
  /*  text: async function (text) {

  console.log(text)

}*/
},
}
</script>
<style>
.item {
  text-align: left;
}
#textarea {
  height: 100%;
}
</style>
