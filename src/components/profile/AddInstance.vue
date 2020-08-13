<template>
  <div class="add-instance">
    <b-container fluid>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="name">Instance Name:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="name" type="text" v-model="name"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="path">Path:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="path" type="text" v-model="path"></b-form-input>
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
      <b-button @click="add" >Add</b-button>

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

export default {
  name: 'AddInstance',
  mixins: [profileMixin],
  data() {
    return {
      name: "",
      path: "https://spoggy-test.solid.community/public/Chat/",
      type: 'http://www.w3.org/ns/pim/meeting#LongChat'
    }
  },
  methods:{
    async add(){
      await this.addIndex(this.path, this.type, this.name, this.webId)
      console.log("index added")
      let indexes  = await this.getIndexes(this.webId)
      this.$store.commit('solid/setIndexes', indexes)
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
  }
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
}
</script>
