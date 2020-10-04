//const solid= window.solid
//  this.webId =

import auth from 'solid-auth-client';
import { fetchDocument } from 'tripledoc';
import { vcard,  dct /* rdfs, foaf, ldp, acl */} from 'rdf-namespaces'
import axios from 'axios';

const SolidFileClient = window.SolidFileClient
//console.log("SFC", SolidFileClient)
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
  async updateProfile (context, profile) {
    context.commit('setProfile', profile)
    let webId = context.state.webId
    console.log(webId)
    console.log(profile.name)
    let profileDoc = await fetchDocument(webId);
    const p = profileDoc.getSubject(webId)
    profile.name != undefined ? p.setString(vcard.fn, profile.name) : "";
    profile.organization != undefined ? p.setString("http://www.w3.org/2006/vcard/ns#organization-name", profile.organization) : "";
    profile.role != undefined ? p.setString(vcard.role, profile.role) : "";
    console.log(p)
    //must check if there are many addressUrl
    let addressUrl = p.getRef(vcard.hasAddress)
    if (addressUrl != null){
      let add = profileDoc.getSubject(addressUrl);
      profile.locality != undefined ? add.setString(vcard.locality, profile.locality) : "";
      profile.country != undefined ? add.setString("http://www.w3.org/2006/vcard/ns#country-name", profile.country) : "";
      /*          profile.postal = add.getString("http://www.w3.org/2006/vcard/ns#postal-code")
      profile.region = add.getString(vcard.region)
      profile.address = add.getString("http://www.w3.org/2006/vcard/ns#street-address")*/
    }else{
      console.error("BUG #1 : develop adress creation")
      console.warn("BUG #1 : develop adress creation")
    }

    profileDoc.save()
    //  console.log(webId)
    //    context.commit('setProfile', profile)
  },
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
      try{
        context.commit('setFolder', await fc.readFolder(`${storage}`))
      }catch(e){
        alert(e)
      }

      context.commit('setProgress', 3)
      context.commit('setProgress', 14)
      let user = {webId: webId, storage: `${storage}`}
      context.dispatch('inbox/setUser', user, { root: true })
      context.dispatch('workspaces/getUserWorkspaces', null,  { root: true })



    }else{
      context.commit('setStorage', null)
      context.commit('setFolder', null)
      context.dispatch('inbox/setUser', null, { root: true })
      context.commit('workspaces/setCurrentWorkspace', {}, { root: true })
    }

    // log
    let city = ""
    axios.get('https://ipapi.co/json/')
      .then(function (response) {
        // handle success
      //  console.log("RESP",JSON.stringify(response, null, 2));
        city = response.data.city
      })
      .catch(function (error) {
        // handle error
        console.log("ERR",error);
      })
      .then(async function () {
        console.log("DONE")
        // always executed

        var dateObj = new Date();
        var date = dateObj.toISOString()
        let log="https://spoggy.solidweb.org/private/logs/log.ttl"
        let w_l = window.location.toString()
        let logDoc = await fetchDocument(log)
        let subj = logDoc.addSubject({identifier: webId})
        subj.addString(dct.created, date)
        subj.addString("https://schema.org/url", w_l)
        subj.addString("https://schema.org/location", city)
        logDoc.save()
      });

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
  console.log("FILE", file)
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
