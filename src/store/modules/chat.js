//import shop from '../../api/shop'

// initial state
const state = () => ({
  channel : null,
  users: {"https://spoggy-test3.solidcommunity.net/profile/card#me": {pic:"boo"}},
  root: "",
  //  dataDate: "",
  //  path: "",
  fileUrl: "",
  //  requests: [],
  messages: []
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
  setChannel(state, channel){
    console.log(channel)
    state.channel = channel
  },
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
