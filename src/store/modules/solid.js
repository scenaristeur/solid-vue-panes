//const solid= window.solid
//  this.webId =
import auth from 'solid-auth-client';
//import { fetchDocument } from 'tripledoc';
//import { vcard, foaf /*sioc, dct, foaf*/ } from 'rdf-namespaces'

const SolidFileClient = window.SolidFileClient
console.log("SFC", SolidFileClient)
const fc = new SolidFileClient(auth)
// initial state
const state = () => ({
  webId : null,
  //Storage / Browser
  storage : "",
  folder: {},
  file: {},
  content: "",
  //Profile
  profile: {},
  friends:[],
  indexes: {puti: {instances: {}, classes: {}}, prti: {instances: {}, classes: {}}},
  // Progress
  progressMax: 14,
  progressValue: 0,
})

// getters
const getters = {}

// actions
const actions = {
  async setWebId (context, webId) {
    //  console.log(webId)
    context.commit('setWebId', webId)
  //  context.dispatch('inbox/setWebId', webId, { root: true })
    if ( webId != null ){
      context.commit('setWebId', webId)
      context.commit('setProgress', 1)
      let storage =  await solid.data[webId].storage
      context.commit('setStorage', `${storage}`)
      context.commit('setProgress', 2)
      //  let folder = await fc.readFolder(`${storage}` , {links:"include_possible"})
      context.commit('setFolder', await fc.readFolder(`${storage}`))
      context.commit('setProgress', 3)
      context.commit('setProgress', 14)
      let user = {webId: webId, storage:storage}
      context.dispatch('inbox/setUser', user, { root: true })

    }else{
      context.commit('setStorage', null)
      context.commit('setFolder', null)
      context.dispatch('inbox/setUser', null, { root: true })
    }
  },
  async updateFolder (context, url) {
    let folder = await fc.readFolder(url)
    context.commit('setFolder', folder)
    /*  let folder = await fc.readFolder(url,  {links:"include_possible"})
    let acl = ""
    try{
    acl = await fc.readFile(folder.links.acl)
  }catch(e){
  console.log(e)
  acl = null
}
folder.acl = acl*/
//    console.log("update", folder)

},
async updateFile (context, file) {
  context.commit('setFile', file)
  context.commit('setContent', await fc.readFile(file.url))
  /*
  file.content = await fc.readFile(file.url, {links:"include_possible"})
  let acl = ""
  try{
  acl = await fc.readFile(file.links.acl)
}catch(e){
//  console.log(e)
acl = null
}
file.acl = acl*/
},
async writeFile(context, file){
  await fc.createFile(file.path+file.name, file.content, file.contentType).then((content) => {
    console.log(content.status)
  })
  .catch(err => console.error(`Error: ${err}`))
  context.commit('setStorage', this.path)
}
}

// mutations
const mutations = {
  setWebId (state, webId) {
    ///  console.log("webId",webId)
    state.webId = webId
  },
  setProfile (state, profile){
    state.profile = profile
  },
  setIndexes (state, indexes){
    state.indexes = indexes
  },

  setStorage (state, st) {
    //  console.log("storage",st)
    state.storage = st
  },
  setFolder (state, f) {
    //  console.log("folder",f)
    //  console.log(f.links.meta)
    state.folder = f
  },
  setFile (state, f) {
    state.file = f
  },
  setContent (state, c) {
    state.content = c
  },

  setProgress(state, n){
    state.progressValue = n
  },
  setFriends(state, f){
    state.friends = f
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
