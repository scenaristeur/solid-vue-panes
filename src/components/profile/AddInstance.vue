<template>
  <div class="add-instance">
    <b-container fluid>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="name">Instance Name:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="name" type="text" v-model="name" placeholder="Name of the instance"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="path">Path:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="path" type="text" v-model="path" placeholder="Path to the instance folder"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label typefor="type">Type:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="type"  v-model="type" type="text" placeholder="http://www.w3.org/ns/pim/meeting#LongChat"></b-form-input>
        </b-col>
      </b-row>
      <div>!! Don't forget to grant 'Everyone' to 'Posters' !!</div>
      <b-button @click="add" variant="info">Add</b-button>

    </b-container>
    <!--
    <b-form-group class="container">
    <label for="name">Chat Channel Name</label>
    <b-form-input id="name" v-model="name" :placeholder="'ex: '+name"></b-form-input>
    <div class="mt-2">Value: {{ name }}</div>
    <label for="url">Chat Channel url</label>
    <b-form-input id="url" v-model="path" :placeholder="'ex: '+path"></b-form-input>
    <div class="mt-2">Value: {{ path }}</div>
    <b-button @click="add" disabled>Add (WIP, don't touch, not ready)</b-button>
  </b-form-group>-->
</div>
</template>

<script>
// @ is an alias to /src
import profileMixin from '@/mixins/profileMixin'
import aclMixin from '@/mixins/aclMixin'
const SolidFileClient = window.SolidFileClient
import auth from 'solid-auth-client';
console.log("SFC", SolidFileClient)
const fc = new SolidFileClient(auth)

export default {
  name: 'AddInstance',
  mixins: [profileMixin, aclMixin],
  data() {
    return {
      name: "Instance Name",
      type: 'http://www.w3.org/ns/pim/meeting#LongChat',
    }
  },
  created(){
    //this.storage = this.$store.state.solid.storage
  },
  methods:{
    async add(){
      this.name =  this.name.split(' ').join('_');
      let fullpath  =  this.path.endsWith('/') ? this.path+this.name+"/" : this.path+"/"+this.name+"/"

      await fc.createFolder(fullpath).then((res) => {
        console.log(res)
      })
      await this.addIndex(this.fullpath, this.type, this.name)
      console.log("index added")
      let indexes  = await this.getIndexes(this.webId)
      this.$store.commit('solid/setIndexes', indexes)

      await this.readPublicAccess(fullpath)
      let pattern = { read: true, append: true, write: false, control: false }
      await this.setPublicAccess(fullpath, pattern)
      //this.options.push({ value: this.path, text: this.name })
      //    this.selected = this.path
      //  this.path = this.$store.state.solid.storage+"public/Chat"
      //  this.name = "Chat"
    }
  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    },
    storage(){
      return this.$store.state.solid.storage
    },
    path(){
      return   this.storage+"public/Chat/"
    }
  }
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
}
</script>
