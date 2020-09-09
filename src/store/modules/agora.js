//import { fetchDocument } from 'tripledoc';
//import { ldp } from 'rdf-namespaces'
/*import auth from 'solid-auth-client';
const SolidFileClient = window.SolidFileClient
const fc = new SolidFileClient(auth)*/
import {
  getSolidDataset,
  getThingAll,
  //  getStringNoLocale,
} from "@inrupt/solid-client";
//import { FOAF } from "@inrupt/vocab-common-rdf";

let websocket, socket

const state = () => ({
  config: null,
  pubPod: "",
  activities: [],
})

const getters = {}

const actions = {
  async setPubPod (context, pubPod) {
    // websocket
    console.log("pubPod",pubPod)
    context.commit('setPubPod', pubPod)
    let d = new Date()
    let date =  [d.getFullYear(), ("0" + (d.getMonth() + 1)).slice(-2), ("0" + d.getDate()).slice(-2)].join("-")
    let fileUrl = pubPod+date+".ttl"
    websocket = "wss://"+pubPod.split('/')[2];
    socket = new WebSocket(websocket, ['solid.0.1.0']);
    socket.onopen = function() {
      this.send('sub '+fileUrl);
      console.log("--------- STORE SUBSCRIBE TO Agora",websocket, fileUrl)
    }
    socket.onmessage = async function(msg) {
      if (msg.data && msg.data.slice(0, 3) === 'pub') {
        console.log(msg.data)
        const activityResource = await getSolidDataset(fileUrl);
        const activities = getThingAll(activityResource);
          context.commit('setActivities', activities)
      }
    };
    const activityResource = await getSolidDataset(fileUrl);
    const activities = getThingAll(activityResource);
    context.commit('setActivities', activities)

  }
}

const mutations = {
  setActivities (state, activities) {
    state.activities = activities.reverse()
  },
  setPubPod (state, pubPod) {
    console.log(pubPod)
    state.pubPod = pubPod
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
