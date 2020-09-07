<template>
  <div class="form-select">

    <div>
      <b-form-select v-model="selected" :options="options"></b-form-select>
      <b-button v-if="source" variant="secondary" @click="switchShape">New {{ this.localname(source) }}</b-button>
    </div>
    <div class="brute d-none">
      <h5>{{ $options.name }}</h5>

      <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
      folder: {{ folder }}
      source : {{ source }}<br>
      options : {{ options }}<br>
      values : {{ values}}<br>
      datatype :   {{ datatype }}
      <!--          <DebugProperties :object="values" />-->
    </div>

  </div>
</template>

<script>
//import DebugProperties from '@/components/DebugProperties.vue'
import SolidMixin from '@/mixins/crud/SolidMixin.js'
import UtilMixin from '@/mixins/crud/UtilMixin.js'


export default {
  name: 'FormSelect',
  mixins: [SolidMixin, UtilMixin],
  components: {
  //  DebugProperties

  },
  props: {
    source: String,
    values: Array,
    predicate: String,
    datatype: String
  },

  data: function () {
    return {
      selected: null,
      options: [ ],
      folder: {}
    }
  },
  async mounted(){
    if(this.values != undefined){
      console.log("VALUES CJ", this.values)
      this.values.forEach((v) => {
        v = v.value != null ? v.value : v
        let o = {value:v , text:this.localname(v)}
        console.log("o",o)
        this.options.push(o)
        console.log("opts1",this.options)
      });
      console.log("opts2",this.options)
    }

    console.log("SOURCE : ",this.source)

    if(this.source != undefined &&  await this.fc.itemExists(this.source)) {
      await this.fc.readFolder(this.source).then(folder => {
        console.log("Folder",folder.folders)
        //  store.commit('crud/setShapeUrl', this.shape_url)
        this.folder = folder
      },
      err => { console.log("erreur for url : ", this.source,err) })
    }


    /*  let folder = await this.readFolder(this.source)
    let f = `${folder}`
    console.log("FOOOOOOOLDEEEERRRRR", this.source, f)*/
  },
  methods:{
    switchShape(){

      this.$store.commit('crud/setCurrentShape', this.source)

      console.log("SWITCHTO",this.source)
    }
  },
  watch : {
    selected(value){
      console.log(value, this.currentShape, this.predicate)
      let data = {shape: this.currentShape, predicate: this.predicate, value: value, datatype: this.datatype}
      this.$store.commit('crud/fillForm', data)
      //  this.fill(this.currentShape, this.predicate, value, "selectForm")
    },
    folder(folder){
      console.log("FOLDERS, FILES",folder.folders)
      console.log()
      folder.folders.forEach((f) => {
        console.log(f.name, f.url)

        let o = {value:f.url , text:f.name}
        console.log("o",o)
        this.options.push(o)
        console.log("opts1",this.options)
      });
    }
  },
  computed: {
    currentShape () {
      return this.$store.state.crud.currentShape
    }
  },
}
</script>
