//import shop from '../../api/shop'

// initial state
const state = () => ({
  users: {"https://spoggy-test3.solid.community/profile/card#me": {pic:"boo"}},
  root: "",
  //  dataDate: "",
  //  path: "",
  fileUrl: "",
  //  requests: [],
  //  messages: []
})

// getters
const getters = {}

// actions
const actions = {
  /*requestUpdate(state, url){

  //state.requests.push(url)
}*/
}

// mutations
const mutations = {
  setUser(state, user){
    console.log("User",user)
    let webId = user.webId
    let pic = user.pic
    state.users[webId]= pic
  },
  setFileUrl(state, fileUrl){
    state.fileUrl = fileUrl
  },
  setRoot (state, root) {
    state.root = root
  },/*
  setPath(state, path){
  state.path = path
},
setMessages(state,messages){
state.messages = messages
},
setDataDate(state, date){
state.dataDate = date
},*/


}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
