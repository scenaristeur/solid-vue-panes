import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'


Vue.config.productionTip = false
Vue.use(VueI18n)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use( CKEditor );

let solid = window.solid
console.log("SOLID",solid)

import Chat from 'vue-beautiful-chat'
Vue.use(Chat)

import SolidPlugin from './plugins/solid-plugin';
Vue.use(SolidPlugin, {store: store});


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

import VueNativeNotification from 'vue-native-notification'

Vue.use(VueNativeNotification, {
  // Automatic permission request before
  // showing notification (default: true)
  requestOnNotify: true
})

//console.log(navigator.language )

const i18n = new VueI18n({
  locale: navigator.language.split("-")[0] || 'en',
  messages: {
    en: {}
  }
})


import { Network } from "vue-vis-network";
Vue.component('network', Network);
import "vis-network/dist/vis-network.esm.min.js";
//import "vue-vis-network/node_modules/vis-network/dist/vis-network.css";

new Vue({
  router,
  store,
  solid,
  i18n,
  render: h => h(App),
  created () {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  }
}).$mount('#app')
