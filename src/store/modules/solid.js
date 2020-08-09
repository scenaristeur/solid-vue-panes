//import shop from '../../api/shop'
const solid= window.solid
//  this.webId =
import auth from 'solid-auth-client';
import { fetchDocument } from 'tripledoc';
import { vcard, /*sioc, dct, foaf*/ } from 'rdf-namespaces'

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
  profileDoc: {},
  name: "",
  organization: "",
  role: "",
  bday: "",
  gender: "",
  photo: "",
  address: {},
  note: "",
  progressMax: 13,
  progressValue: 0,

  /*chatPath : "",
  messages : ["one", "two"]*/
})

// getters
const getters = {}

// actions
const actions = {
  async setWebId (context, webId) {
    //  console.log(webId)
    if ( webId != null ){
      context.commit('setWebId', webId)
      context.commit('setProgress', 1)
      let storage =  await solid.data[webId].storage
      context.commit('setStorage', `${storage}`)
      context.commit('setProgress', 2)
      let folder = await fc.readFolder(`${storage}` , {links:"include_possible"})
      context.commit('setFolder', folder)
      context.commit('setProgress', 3)

      let profileDoc = await fetchDocument(webId);
      context.commit('setProfileDoc', profileDoc)
      context.commit('setProgress', 4)
      const profile = profileDoc.getSubject(webId);
      let name = await  profile.getString(vcard.fn);
      context.commit('setProgress', 5)
      console.log("NAME", name)
      context.commit('setName', name)
      context.commit('setProgress', 6)
      let org = await  profile.getString("http://www.w3.org/2006/vcard/ns#organization-name");
      console.log("org", org)
      context.commit('setOrganization', org)
      context.commit('setProgress', 7)
      let role = await  profile.getString(vcard.role);
      console.log("role", role)
      context.commit('setRole', role)
      context.commit('setProgress', 8)

      let bday = await  profile.getString(vcard.bday);
      console.log("bday", bday)
      context.commit('setBday', bday)
      context.commit('setProgress', 9)
      context.commit('setGender', await  profile.getString(vcard.hasGender ))
      context.commit('setProgress', 10)
      context.commit('setPhoto', await  profile.getString(vcard.hasPhoto))
      context.commit('setProgress', 11)
      context.commit('setNote', await  profile.getString(vcard.note))
      context.commit('setProgress', 12)
      // TODO many possible address
      let addressUrl = await  profile.getRef(vcard.hasAddress)
      console.log("Address Node ",addressUrl)
      let add = profileDoc.getSubject(addressUrl);

      context.commit('setAddress', {locality: await add.getString(vcard.locality)})
      context.commit('setProgress', 13)
    }else{
      context.commit('setWebId', null)
      context.commit('setStorage', null)
      context.commit('setFolder', null)
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

/*  send (context, message) {
console.log("in action", message, context.state.chatPath)
let date =  new Date()
let d = date.getFullYear()+"-"+("0" + (date.getMonth() + 1)).slice(-2)+"-"+("0" + date.getDate()).slice(-2)
console.log(d, context.state.webId)
//  context.commit('send', message)
let path = context.state.chatPath+d+".ttl"
console.log(path, context.state.webId)
context.commit('send', message)
//await solid[]
}*/

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
  setStorage (state, st) {
    state.storage = st
  },
  setFolder (state, f) {
    //  console.log(f)
    //  console.log(f.links.meta)
    state.folder = f
  },
  setFile (state, f) {
    state.file = f
  },
  setContent (state, c) {
    state.content = c
  },
  setProfileDoc(state, p){
    state.profileDoc = p
  },
  setName(state, n){
    state.name = n
  },
  setOrganization(state, o){
    state.organization = o
  },
  setRole(state, r){
    state.role = r
  },
  setBday(state, b){
    state.bday = b
  },
  setGender(state, g){
    state.gender = g
  },
  setPhoto(state, p){
    state.photo = p
  },
  setAddress(state, a){
    state.address = a
  },
  setNote(state, n){
    state.note = n
  },
  setProgress(state, n){
    state.progressValue = n
  }

  /*
  setChatPath (state, path) {
  state.chatPath = path
},
send(state, message){
state.messages.push(message)
console.log(state.messages)
// eslint-disable-next-line
console.log( "LDFLEX",solid)

},*/

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
