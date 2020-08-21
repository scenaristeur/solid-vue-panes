<template>
  <div class="shape-or">
    <FormRadio :shapeExprs="valueExpr.shapeExprs" :predicate="predicate"/>

    <div class="brute-hide">
      <h5>{{ $options.name }}</h5>
      TODO shapeExprs <br>
      {{ valueExpr }}<br>
      <DebugProperties :object="valueExpr" />
    </div>

  </div>
</template>

<script>



export default {
  name: 'ShapeOr',
  components: {
    FormRadio: () => import('@/components/crud/FormRadio.vue'),
    DebugProperties: () => import('@/components/crud/DebugProperties.vue')
  },
  props: {
    valueExpr: Object,
    predicate: String
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
    }
  }
}
</script>
