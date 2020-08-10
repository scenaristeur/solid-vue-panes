<template>
  <div class="general">


    <div v-if="webId != null" class="container">

      <h4>{{ profile.webId }}</h4>
      <!--  {{ profileDoc }}
      {{ name }}
      {{ photo }}-->
      <img class="m-3" width="80" height="80" :src="profile.photo" rounded="circle" alt=" " /><br>

      <div>
        <b-form-group
        label-cols-sm="3"
        label="Name:"
        label-align-sm="right"
        label-for="name">
        <b-form-input id="name" v-model="profile.name"></b-form-input>
      </b-form-group>


      <b-form-group
      label-cols-sm="3"
      label="Organization:"
      label-align-sm="right"
      label-for="organization">
      <b-form-input id="organization" v-model="profile.organization"></b-form-input>
    </b-form-group>

    <b-form-group
    label-cols-sm="3"
    label="Role:"
    label-align-sm="right"
    label-for="role">
    <b-form-input id="role" v-model="profile.role"></b-form-input>
  </b-form-group>

  <b-form-group
  label-cols-sm="3"
  label="Birthday:"
  label-align-sm="right"
  label-for="bday">
  <b-form-input id="bday" type="date" v-model="profile.bday"></b-form-input>
</b-form-group>

<b-form-group
label-cols-sm="3"
label="Gender:"
label-align-sm="right"
label-for="gender">
<b-form-input id="gender" v-model="profile.gender"></b-form-input>
</b-form-group>


<b-form-group
label-cols-sm="3"
label="Address Locality:"
label-align-sm="right"
label-for="address">
<b-form-input id="address" v-model="profile.locality"></b-form-input>
</b-form-group>

<b-form-group
label-cols-sm="3"
label="Note:"
label-align-sm="right"
label-for="note">
<b-form-input id="note" v-model="profile.note"></b-form-input>
</b-form-group>
</div>
</div>

<div v-else>
  <SolidLogin />
</div>
</div>
</template>

<script>

import profileMixin from '@/mixins/profileMixin'
export default {
  name: 'General',
  components: {
    'SolidLogin': () => import('@/components/solid/SolidLogin')
  },
  mixins: [profileMixin],
  data: function () {
    return {
      profile: {}
    }
  },
  async  created(){
    let profile = this.$store.state.solid.profile
    console.log("PROFILE FROM STORE", profile.name)
    //  console.log("WI",this.webId)


    this.profile = await this.getProfile(this.webId)
    console.log(this.profile)
    this.$store.commit('solid/setProfile', this.profile)
  },
  computed:{
    webId(){return this.$store.state.solid.webId},
    /*  profileDoc(){return this.$store.state.solid.profileDoc},
    name(){return this.$store.state.solid.name},
    organization(){return this.$store.state.solid.organization},
    role(){return this.$store.state.solid.role},
    bday(){return this.$store.state.solid.bday},
    gender(){return this.$store.state.solid.gender},
    photo(){return this.$store.state.solid.photo},
    address(){return this.$store.state.solid.address},
    note(){return this.$store.state.solid.note},*/

  }
}
</script>
