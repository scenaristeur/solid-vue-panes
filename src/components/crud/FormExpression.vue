<template>
  <div class="form-expression">

    <ExpressionSwitcher :expression="expression" />




    <div class="brute-hide">
      {{ $options.name }}<br>
      {{ expression }}
      <DebugProperties :object="expression"/>
    </div>


  </div>
</template>

<script>


export default {
  name: 'FormExpression',
  components: {
    'DebugProperties': () => import('@/components/crud/DebugProperties'),
    'ExpressionSwitcher': () => import('@/components/crud/ExpressionSwitcher'),

  },
  props: {
    expression: Object
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
