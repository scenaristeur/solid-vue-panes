<template>
  <div class="general">


    <div v-if="webId != null" class="container">

      <b-progress v-if=" progressValue < progressMax" :value="progressValue" :max="progressMax" show-progress animated></b-progress>
      <h4>{{ webId }}</h4>
      <!--  {{ profileDoc }}
      {{ name }}
      {{ photo }}-->
      <img class="m-3" width="80" height="80" :src="photo" rounded="circle" alt=" " /><br>

      <div>
        <b-form-group
        label-cols-sm="3"
        label="Name:"
        label-align-sm="right"
        label-for="name">
        <b-form-input id="name" v-model="name"></b-form-input>
      </b-form-group>


      <b-form-group
      label-cols-sm="3"
      label="Organization:"
      label-align-sm="right"
      label-for="organization">
      <b-form-input id="organization" v-model="organization"></b-form-input>
    </b-form-group>

    <b-form-group
    label-cols-sm="3"
    label="Role:"
    label-align-sm="right"
    label-for="role">
    <b-form-input id="role" v-model="role"></b-form-input>
  </b-form-group>

  <b-form-group
  label-cols-sm="3"
  label="Birthday:"
  label-align-sm="right"
  label-for="bday">
  <b-form-input id="bday" type="date" v-model="bday"></b-form-input>
</b-form-group>

<b-form-group
label-cols-sm="3"
label="Gender:"
label-align-sm="right"
label-for="gender">
<b-form-input id="gender" v-model="gender"></b-form-input>
</b-form-group>


<b-form-group
label-cols-sm="3"
label="Address Locality:"
label-align-sm="right"
label-for="address">
<b-form-input id="address" v-model="address.locality"></b-form-input>
</b-form-group>

<b-form-group
label-cols-sm="3"
label="Note:"
label-align-sm="right"
label-for="note">
<b-form-input id="note" v-model="note"></b-form-input>
</b-form-group>
</div>
</div>

<div v-else>
  <SolidLogin />
</div>
</div>
</template>

<script>


export default {
  name: 'General',
  components: {
        'SolidLogin': () => import('@/components/solid/SolidLogin')
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
