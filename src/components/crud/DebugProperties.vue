<template>
  <div class="debug-properties" >


    <ul  v-for="p in properties" :key="p.key" >
      <li>
        {{ p.key }} : {{ p.value }}
      </li>
    </ul>

    <div class="brute-hide">
      {{ $options.name }}
      {{ properties }}
    </div>


  </div>
</template>

<script>

export default {
  name: 'DebugProperties',
  props: {
    object: Object
  },
  data: function () {
    return {

    }
  },
  computed: {
    properties(){
      let props  = []
      for (const [key, value] of Object.entries(this.object)) {
        let  p = {key: key, value: value}
        props.push(p)
      }
      return props
    },
  }
}
</script>

<style scoped>
.properties {
  background-color: var(--lemon-yellow-crayola);
}
</style>
