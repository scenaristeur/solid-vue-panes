<template>
  <div class="modele container">
    <h5>{{ $options.name }}</h5>
    <!-- <componentName :attribut="property"/> -->

    <div class="row">
      <b-form-input></b-form-input>
      <b-form-select class="col-md-3" v-model="where" :options="where_options"></b-form-select>
      <b-form-select class="col-md-3" v-model="format" :options="format_options"></b-form-select>

      <b-button class="col" @click="view" variant="outline-success" disabled>View</b-button>
      <b-button class="col" @click="save" variant="success">Save</b-button>
    </div>

  <div class="brute">
    attribut : {{ attribut }}
    <hr>
  </div>

</div>
</template>

<script>
//  import componentName from '@/components/componentName.vue'

export default {
  name: 'SaveParameters',
  components: {
    //  componentName
  },
  props: {
    attribut: String
  },
  methods: {
    save() {

    },
    view(){

    }
  },
  data() {
    return {
      where: "holacratie",
      format: "ttl",
      where_options: [
        { value: null, text: '-- Where --', disabled: true },
        { value: 'local', text: 'Download locally', disabled: false },
        { value: 'pod', text: 'My POD', disabled: false },
        { value: "holacratie", text: 'Holacratie POD', disabled: false },
        { value: "outbox", text: 'ActivityStreams Outbox', disabled: true },
        { value: 'friends', text: 'Friends or other POD', disabled: true },
        { value: 'endpoint', text: 'Endpoint / Api', disabled: true }
      ],
      format_options: [
        { value: null, text: '-- Format --', disabled: true },
        { value: "ttl", text: 'Turtle', disabled: false },
        { value: 'as', text: 'ActivityStreams', disabled: false },
        { value: 'json', text: 'JSON', disabled: false },
      ],

      /* <!--<b-dropdown-item>.json</b-dropdown-item>
      <b-dropdown-item>activity stream (json)</b-dropdown-item>
      <b-dropdown-item>activity stream in your outbox</b-dropdown-item>
      <b-dropdown-item>On my POD</b-dropdown-item>
      <b-dropdown-item>On holacratie POD</b-dropdown-item>
      <b-dropdown-item>Other Pod</b-dropdown-item>
      <b-dropdown-item>Public</b-dropdown-item>
      <b-dropdown-item>Endpoint</b-dropdown-item>-->*/
    }
  },
  computed: {
    currentShape () {
      return this.$store.state.crud.currentShape
    }
  }
}
</script>

<style scoped>
.modele {
  background-color: var(--celeste);
}
</style>
