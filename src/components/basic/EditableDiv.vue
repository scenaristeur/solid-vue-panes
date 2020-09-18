<template>
  <div class="editable-div grab m-1">
  <!--  {{ label }} -->
    <b-input type="text"
           v-if="edit"
           :value="valueLocal"
           :placeholder="placeholder"
           @blur="valueLocal = $event.target.value; edit = false; $emit('input', valueLocal);"
           @keyup.enter="valueLocal = $event.target.value; edit = false; $emit('input', valueLocal);"
           v-focus=""
             />
        <span class="valueLocal p-1" variant="info" v-else="" @click="edit = true;">
          <span v-if="valueLocal"><b>{{valueLocal}}</b></span>
          <span v-else>{{placeholder}}</span>
        </span>
    </div>
</template>

<script>
  export default {
name: 'EditableDiv',
  props: ['value', 'placeholder'],

  data () {
  return {
      edit: false,
      valueLocal: this.value
    }
  },

  watch: {
    value: function() {
      this.valueLocal = this.value;
    }
  },

  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }

}
</script>
<style>
  .grab {cursor: -webkit-grab; cursor: grab;}
.valueLocal{
  border-radius: 50% 20% / 10% 40%;
   border-style: solid;
  border-color: black;
/*  background-color: palegreen;*/
}
</style>
