<template>
  <div class="form-tab">


    <div>
      <b-tabs content-class="mt-3">
        <!--  -->
        <b-tab
        v-for="shape in shapes"
        v-bind:class="{ active: currentShape == shape.id }"
        :key="shape.id" :title="shape.localname"
        @click="changeCurrentShape(shape.id)">
        <!--test {{currentShape}} & {{shape.id}} -->
        <FormShape :shape="shape"/>
        <FormSubmit :shape="shape"/>

      </b-tab>

      <b-tab title="Shape selection" >
        <p>Select a Tab to use a Form or choose
          <b-link href="https://holacratie.solid.community/public/Schema/" target="_blank">another ShEx shapes</b-link>.

          <ShapeChoose />
          <SolidLoginButton />
        </p>

        <div class="brute-hide">
          <h5>{{ $options.name }}</h5>
          currentShape : {{ currentShape}}<br>
          shapes length ({{ shapes.length }}): {{ shapes }}<br>
          footprint_shapes ({{ footprint_shapes.length}}): {{ footprint_shapes}}<br>
          translate_shapes ({{ translate_shapes.length}}): {{ translate_shapes}}<br>
        </div>
      </b-tab>
    </b-tabs>
  </div>


</div>
</template>

<script>


export default {
  name: 'FormTab',
  components: {
    'FormShape': () => import('@/components/crud/FormShape'),
    'FormSubmit': () => import('@/components/crud/FormSubmit'),
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
    'ShapeChoose': () => import('@/components/crud/ShapeChoose'),

  },
  props: {
    //  msg: String
  },
  data: function () {
    return {
      //  currentShape: "",
      /*      shapes: [],*/
    }
  },
  watch:{
    currentShape(s){
      console.log("2new current shape",s)
    }
  },
  computed: {
    currentShape (s) {
      console.log("new current shape",s)
      return this.$store.state.crud.currentShape
    },
    shapes () {
      return this.$store.state.crud.shapes
    },
    footprint_shapes () {
      return this.$store.state.crud.footprint_shapes
    },
    translate_shapes () {
      return this.$store.state.crud.translate_shapes
    }
  },
  methods: {
    changeCurrentShape(shape){
      console.log(shape)
      this.$store.commit('crud/setCurrentShape', shape)
    }
  }
}
</script>
<style>
.form-tab {
  text-align: left;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

  /* palette */
  --light-pink: hsla(0, 100%, 84%, 1);
  --deep-champagne: hsla(33, 100%, 82%, 1);
  --lemon-yellow-crayola: hsla(62, 100%, 86%, 1);
  --tea-green: hsla(110, 100%, 87%, 1);
  --celeste: hsla(185, 100%, 80%, 1);
  --baby-blue-eyes: hsla(217, 100%, 81%, 1);
  --maximum-blue-purple: hsla(249, 100%, 85%, 1);
  --mauve: hsla(300, 100%, 89%, 1);
  --baby-powder: hsla(60, 100%, 99%, 1);

}
.brute {
  background-color: var(--mauve);
  border:1px dotted black;
  font-size: smaller;
}
.brute-hide {
  display: none;
}
.brute:before {
  content: "♥ debug: ";
}
</style>
