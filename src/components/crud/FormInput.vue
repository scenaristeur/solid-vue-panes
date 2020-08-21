<template>
  <div class="form-input">
    <div  v-if="type == 'webid'">

      <b-input-group prepend="webid" class="mt-3">
        <b-form-input :value="value" @change="updateValue"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-success">Me</b-button>
          <b-button variant="info">Friends</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <div v-else>
      <b-input-group size="lg" >
        <b-form-input size="lg" @input="updateValue"
        :id="`type-${type}`" :type="type" :placeholder="placeholder" :value="value" ></b-form-input><br>
      </b-input-group>
      <small>{{this.valueExpr.datatype}}</small>
    </div>

    <div class="brute-hide">
      <h5>{{ $options.name }}</h5>
      valueExpr : {{ valueExpr }}<br>
      datatype : {{ datatype }}<br>
      currentData: {{ currentData}}
    </div>

  </div>
</template>

<script>

//  import componentName from '@/components/componentName.vue'

export default {
  name: 'FormInput',
  props: {
    valueExpr: Object,
    predicate: String,
    datatype: String
  },
  methods: {
    updateValue (value) {
      console.log(value, this.currentShape, this.predicate)
      let data = {shape: this.currentShape, predicate: this.predicate, value: value, datatype: this.datatype}
      this.$store.commit('crud/fillForm', data)
      //  this.fill(this.currentShape, this.predicate, value, this.datatype)
      //this.$store.commit('updateValue', e.target.value)
    }
  },
  data: function () {
    return {
      placeholder : "",
      value: "",
      types: [
        'text',
        'number',
        'email',
        'password',
        'search',
        'url',
        'tel',
        'date',
        'time',
        'range',
        'color'
      ]
    }
  },
  computed: {
    type () {
      let t = "text"
      switch (this.valueExpr.datatype) {
        case "http://www.w3.org/2001/XMLSchema#date": {
          //https://eslint.org/docs/rules/no-case-declarations
        //  case "http://www.w3.org/2001/XMLSchema#dateTime":
        t ="date"
        var local = new Date();
        local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
        let value =local.toJSON().slice(0,10);
        let data = {shape: this.currentShape, predicate: this.predicate, value: value, datatype: this.datatype}
        this.$store.commit('crud/fillForm', data)
        break;
      }
        case "http://www.w3.org/2001/XMLSchema#string":
        t = "text"
        //  this.placeholder = "boo"
        break;
        case "http://www.w3.org/2001/XMLSchema#integer":
        t = "number"
        break;
        case "http://www.w3.org/ns/solid/terms#webid":
        t = "webid"
        break;
        case "http://www.w3.org/2001/XMLSchema#dateTime":
        t = "datetime-local"
        break;
        default:
        console.log("TODO DATATYPE: ",this.valueExpr.datatype, this.types)
        t = "text"

      }
      return t
    },
    currentShape () {
      return this.$store.state.crud.currentShape
    },
    currentData () { // doesnot update ??
      return this.$store.state.crud.formData
    },
  }
}
</script>
