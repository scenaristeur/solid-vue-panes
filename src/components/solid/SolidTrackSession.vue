<template>
  <div class="solid-track-session">
    WebId : {{ webId }}
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
      webId: null
    }
  },
  created(){
    auth.trackSession(async session => {
      //  console.log("session",session)
      if (!session){
        this.webId = null
        console.log('The user is not logged in', this.webId)
        this.$store.dispatch('solid/setWebId', this.webId)
        this.$store.commit('solid/setFriends', [])
        this.$store.commit('solid/setProfile', {})
        //  alert("Goodbye !")
        //  localStorage.removeItem("solid-auth-client");
      } else{
        this.webId = session.webId
        console.log(`The user is ${session.webId}`)
        this.$store.dispatch('solid/setWebId', this.webId)
        this.friends = await this.getFriends(this.webId)
        //  console.log(this.friends)
        this.$store.commit('solid/setFriends', this.friends)
        this.profile = await this.getProfile(this.webId)
        //    console.log(this.profile)
        this.$store.commit('solid/setProfile', this.profile)

        this.indexes = await this.getIndexes(this.webId)
        console.log("Indexes",this.indexes)
        this.$store.commit('solid/setIndexes', this.indexes)
      }
    })
  },
}
</script>
