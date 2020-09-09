<template>
  <div>
    <small>{{ date }}</small>
  </div>
</template>

<script>

export default {
  name: 'Date',
  props:['dateIso'],
  created(){
    this.date  = new Date(this.dateIso).toLocaleString()
  },
}
</script>
