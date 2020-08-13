<template>
  <div class="group-member">
    <div v-if="webId != null">

    hasMember: {{ member }}

</div>
    </div>
  </template>

  <script>
  // @ is an alias to /src


  export default {
    name: 'GroupMember',
    props : ['member'],

    computed:{
      webId(){
        return this.$store.state.solid.webId
      },
    }


  }
  </script>
