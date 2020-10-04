<template>
  <div class="solid-track-session" v-if="user != null">
<i><small>Logged as : <a v-bind:href="webId" target="_blank">{{ user }}</a></small></i>
  </div>
</template>

<script>
import auth from 'solid-auth-client';
import profileMixin from '@/mixins/profileMixin'


export default {
  name: 'SolidTrackSession',
  mixins: [profileMixin],
  data: function () {
    return {
      user: null,
      webId: null
    }
  },
  created(){
  /*  $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
  console.log(JSON.stringify(data, null, 2));
});*/




    auth.trackSession(async session => {
      if (!session){
        this.user = null
        console.log('The user is not logged in')
        this.$store.dispatch('solid/setWebId', null)
        this.$store.commit('solid/setFriends', [])
        this.$store.commit('solid/setProfile', {})
        this.$store.commit('solid/setIndexes', {})
        //this.$store.commit('inbox/setInboxUrls', [])
      } else{
        this.webId = session.webId
        this.user = session.webId.split('/').slice(2,3)[0]
        console.log(`The user is ${session.webId}`)
        this.$store.dispatch('solid/setWebId', this.webId)
        let friends = await this.getFriends(this.webId)
        this.$store.commit('solid/setFriends', friends)
        let profile = await this.getProfile(this.webId)
        this.$store.commit('solid/setProfile', profile)
        let indexes = await this.getIndexes(this.webId)
        this.$store.commit('solid/setIndexes', indexes)
      //  let inbox_urls = await this.getInboxUrls(this.webId)
      //  this.$store.commit('inbox/setInboxUrls', inbox_urls)
      }
    })
  },
}
</script>
