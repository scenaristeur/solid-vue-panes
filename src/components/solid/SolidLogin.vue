<template>
  <div class="solid-login">
    <b-button variant="success" v-if="webId == null" @click="login">Login</b-button>
    <b-button variant="danger" v-else @click="logout">Logout</b-button>
  </div>
</template>

<script>
import auth from 'solid-auth-client';
import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'SolidLogin',
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
        //  localStorage.removeItem("solid-auth-client");
      } else{
        this.webId = session.webId
        console.log("TODO must getFriends & getProfile only once")
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
  methods: {
    login(){

      console.log("login")
      this.popupLogin()
    },
    async logout(){
      await  auth.logout()
      //  localStorage.removeItem("solid-auth-client");
    },
    async popupLogin() {
      let session = await auth.currentSession();
      console.log("Current session before login" ,session)
      let popupUri = './dist-popup/popup.html';
      //  let popupUri = 'https://solid.community/common/popup.html';
      if (!session){
        session = await auth.popupLogin({ popupUri });
      }else{
        console.log(session)
      }
    }
  }
}
</script>
