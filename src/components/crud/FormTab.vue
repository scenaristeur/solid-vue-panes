<template>
  <div class="form-tab">


    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Shape selection" active>
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
