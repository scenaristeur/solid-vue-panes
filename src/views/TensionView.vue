<template>
  <div class="tension-view">
    <h1>This is the Tension View</h1>
    <!--  <Component /> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'TensionView',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
created(){
  console.log("TENSION VIEW LOADED")
}
}
</script>
<style>
.tension-view {
  text-align: left;
}
</style>
