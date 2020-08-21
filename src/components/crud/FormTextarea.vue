<template>
  <div class="form-textarea">

    <b-textarea value="" @change="updateValue"></b-textarea>


    <!--
    <b-input-group size="lg">
    <b-form-input></b-form-input>
  </b-input-group>
-->
<div class="brute-hide">
  <h5>{{ $options.name }}</h5>
  nodeKind : {{ nodeKind }}<br>
  datatype:   {{ datatype }}
</div>

</div>
</template>

<script>

//  import componentName from '@/components/componentName.vue'

export default {
  name: 'FormTextArea',
  components: {
    //  componentName
  },
  props: {
    nodeKind: String,
    predicate: String,
    datatype: String,
  },

  data: function () {
    return {
      //predicate: String
      /*  currentShape: "",
      shapes: [],*/
    }
  },
  computed: {
    currentShape () {
      return this.$store.state.crud.currentShape
    }
  },
  methods: {
    updateValue (value) {
      console.log(value, this.currentShape, this.predicate)
      let data = {shape: this.currentShape, predicate: this.predicate, value: value, datatype: this.datatype}
      this.$store.commit('crud/fillForm', data)

    }
  },
}
</script>
