<template>
  <div>
    <b-card

    v-bind:img-src="profile.photo"
    img-alt=""
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2">
    <b-card-title   title-tag="h6"><a v-bind:href="webId" target="_blank">{{profile.name || this.webId}}</a></b-card-title>
    <b-card-text>

      <p v-if="profile.organization">Organization: {{profile.organization}}</p>
      <p v-if="profile.role">Role: {{profile.role}}</p>
      <p v-if="profile.locality">Locality: {{profile.locality}}</p>
      <p v-if="profile.gender">Gender: {{profile.gender}}</p>
      <p v-if="profile.bday">Birthday: {{profile.bday}}</p>
      <p v-if="profile.note">Note: {{profile.note}}</p>


    </b-card-text>
    <!--
    <div>
    <b-button v-if="friends.length > 0"  v-b-toggle.collapse-1 variant="primary">{{friends.length}} friends</b-button>
    <b-collapse id="collapse-1" class="mt-2" >
    <b-card>
    <p v-for="f in friends" :key="f" :webId="f"  class="card-text">
    <router-link :to="{ name: 'ProfileW', params: { webId: f}}">{{f}}</router-link>
  </p>
</b-card>
</b-collapse>
</div> -->
</b-card>
</div>
</template>

<script>
import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'Person',
  props: {
    webId: String
  },
  mixins: [profileMixin],
  data: function () {
    return {
      profile: {},
      friends: []
    }
  },
  async  created(){
    this.profile = await this.getProfile(this.webId)
    this.friends = await this.getFriends(this.webId)
  },
}
</script>
