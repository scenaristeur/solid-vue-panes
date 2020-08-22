//import shop from '../../api/shop'

// initial state
const state = () => ({
  recipient : "",
  label : "",
  oldContent: "",
  toTrash: ""
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
