<template>
  <div class="editor">

    <div v-if="webId != null">
      <div>
        <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
          <b-button-group size="sm" class="mr-1">
            <b-button size="sm" @click="clean">New</b-button>
            <b-button size="sm" disabled>Edit</b-button>
            <b-button size="sm" disabled>Undo</b-button>
          </b-button-group>
          <b-dropdown size="sm" class="mr-1" right text="menu">
            <b-dropdown-item size="sm">Item 1</b-dropdown-item>
            <b-dropdown-item size="sm">Item 2</b-dropdown-item>
            <b-dropdown-item size="sm">Item 3</b-dropdown-item>
          </b-dropdown>
          <b-button-group size="sm" class="mr-1">
            <b-button size="sm" variant="warning" v-b-modal.modal-1>Save</b-button>
            <!--<b-button size="sm" variant="warning" disabled @click="save_as">Save as...</b-button>-->
            <!--  <b-button size="sm">Cancel</b-button>-->

            <b-modal id="modal-1" title="Save" @show="fill" @ok="save">
              <!-- <p class="my-4">Hello from modal!</p>-->
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
  v-model="content"
  placeholder="Enter something..."
  rows="3"
  max-rows="15"
  @change="change"
  @input="input">
</b-form-textarea>

<!--  File : {{ file }}  disabled -->

<!--  <pre class="mt-3 mb-0">{{ file.content }}</pre>     File : {{ file }}<br>-->
</div>
</div>
<div v-else>
  <SolidLoginButton />
</div>


</div>
</template>

<script>
import auth from 'solid-auth-client';
export default {
  //  store,

  name: 'Editor',
  components: {
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton')
  },
  data: function () {
    return {
      name: "",
      type: "",
      path: "",
      content:{}
      //  storage: "",
      //folder: {}
    }
  },

created() {
  const SolidFileClient = window.SolidFileClient
  console.log("SFC", SolidFileClient)
  this.fc = new SolidFileClient(auth)
  this.file = this.$route.params.file
  console.log(this.file)
  this.path = this.file.url
  this.updateFile()
},
watch: {
  '$route' (to) {

    //  '$route' (to, from) {
    this.file = to.params.file
    this.path = this.file.url
    this.updateFile()
  }
},
methods:{
  async updateFile(){
    this.content = await this.fc.readFile(this.path)
  },
  clean(){
    this.text=""
    let f = {name: "new_file.txt", type: "text/plain", parent: this.folder.url || this.storage}
    this.$store.commit('solid/setFile', f)
    this.$store.commit('solid/setContent', "" )
  },
  change(e){
    console.log("change",e)
  },
  input(e){
    console.log("input",e)
  },
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
  }

},
computed:{
  webId(){
    return this.$store.state.solid.webId
  },
}

/*  async   created(){
    this.name = "new_file.txt"
    this.type = "text/plain"
    this.path = this.storage
    //  this.solid= window.solid
    //  this.webId =
    //  this.fc = new SolidFileClient(auth)
    //  example     await solid.data.from(this.fileUrl)[index]['http://www.w3.org/2005/01/wf/flow#message'].set(namedNode(messUri))

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
    input(e){
      console.log("input",e)
    },
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

},  async   created(){
    this.name = "new_file.txt"
    this.type = "text/plain"
    this.path = this.storage
    //  this.solid= window.solid
    //  this.webId =
    //  this.fc = new SolidFileClient(auth)
    //  example     await solid.data.from(this.fileUrl)[index]['http://www.w3.org/2005/01/wf/flow#message'].set(namedNode(messUri))

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
    input(e){
      console.log("input",e)
    },
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

},*/
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
