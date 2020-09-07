
const state = () => ({
  groups: [],
  currentGroup: {},
  config: {}

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
  },
  setWorkspace(state, ws){
    state.config.workspace = ws
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
