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
      //  webId: null
    }
  },
  computed:{
    webId() {
      return this.$store.state.solid.webId
    }
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
