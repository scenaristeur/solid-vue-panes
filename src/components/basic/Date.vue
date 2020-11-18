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
  data() {
    return {
    date:""
    }
  },
  watch: {
    async dateIso (dateIso) {
      this.date  = new Date(dateIso).toLocaleString()
    }
  }
}
</script>
