<template>
  <div class="editor">

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
          <b-button size="sm" variant="warning" disabled @click="save">Save</b-button>
            <b-button size="sm" variant="warning" disabled @click="save_as">Save as...</b-button>
        <!--  <b-button size="sm">Cancel</b-button>-->
        </b-button-group>
      </b-button-toolbar>
    </div>

    <div>
      <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="3"
      max-rows="15"
      @change="change"
      @input="input"

      ></b-form-textarea>
      <!--    disabled -->

      <!--  <pre class="mt-3 mb-0">{{ file.content }}</pre>     File : {{ file }}<br>-->
    </div>


  </div>
</template>

<script>

export default {
  //  store,

  name: 'Browser',
  components: {

  },
  data: function () {
    return {
      //  storage: "",
      //folder: {}
    }
  },
  async   created(){
    //  this.solid= window.solid
    //  this.webId =
    //  this.fc = new SolidFileClient(auth)
    //  example     await solid.data.from(this.fileUrl)[index]['http://www.w3.org/2005/01/wf/flow#message'].set(namedNode(messUri))

  },
  methods: {
    clean(){
      this.text=""
    },
    change(e){
      console.log("change",e)
    },
      input(e){
          console.log("input",e)
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
      }

},
watch: {
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
