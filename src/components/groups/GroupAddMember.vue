<template>
  <div class="group-member">
    <div v-if="webId != null">


</div>
    </div>
  </template>

  <script>
  // @ is an alias to /src


  export default {
    name: 'GroupAddMember',
    computed:{
      webId(){
        return this.$store.state.solid.webId
      },
    }


  }
  </script>
