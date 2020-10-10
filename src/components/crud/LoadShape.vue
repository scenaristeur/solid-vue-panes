<template>
  <div class="load-shape">

    <!--currentShape : {{ currentShape.id }}<br>-->
    <FormTab />

    <div class="brute-hide">
      shape_url : {{ shape_url }}<br>
      currentShape : {{ currentShape }}<br>
    </div>
  </div>
</template>


<script>
import ShexMixin from '@/mixins/crud/ShexMixin.js'
//import FormTab from '@/components/crud/FormTab.vue'

console.log("shexCore", window.shexCore)
console.log("shexLoader", window.shexLoader)

console.log("ShExJison", window.ShExJison)


export default {
  name: 'LoadShape',
  mixins: [ShexMixin],
  components: {
      'FormTab': () => import('@/components/crud/FormTab'),
  },
  data: function () {
    return {
      shape_url: "https://holacratie.solidcommunity.net/public/Schema/tension.shex",
      currentShape: {id:"Loading Shape..."},
      shapes: [],
      footprint_shapes: [],
      translate_shapes: []
    }
  },



  created(){
/*
  */
    /*  let sl = new ShexLoader()
    console.log("SL",sl)*/
  },

  async mounted(){
    console.log("shexLoader", window.shexLoader)
    await this.load_remote_schema( this.shape_url ) // see ShexMixin
    this.$store.commit('crud/setShapeUrl', this.shape_url)
    console.log(this.$store.state.crud.shape_url)
    console.log("fin load")
  },
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
