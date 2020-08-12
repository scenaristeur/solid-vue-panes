<template>
  <div class="groups">
    <div v-if="webId != null">
      <h1>This is an member page</h1>


    </div>
  </template>

  <script>
  // @ is an alias to /src


  export default {
    name: 'GroupMember',


    components: {

    },
    computed:{
      webId(){
        return this.$store.state.solid.webId
      },
    }


  }
  </script>
