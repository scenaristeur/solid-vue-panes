//import shop from '../../api/shop'

// initial state
const state = () => ({
  users: {"https://spoggy-test3.solidcommunity.net/profile/card#me": {pic:"boo"}},
  root: "",
  //  dataDate: "",
  //  path: "",
  fileUrl: "",
  //  requests: [],
  messages: [],
  url: ""
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
    console.log(root)
    state.root = root
  },
  setMessages(state,messages){
    state.messages = messages
  },
  setUrl(state, url){
    state.url = url
  },
  /*
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
