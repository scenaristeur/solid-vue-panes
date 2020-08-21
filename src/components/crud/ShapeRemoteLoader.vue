<template>
  <div class="shape-remote-loader mb-3">
    <div>
      <b-input-group  class="mt-3"> <!--prepend="ShEx shape"-->
        <b-form-input class="col-md-3" v-model="shape_url"
        placeholder="see suggestions"
        ></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-success" @click="load">Load</b-button>
        </b-input-group-append>
      </b-input-group>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import ShexMixin from '@/mixins/crud/ShexMixin.js'

export default {
  name: 'ShapeRemoteLoader',
  mixins: [ ShexMixin],
  data: function () {
    return {
      shape_url: "https://holacratie.solid.community/public/Schema/issue.shex"
    }
  },
  methods: {
    load() {
      console.log(this.shape_url)
      this.load_remote_schema(this.shape_url)
    }
  },
}
</script>
