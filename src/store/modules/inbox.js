//import shop from '../../api/shop'
import { fetchDocument } from 'tripledoc';
import { ldp } from 'rdf-namespaces'

// initial state
const state = () => ({
  webId: null,
  storage: null,
  inbox_urls: [],
  inbox_log_file: null,

  reply : {},
  toTrash: {},

  inbox: {},



})

// getters
const getters = {}

// actions
const actions = {
  async setUser (context, user) {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ User action IN INBOX STORE", user)

    if (user != null){
      context.commit('setWebId', user.webId)
      context.commit('setStorage', user.storage)
      let profileDoc = await fetchDocument(user.webId);
      const p = profileDoc.getSubject(user.webId)
      let inbox_urls = await  p.getAllRefs(ldp.inbox )
      context.commit('setInboxUrls', inbox_urls)
      let inbox_log_file = user.storage+"popock/inbox_log.ttl"
      context.commit('setInboxLogFile', inbox_log_file)

    }else{
      context.commit('setWebId', null)
      context.commit('setStorage', null)
      context.commit('setInboxUrls', [])
      context.commit('setInboxLogFile', null)
    }

  }
  /*getAllProducts ({ commit }) {
  shop.getProducts(products => {
  commit('setProducts', products)
})
}*/
}

// mutations
const mutations = {
  setWebId(state, webId){
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$WEBID mutation IN INBOX STORE", webId)
    state.webId = webId
  },
  setStorage (state, storage) {
    state.storage = storage
  },
  setInboxLogFile (state, inbox_log_file) {
    state.inbox_log_file = inbox_log_file
  },
  setInboxUrls (state, inbox_urls) {
    state.inbox_urls = inbox_urls
  },
  setReply (state, reply) {
    state.reply = reply
  },
  setToTrash (state, tt) {
    state.toTrash = tt
  },
  setInbox (state, inbox) {
    state.inbox = inbox
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
