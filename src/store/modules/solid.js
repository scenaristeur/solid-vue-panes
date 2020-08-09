//import shop from '../../api/shop'
const solid= window.solid
//  this.webId =
import auth from 'solid-auth-client';

const SolidFileClient = window.SolidFileClient
console.log("SFC", SolidFileClient)
const fc = new SolidFileClient(auth)
// initial state
const state = () => ({
  all: [],
  webId : null,
  logged: false,
  storage : "",
  folder: {},
  file: {},
  chatPath : "",
  messages : ["one", "two"]
})

// getters
const getters = {}

// actions
const actions = {
  async setWebId (context, webId) {
    //  console.log(webId)
    if ( webId != null ){
      context.commit('setWebId', webId)
      let storage =  await solid.data[webId].storage
      context.commit('setStorage', `${storage}`)
      let folder = await fc.readFolder(`${storage}` , {links:"include_possible"})
      context.commit('setFolder', folder)
    }else{
      context.commit('setWebId', null)
      context.commit('setStorage', null)
      context.commit('setFolder', null)

    }
  },
  async updateFolder (context, url) {
    //  context.commit('setCurrentFolder', folder)
    let folder = await fc.readFolder(url,  {links:"include_possible"})
    let acl = ""
    try{
      acl = await fc.readFile(folder.links.acl)
    }catch(e){
      console.log(e)
      acl = null
    }
    folder.acl = acl
    //    console.log("update", folder)
    context.commit('setFolder', folder)
  },
  async updateFile (context, file) {
    //  context.commit('setCurrentFolder', folder)
    file.content = await fc.readFile(file.url, {links:"include_possible"})
    let acl = ""
    try{
      acl = await fc.readFile(file.links.acl)
    }catch(e){
    //  console.log(e)
      acl = null
    }
    file.acl = acl
    //  file.acl = await fc.readFile(file.links.acl)
    //    console.log("update", folder)
    context.commit('setFile', file)
  },

  send (context, message) {
    console.log("in action", message, context.state.chatPath)
    let date =  new Date()
    let d = date.getFullYear()+"-"+("0" + (date.getMonth() + 1)).slice(-2)+"-"+("0" + date.getDate()).slice(-2)
    console.log(d, context.state.webId)
    //  context.commit('send', message)
    let path = context.state.chatPath+d+".ttl"
    console.log(path, context.state.webId)
    context.commit('send', message)
    //await solid[]
  }

  /*  getAllProducts ({ commit }) {
  shop.getProducts(products => {
  commit('setProducts', products)
})
}*/
}

// mutations
const mutations = {
  setWebId (state, webId) {
    state.webId = webId
  },
  setLogged (state, logged) {
    state.logged = logged
  },
  setChatPath (state, path) {
    state.chatPath = path
  },
  send(state, message){
    state.messages.push(message)
    console.log(state.messages)
    // eslint-disable-next-line
    console.log( "LDFLEX",solid)

  },
  setStorage (state, st) {
    state.storage = st
  },
  setFolder (state, f) {
    console.log(f)
    console.log(f.links.meta)
    state.folder = f
  },
  setFile (state, f) {
    state.file = f
  },
  /*  setProducts (state, products) {
  state.all = products
},

decrementProductInventory (state, { id }) {
const product = state.all.find(product => product.id === id)
product.inventory--
}*/
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
