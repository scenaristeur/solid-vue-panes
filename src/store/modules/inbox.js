
import { ldp } from 'rdf-namespaces'

let websocket, socket

const state = () => ({
  config: null,
  reply : {},
  toTrash: {},
  inbox: {files:[]},
})

const getters = {}

const actions = {
  async setUser (context, user) {
    if (user != null){
      let config = {}
      config.webId = user.webId
      config.storage = user.storage
      config.inbox_log_file = user.storage+"popock/inbox_log.ttl"
      let profileDoc = await context.rootState.solid.fc.readFile(user.webId);
      const p = profileDoc.getSubject(user.webId)
      config.inbox_urls = await  p.getAllRefs(ldp.inbox )
      context.commit('setInboxConfig', config)
      let  inbox = await context.rootState.solid.fc.readFolder(config.inbox_urls[0])
      context.commit('setInbox', inbox)
      // websocket
      websocket = "wss://"+config.inbox_log_file.split('/')[2];
      socket = new WebSocket(websocket, ['solid.0.1.0']);
      socket.onopen = function() {
        this.send('sub '+config.inbox_log_file);
        console.log("--------- STORE SUBSCRIBE TO INBOX",websocket, config.inbox_log_file)
      }
      socket.onmessage = async function(msg) {
        if (msg.data && msg.data.slice(0, 3) === 'pub') {
          console.log(msg.data)
          let  inbox = await context.rootState.solid.fc.readFolder(config.inbox_urls[0])
          context.commit('setInbox', inbox)
        }
      };
    }else{
      context.commit('setInboxConfig', null)
      context.commit('setInbox', {files: []})
    }
  }
}

const mutations = {
  setInboxConfig(state, config){
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Inbox Config mutation IN INBOX STORE", config)
    state.config = config
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
