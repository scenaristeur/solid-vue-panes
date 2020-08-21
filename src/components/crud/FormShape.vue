<template>
  <div class="form-shape container">

    <FormExpression :expression="shape.expression" />

    <div class="brute-hide">
      <h5>{{ $options.name }}</h5>
      Shape : {{ shape }}
      <DebugProperties :object="shape"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FormShape',
  components: {
    'FormExpression': () => import('@/components/crud/FormExpression'),
    'DebugProperties': () => import('@/components/crud/DebugProperties'),
  },
  props: {
    shape: Object
  },
  data: function () {
    return {

      /*  currentShape: "",
      shapes: [],*/
    }
  },
  computed: {
    currentShape () {
      return this.$store.state.crud.currentShape
    },
    shapes () {
      return this.$store.state.crud.shapes
    }
  }
}
</script>
