//import shop from '../../api/shop'

// initial state
const state = () => ({
  folders:[],
  files:[],
  mustUpdate:[]
})

// getters
const getters = {}

// actions
const actions = {

}

// mutations
const mutations = {
  addFolders (state, folders) {

    folders.forEach((f) => {
      state.folders.push(f)
    });
  },
  addFiles (state, files) {
    files.forEach((f) => {
      state.files.push(f)
    });
  },
  mustUpdate (state, file) {

    state.mustUpdate.push(file)

  },
  init(state){
    state.folders = []
    state.files = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
