<template>
  <div class="people-item container">
    <div class="d-flex align-items-center">
      <b-avatar class="mr-3" v-if="profile.photo == undefined"></b-avatar>
      <b-avatar button v-else :src="profile.photo" badge badge-variant="danger" class="mr-3"></b-avatar>
      <h5 class="mr-auto">{{ profile.name }}</h5>

      <b-badge>{{ friends.length }}</b-badge><br>
    </div>
    <div class="row">
      <div v-if="profile.locality" class="col-sm-4"><small>locality:</small> {{profile.locality}}</div>
      <div v-if="profile.organization" class="col-sm-4"><small>organization:</small> {{profile.organization}}</div>
      <div v-if="profile.role" class="col-sm-4"><small>role:</small> {{profile.role}}</div> <!-- // +add to my friends -->
      <div class="col-sm-4"><small>instances:</small> {{profile.instances}}</div>
    </div>




  </div>
</template>

<script>
import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'PeopleItem',
  mixins: [profileMixin],
  props:['webId'],
  /*components: {
  'PeopleItem': () => import('@/components/profile/PeopleItem'),
},*/
data: function () {
  return {
    //  webId: {},
    friends: [],
    profile:{name: "loading profile..."}
  }
},
created() {
  //this.webId = this.$route.params.webId || this.$store.state.solid.webId
  this.updateProfile()
},
watch: {
  /*  '$route' (to) {
  //  '$route' (to, from) {
  this.webId = to.params.webId || this.$store.state.solid.webId
  this.updateFriends()
}*/
},
methods:{
  async updateProfile(){
    this.profile = await this.getProfile(this.webId)
    //  console.log(this.profile)
    this.friends = await this.getFriends(this.webId)
  }
}
}
</script>
