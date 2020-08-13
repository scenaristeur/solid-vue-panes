<template>
  <div class="modele">
    <div>
      <b-form-select v-model="selected"
      :options="options"
      multiple :select-size="4"
      v-on:change="$emit('selected', selected)"
      ></b-form-select>
      <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    </div>
    <!--  <COMPONENET />  -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'FriendsSelection',
  data() {
    return {
      selected: ['b'], // Array reference
      /*  options: [
      { value: 'a', text: 'Select one or more friends', disabled: true },
      { value: 'b', text: 'Default Selected Option' },
      { value: 'c', text: 'This is another option' },
      { value: 'd', text: 'This one is disabled'},
      { value: 'e', text: 'This is option e' },
      { value: 'f', text: 'This is option f' },
      { value: 'g', text: 'This is option g' }
    ]*/
  }
},
computed: {
  options(){
    let friends = this.$store.state.solid.friends
    let options =[]
    options.push({ value: 'null', text: 'Select one or more friends', disabled: true })
    friends.forEach((f) => {
      options.push({value: f, text: f})
    });
    return options
  },
},
/*  components: {
'Component': () => import('@/components/Component'),
},*/
}
</script>
