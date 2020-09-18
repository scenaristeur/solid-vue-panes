
const state = () => ({
  currentEndpoint: {},
})


const getters = {}

// actions
const actions = {

}

// mutations
const mutations = {
  setEndpoint(state, e) {
    state.currentEndpoint = e
  },


}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
