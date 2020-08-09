<template>
  <div class="general">
    <h1>This is an general page </h1>
  {{ progressValue}} /  {{ progressMax}}
    <b-progress v-if=" progressValue < progressMax" :value="progressValue" :max="progressMax" show-progress animated></b-progress>
    {{ webId }}
    {{ profileDoc }}
    {{ name }}
    {{ organization }}
    {{ role }}
    {{ bday }}
    {{ gender }}
    {{ photo }}
    {{ address }}
    {{ note }}
  </div>
</template>

<script>


export default {
  name: 'General',
  components: {
  },
  data: function () {
    return {

      //  storage: "",
      //folder: {}
    }
  },
  computed:{
    webId(){return this.$store.state.solid.webId},
    profileDoc(){return this.$store.state.solid.profileDoc},
    name(){return this.$store.state.solid.name},
    organization(){return this.$store.state.solid.organization},
    role(){return this.$store.state.solid.role},
    bday(){return this.$store.state.solid.bday},
    gender(){return this.$store.state.solid.gender},
    photo(){return this.$store.state.solid.photo},
    address(){return this.$store.state.solid.address},
    note(){return this.$store.state.solid.note},
    progressValue(){return this.$store.state.solid.progressValue},
    progressMax(){return this.$store.state.solid.progressMax},

  }
}
</script>
