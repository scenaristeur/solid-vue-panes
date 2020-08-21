<template>
  <div class="shape-upload">
    <h5>{{ $options.name }}</h5>

    <!-- Styled -->
    <b-form-file
    v-model="file"
    accept=".shex"
    :state="Boolean(file)"
    placeholder="Choose a shex file or drop it here..."
    drop-placeholder="Drop file here..."
    ></b-form-file>



    <div class="brute">
      currentShape : {{ currentShape }}
      <hr>
    </div>

  </div>
</template>

<script>
import ShexMixin from '@/mixins/crud/ShexMixin.js'
//  import componentName from '@/components/componentName.vue'

export default {
  name: 'ShapeUpload',
    mixins: [ShexMixin],
  components: {
    //  componentName
  },
  props: {

  },

  data: function () {
    return {
      file: null,
      //  currentShape: {id:"Loading Shape..."},
      /*  currentShape: "",
      shapes: [],*/
    }
  },
  watch:{
    file(f){
      console.log(f)
      const reader = new FileReader()
      reader.onload = this.handleFileLoad;
      reader.readAsText(f)

      console.log("loaded")

    }
  },
  methods: {
    handleFileLoad(loadedFile){
      console.log(loadedFile)
      let content = loadedFile.target.result
      //https://github.com/shexSpec/shex.js/issues/75
      this.load_raw_schema(content)
    },
    handleFileLoad1(event){
      console.log(event);
      console.log(event.target.result)
      window.shexLoader.load([event.target.result], [], [], []).then(loaded => {
        if (loaded.schema){
          console.log("LOADED",loaded.schema)
          //  store.commit('crud/increment')

          //  console.log(store.state.local.count)
          //  store.commit('crud/setSchema',loaded.schema)
          //console.log(store.state.local.schema)
          //app.schema = JSON.stringify(loaded.schema);
          //  app.splitSchema(loaded.schema)
        }
      }, err => {
        console.log("erreur ",err)
        alert(err.message)

      }
    );
    //  document.getElementById('fileContent').textContent = event.target.result;
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
