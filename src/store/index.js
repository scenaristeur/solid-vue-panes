import Vue from 'vue'
import Vuex from 'vuex'
import solid from './modules/solid'
import chat from './modules/chat'
import websocket from './modules/websocket'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { solid, chat, websocket }
})
