<template>
  <div class="form-field">
    <h5>  <FormLabel :text="expression.predicate" /></h5>

    <ShapeTripleConstraint  :valueExpr="expression.valueExpr" :predicate="expression.predicate"/>

    <div class="brute-hide">
      <h5>{{ $options.name }}</h5>
      {{ expression }}
    </div>

  </div>
</template>

<script>



export default {
  name: 'FormField',
  components: {
    ShapeTripleConstraint: () => import('@/components/crud/ShapeTripleConstraint.vue'),
    FormLabel: () => import('@/components/crud/FormLabel.vue')
  },
  props: {
    expression: Object
  },

  data: function () {
    return {
      currentShape: "",
      shapes: [],
    }
  },
  computed: {

  }
}
</script>
