<template>
  <div class="form-radio">

    <b-form-group label="">
      <b-form-radio
      v-for="option in options"
      :key="option.id"
      v-model="selected"
      name="some-radios"
      :value="option.value">


      <div v-if="typeof option.value === 'string'" class="not-found">
        {{ option.value }}
        <FormSelect :source="option.value" :predicate="predicate"/>
      </div>
      <div v-else-if="typeof option.value === 'object'" class="found">
        <ExpressionSwitcher :expression="option.value" :predicate="predicate"/>
      </div>
      <div v-else class="not-found">TODO : typeof option.value unknown</div>

    </b-form-radio>
  </b-form-group>

  <div class="brute-hide">
    <h5>{{ $options.name }}</h5>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    shapeExprs: {{ shapeExprs }}
    <hr>
  </div>

</div>
</template>

<script>

export default {
  name: 'FormRadio',
  components: {
    
    ExpressionSwitcher: () => import('@/components/crud/ExpressionSwitcher.vue'),
    FormSelect: () => import('@/components/crud/FormSelect.vue')
  },
  props: {
    shapeExprs: Array,
    selected: String,
    predicate: String
  },

  data: function () {
    return {
      /*  currentShape: "",
      shapes: [],*/
    }
  },
  computed: {
    options () {
      let opts = []
      this.shapeExprs.forEach((se, i) => {
        console.log("se",se)
        let o = {id:i, text:i, value: se}
        opts.push(o)
      });

      return opts
    }
  }
}
</script>
