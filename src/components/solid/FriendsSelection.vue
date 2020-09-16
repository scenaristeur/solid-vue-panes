<template>
  <div class="modele">
    <div>
      <b-form-group
      id="fieldset-1"
      description="To send a mail to their inbox."
      label="Select one or more friends"
      label-for="selector">
      <b-form-select id="selector" v-model="selected"
      :options="options"
      multiple :select-size="4"
      v-on:change="$emit('selected', selected)"
      ></b-form-select>
    </b-form-group>
    <div class="mt-3">Selected: <br><small>{{ selected }}</small></div>
  </div>
</div>
</template>

<script>


export default {
  name: 'FriendsSelection',
  data() {
    return {
      selected: [],
  }
},
computed: {
  options(){
    let friends = this.$store.state.solid.friends
    let options =[]
    friends.forEach((f) => {
      options.push({value: f, text: f.split('/').slice(2,3)[0]})
    });
    return options
  },
},
}
</script>
