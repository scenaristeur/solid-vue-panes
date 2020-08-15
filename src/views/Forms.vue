<template>
  <div class="forms">
    <h1>This is an forms page</h1>
    a page that generate form from a ShEx shape and post it as an activityPub  action.<br>

    <Crud />

</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Forms',
  components: {
  'Crud': () => import('@/components/crud/Crud'),
},

}
</script>
