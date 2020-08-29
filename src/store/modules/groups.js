
// initial state
const state = () => ({
  count: 0,
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

  increment (state) {
    state.count++
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
