<template>
  <div class="form-label">
    <h4 :title="text"><u> {{label}}</u></h4>
  </div>
</template>

<script>
import UtilMixin from '@/mixins/crud/UtilMixin.js'

export default {
  name: 'FormLabel',
    mixins: [UtilMixin],
  props: {
    text: String
  },
  computed: {
    label () {
      return this.text != undefined ? this.localname(this.text).charAt(0).toUpperCase() + this.localname(this.text).slice(1) : this.text
    }
  }
}
</script>
