
const state = () => ({
  groups: [],
  currentGroup: {},

})


const getters = {}

// actions
const actions = {
}

// mutations
const mutations = {
  setGroups(state, groups){
    state.groups = groups
  },
  setCurrentGroup(state, group){
    state.currentGroup = group
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
