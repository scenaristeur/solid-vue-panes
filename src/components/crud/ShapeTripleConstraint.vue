<template>
  <div class="shape-triple-constraint">
    <div v-if="typeof valueExpr === 'string'" class="not-found">
      {{ valueExpr}}
      <FormSelect :source="valueExpr" :predicate="predicate"/>
    </div>
    <div v-else-if="typeof valueExpr === 'object'" class="found">
      <ExpressionSwitcher :expression="valueExpr" :predicate="predicate"/>
    </div>
    <div v-else class="not-found">TODO : typeof valueExpr unknown : {{valueExpr}}</div>
    <!--  <span v-if="valueExpr.min">min : {{valueExpr.min}} </span>
    <span v-if="valueExpr.max">max : {{valueExpr.max}}</span>-->

    <div class="brute d-none">
      <h5>{{ $options.name }}</h5>
      typeof valueExpr: {{ typeof valueExpr}}<br>
      {{ valueExpr }}
    </div>

  </div>
</template>

<script>


export default {
  name: 'ShapeTripleConstraint',
  components: {
    ExpressionSwitcher: () => import('@/components/crud/ExpressionSwitcher.vue'),
    FormSelect: () => import('@/components/crud/FormSelect.vue')
  },
  props: {
    valueExpr:{
      type: [ String, Object ]
    },
    predicate: String
  },

  data: function () {
    return {
      /*currentShape: "",
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
