import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

let solid = window.solid
console.log("SOLID",solid)

import Chat from 'vue-beautiful-chat'
Vue.use(Chat)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueNativeNotification from 'vue-native-notification'

Vue.use(VueNativeNotification, {
  // Automatic permission request before
  // showing notification (default: true)
  requestOnNotify: true
})

new Vue({
  router,
  store,
  solid,
  render: h => h(App),
  created () {
  if (sessionStorage.redirect) {
    const redirect = sessionStorage.redirect
    delete sessionStorage.redirect
    this.$router.push(redirect)
  }
}
}).$mount('#app')
