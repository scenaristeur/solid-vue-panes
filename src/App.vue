<i18n src="@/common/locales.json"></i18n>
<template>
  <div id="app">
    <NavBar />
    <b-progress v-if=" progressValue < progressMax" :value="progressValue" :max="progressMax" show-progress animated></b-progress>
    <transition name="fade">
      <router-view/>
    </transition>
    <SolidTrackSession />

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/editor">{{ $t('editor') }}</router-link> |
      <router-link to="/simplegouv">Gouvernance</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/inbox">Inbox</router-link> |
      <router-link to="/workspaces">Worspaces</router-link> |
      <router-link to="/chat">Chat</router-link> |
      <router-link to="/parle">Parle</router-link> |
      <router-link to="/about">About</router-link> |
      <a href="https://join.slack.com/t/popock/shared_invite/zt-i5n7m70z-BmBypozj8vkdGRI9bxBCaA" target="_blank">Join Popock slack</a>

    </div>

    <small><i>
      <a href="https://github.com/scenaristeur/solid-vue-panes/commits/master" target="_blank">
        0.1.157 - url to editornetwork
      </a>
    </i></small>

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    'NavBar': () => import('@/components/layout/NavBar.vue'),
    'SolidTrackSession': () => import('@/components/solid/SolidTrackSession'),
  },
  computed: {
    progressValue(){return this.$store.state.solid.progressValue},
    progressMax(){return this.$store.state.solid.progressMax},
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
router-view {
  text-align: left;
}
</style>
