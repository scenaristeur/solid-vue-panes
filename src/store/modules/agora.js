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
  activities: ["DF", "FGH","HJYY"],
})

const getters = {}

const actions = {
  async setPubPod (context, pubPod) {
    // websocket
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
        //  let  activities = await fc.readFile(fileUrl)
        const activityResource = await getSolidDataset(
          fileUrl
        );

        /*
        2. Get the data entity, specified by the URL, from the Dataset.
        */

        const activities = getThingAll(
          activityResource
        );

        // 3. Retrieve the specific data item (e.g., name) from the entity.

        console.log(activities)
        /*
        let activityDoc = await fetchDocument(fileUrl);
        console.log("AD",activityDoc)
        let activities = await activityDoc.getAllSubjectsOfType("https://www.w3.org/ns/activitystreams#Create")
        */
        context.commit('setActivities', activities)
      }
    };

  }
}

const mutations = {
  setActivities (state, activities) {
    console.log(activities)
    state.activities = activities
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
