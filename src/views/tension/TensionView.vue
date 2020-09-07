<template>
  <div class="tension-view">

    <!--  <Component /> -->
    <p>A tension is a difference between what is and what should be</p>
    <b-container>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-none">Name:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input v-model="tension.label" :state="true" placeholder="Name"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-none">What is:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input v-model="tension.wi" placeholder="What is"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="input-none">What should be:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input v-model="tension.wsb" placeholder="What should be"></b-form-input>
        </b-col>
      </b-row>


      <b-row class="my-1">
        <b-button @click="createTension">Save</b-button>
      </b-row>

    </b-container>

    TensionView
  </div>
</template>

<script>
// @ is an alias to /src
import TensionMixin from '@/mixins/TensionMixin'

export default {
  name: 'TensionView',
    mixins: [TensionMixin],
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/

methods: {

}
}
</script>
