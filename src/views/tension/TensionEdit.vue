<template>
  <div class="tension-view">

    <p>A tension is a difference between what is and what should be</p>
    <b-container>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-none">Name:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input v-model="tension.label" placeholder="Name"></b-form-input> <!-- :state="true" -->
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-none">What is:</label>
        </b-col>
        <b-col sm="9">
          <b-form-textarea
          id="wi"
          v-model="tension.wi" placeholder="What is"
          rows="3"
          max-rows="6"
          ></b-form-textarea>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-none">What should be:</label>
        </b-col>
        <b-col sm="9">
          <b-form-textarea
          id="wsb"
          v-model="tension.wsb" placeholder="What should be"
          rows="3"
          max-rows="6"
          ></b-form-textarea>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-none">In which role do you feel this tension:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input v-model="tension.roles" placeholder="Role (citizen, user of some service...)"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-none">Which domains does this tension apply:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input v-model="tension.domains" placeholder="society, economy, ecology, decentralization..."></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="radio-privacy">Privacy:</label>
        </b-col>
        <b-col sm="9">
          <b-form-group>
            <b-form-radio-group id="radio-privacy" v-model="tension.privacy" name="radio-privacy">
              <b-form-radio value="public">Public</b-form-radio>
              <b-form-radio value="private" disabled>Private</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-button @click="create">Save</b-button>
      </b-row>

    </b-container>
    path : {{ this.path }} [ change path button]
    TensionEdit
  </div>
</template>

<script>
// @ is an alias to /src
import TensionMixin from '@/mixins/TensionMixin'

export default {
  name: 'TensionEdit',
  mixins: [TensionMixin],
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
data: function () {
  return {
    path: "",
  }
},
created(){
  this.storage = this.$store.state.solid.storage
  this.path = this.storage+"gouvernance/tensions/"
  console.log("route",this.$route)
  if (this.$route.params.tension != undefined ){
    this.fillForm(this.$route.params.tension)
  }

},

methods: {
  create(){
    this.createTension()
  },
  fillForm(t){
    t.privacy = "public"
    this.tension = t
    this.tension.roles = this.tension.roles.join(', ')
    this.tension.domains = this.tension.domains.join(', ')

  }
},
watch: {
  '$route' (to) {
    //  '$route' (to, from) {
    console.log("route to",to)
    if (this.$route.params.tension != undefined ){
      this.fillForm(this.$route.params.tension)
    }

  }
},
computed:{
  config: {
    get: function() { return this.$store.state.gouvernance.config},
    set: function() {}
  },
}
}
</script>
