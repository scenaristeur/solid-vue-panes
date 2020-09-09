<template>
  <div>
    <button type="button" v-for="domain in domains" :key="domain" class="btn btn-outline-secondary btn-sm">
      {{domain}}
    </button>
  </div>
</template>

<script>

export default {
  name: 'Domains',
  props:['domains'],
  created(){
  //  this.date  = new Date(this.dateIso).toLocaleString()
  },
}
</script>
