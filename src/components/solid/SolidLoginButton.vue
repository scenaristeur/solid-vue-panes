<i18n src="@/common/locales.json"></i18n>
<template>
  <div class="solid-login">
    <b-button variant="success" v-if="webId == null" @click="login">{{ $t('login') }}</b-button>
    <b-button variant="danger" v-else @click="logout">{{ $t('logout') }}</b-button>
  </div>
</template>

<script>
import auth from 'solid-auth-client';
import loginMixin from '@/mixins/loginMixin'
import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'SolidLogin',
  mixins: [loginMixin, profileMixin],
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
    },

  }
}
</script>
