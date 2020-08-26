<template>
  <div id="app">
    <NavBar />
    <b-progress v-if=" progressValue < progressMax" :value="progressValue" :max="progressMax" show-progress animated></b-progress>
    <!--  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>-->
  <transition name="fade">
    <router-view/>
  </transition>
  0.1.32 - log_acl
</div>
</template>

<script>

import NavBar from '@/components/layout/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
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
</style>
