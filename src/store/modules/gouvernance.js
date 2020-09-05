
const state = () => ({
  groups:[],

})


const getters = {}

// actions
const actions = {
}

// mutations
const mutations = {
  setGroups(state, groups){
    state.groups = groups
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
