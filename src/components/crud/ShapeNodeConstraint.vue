<template>
  <div class="shape-node-constraint">
    <div v-if="valueExpr.values" class="not-found">
      <FormSelect :values="valueExpr.values" :predicate="predicate" :datatype="valueExpr.datatype"/>
    </div>
    <div v-else-if="valueExpr.nodeKind" class="found">
      <div v-if="valueExpr.nodeKind == 'literal'" class="not-found">
        <FormTextarea :nodeKind="valueExpr.nodeKind" :predicate="predicate"/>
      </div>
      <div v-else-if="valueExpr.nodeKind == 'iri'" class="not-found">
        URI TODO:  <FormInput :valueExpr="valueExpr" :predicate="predicate" :datatype="valueExpr.datatype"/>
      </div>
    </div>

    <div v-else-if="valueExpr.datatype.startsWith('http://www.w3.org/ns/pim/space#storage:')">
      <small>{{ workspace+valueExpr.datatype.split(":")[2] }}</small>
      <FormSelect :source='workspace+valueExpr.datatype.split(":")[2]' :values="valueExpr.values" :predicate="predicate" :datatype="valueExpr.datatype"/>

    </div>

    <div v-else class="not-found">
      {{ valueExpr.datatype }}
      <FormInput :valueExpr="valueExpr" :predicate="predicate" :datatype="valueExpr.datatype"/>
    </div>



    <div class="brute-hide">
      <h5>{{ $options.name }}</h5>
      TODO : values, nodeKind, datatype
      {{ valueExpr }}<br>
      <DebugProperties :object="valueExpr" />
    </div>

  </div>
</template>

<script>


export default {
  name: 'ShapeNodeConstraint',
  components: {
    DebugProperties: () => import('@/components/crud/DebugProperties.vue'),
    FormInput: () => import('@/components/crud/FormInput.vue'),
    FormTextarea: () => import('@/components/crud/FormTextarea.vue'),
    FormSelect: () => import('@/components/crud/FormSelect.vue')
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
    },
    workspace: {
      get: function() { return this.$store.state.crud.workspace},
      set: function() {}
    },
  }
}
</script>
