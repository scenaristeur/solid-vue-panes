<template>
  <div class="solid-login">
    <b-button variant="success" v-if="webId == null" @click="login">Login</b-button>
    <b-button variant="danger" v-else @click="logout">Logout</b-button>
  </div>
</template>

<script>
import store from "@/store";
import { BButton } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import auth from 'solid-auth-client';

export default {
  store,
  name: 'SolidLogin',
  props: {
    doc: [Boolean, String]
  },
  components: {
    BButton,
    //  auth
  },
  data: function () {
    return {
      webId: null,
      storage: ""
    }
  },
  created(){
    auth.trackSession(async session => {
      console.log(session)
      if (!session){
        this.webId = null
        console.log('The user is not logged in', this.webId)
        this.$store.commit('solid/setWebId', this.webId)
        localStorage.removeItem("solid-auth-client");
      } else{
        this.webId = session.webId
        console.log(`The user is ${session.webId}`)
        this.$store.commit('solid/setWebId', this.webId)
      }
    })
  },
  methods: {
    login(){
      console.log("login")
      this.popupLogin()
    },
    logout(){
      auth.logout()
    },
    async popupLogin() {
      let session = await auth.currentSession();
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
