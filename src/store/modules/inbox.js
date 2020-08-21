//import shop from '../../api/shop'

// initial state
const state = () => ({
  recipient : "",
  label : "",
  oldContent: ""
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

  setRecipient (state, recipient) {
    state.recipient = recipient
  },
  setLabel (state, label) {
    state.label = label
  },
  setOldContent (state, oc) {
    state.oldContent = oc
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
