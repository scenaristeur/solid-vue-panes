<template>
  <div>
    <b-card
    v-bind:title="profile.name"
    v-bind:img-src="profile.photo"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    >
    <b-card-text>
      <a v-bind:href="webId" target="_blank">{{ webId }}</a>
    </b-card-text>

    <p v-if="profile.organization">Organization: {{profile.organization}}</p>
    <p v-if="profile.role">Role: {{profile.role}}</p>
    <p v-if="profile.gender">Gender: {{profile.gender}}</p>
    <p v-if="profile.bday">Birthday: {{profile.bday}}</p>
    <p v-if="profile.note">Note: {{profile.note}}</p>
    <p v-if="profile.locality">Locality: {{profile.locality}}</p>
    <p v-if="profile.friends">Friends: {{profile.friends.length}}</p>


     <p v-for="f in profile.friends" :key="f" :webId="f"  class="m-3" >{{ f}}</p>


    <!--
    <b-card-text>
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </b-card-text>

  <b-button href="#" variant="primary">Go somewhere</b-button>-->
</b-card>
</div>
</template>

<script>
import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'NavBar',
  props: {
    webId: String
  },
  mixins: [profileMixin],
  components: {
    
  //  'Person': () => import('@/components/layout/Person')
  },
  data: function () {
    return {
      //  webId: null,
      profile: {}
    }
  },
  async  created(){
    this.hello()
    //  console.log("WI",this.webId)
    this.profile = await this.getProfile(this.webId)
    //  console.log(this.profile)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}*/
</style>
