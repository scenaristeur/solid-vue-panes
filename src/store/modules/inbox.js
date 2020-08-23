//import shop from '../../api/shop'

// initial state
const state = () => ({
  reply : {},
  toTrash: {}

})

// getters
const getters = {}

// actions
const actions = {
  /*getAllProducts ({ commit }) {
  shop.getProducts(products => {
  commit('setProducts', products)
})
}*/
}

// mutations
const mutations = {

  setReply (state, reply) {
    state.reply = reply
  },
  setToTrash (state, tt) {
    state.toTrash = tt
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
