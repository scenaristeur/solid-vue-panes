//import shop from '../../api/shop'

// initial state
const state = () => ({
  socket: null,
  subscriptions: []
})

// getters
const getters = {}

// actions
const actions = {
}

// mutations
const mutations = {
  setSocket (state, socket) {
    state.socket = socket
  },
  /*addSubscription(state, fileUrl){
  state.subscriptions.push(fileUrl)
}*/
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
