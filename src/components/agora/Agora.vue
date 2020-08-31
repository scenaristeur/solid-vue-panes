<template>
  <div class="modele container">
    <!--  <COMPONENET />  -->



    <b-input-group prepend="Activity Pub Pod" class="mt-3">
      <b-form-input v-model="pubPod"></b-form-input>
    </b-input-group>
    <small><a v-bind:href="pubPod" target="_blank">{{ pubPod }}</a></small>


    <b-input-group prepend="Summary" class="mt-3">
      <b-form-input v-model="activity.summary"></b-form-input>
    </b-input-group>
    <b-input-group prepend="Type" class="mt-3">
      <b-form-input v-model="activity.type"></b-form-input>
    </b-input-group>
    Actor
    <b-input-group prepend="Actor Type" class="mt-3">
      <b-form-input v-model="activity.actor.type"></b-form-input>
    </b-input-group>
    <b-input-group prepend="Actor Name" class="mt-3">
      <b-form-input v-model="activity.actor.name"></b-form-input>
    </b-input-group>
    Object
    <b-input-group prepend="Object Type" class="mt-3">
      <b-form-input v-model="activity.object.type"></b-form-input>
    </b-input-group>
    <b-input-group prepend="Object Name" class="mt-3">
      <b-form-input v-model="activity.object.name"></b-form-input>
    </b-input-group>
    <b-input-group prepend="Object Purpose" class="mt-3">
      <b-form-input v-model="activity.object.purpose"></b-form-input>
    </b-input-group>
    <b-button class="mt-3" @click="send" variant="outline-info">Send</b-button>


  </div>
</template>

<script>
import { fetchDocument, createDocument } from 'tripledoc';
import {/*namedNode, sioc,*/  dct, foaf, rdfs, rdf } from 'rdf-namespaces'

export default {
  name: 'Agora',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
data: function () {
  return {
    pubPod: "https://agora.solid.community/public/popock/inbox/",
    activity:  {
      "@context": [
        "https://www.w3.org/ns/activitystreams",
        {
          "hc": "https://smag0.solid.community/holacracy/ns#",
          "purpose": {
            "@id": "hc:purpose",
            "@type": "@id"
          }
        }
      ],
      "summary": "Sally created a circle",
      "type": "Create",
      "actor": {
        "type": "Person",
        "name": "Sally"
      },
      "object": {
        "type": "Group", // ["Group", "hc:Circle"],
        "name": "A Simple Circle",
        "purpose": "This is a simple circle to represent the Solid Community"
      }
    }

  }
},
created(){
  let d = new Date()
  this.date = this.formatDate(d)

  console.log(this.date)
  this.webId = this.$store.state.solid.webId
  console.log("WWWwebId", this.webId)
  this.storage = this.$store.state.solid.storage
  this.$store.dispatch('agora/setPubPod', this.pubPod)
},
watch: {

  async activities (activities) {
    console.log("ACTIVITIES",activities.length, activities)
  },
},
methods: {
  async   send() {
    console.log(this.activity)
    console.log(this.activity.actor.name, this.activity.type, this.activity.summary, this.date)
    let fileUrl = this.pubPod+this.date+".ttl"
    var dateObj = new Date();
    var messageId = "Activity_"+dateObj.getTime()
    var date = dateObj.toISOString()
    let activityDoc = {}
    try{
      activityDoc = await fetchDocument(fileUrl);
    }catch(e){
      activityDoc = await createDocument(fileUrl);
    }

    console.log("webId",this.webId)
    let autoSummary = [this.activity.actor.name, this.activity.type, "a", this.activity.object.type, "with name", this.activity.object.name].join(" ")
    console.log("Musr create outbox object first, then activity !",activityDoc, messageId, date)
    let subj =   activityDoc.addSubject({identifier:messageId})
    //subj.addLiteral(sioc.content, this.activity)
    subj.addLiteral(rdfs.label, autoSummary)
    subj.addLiteral(dct.created, date)
    subj.addRef(foaf.maker, this.webId)
    subj.addRef('https://www.w3.org/ns/activitystreams#actor', this.webId)
    subj.addRef(rdf.type, 'https://www.w3.org/ns/activitystreams#'+this.activity.type)
    subj.addLiteral('https://www.w3.org/ns/activitystreams#summary', this.activity.summary)
    subj.addRef('https://www.w3.org/ns/activitystreams#type', 'https://www.w3.org/ns/activitystreams#'+this.activity.type)
    subj.addLiteral('https://www.w3.org/ns/activitystreams#object', "test"+this.activity.object)
    await activityDoc.save();

    // put something in outbox
    //put something in Agora inbox
    //https://agora.solid.community/public/agora/inbox/

  },
  formatDate(d) {
    return [d.getFullYear(), ("0" + (d.getMonth() + 1)).slice(-2), ("0" + d.getDate()).slice(-2)].join("-")
  },

},
computed:{
  webId: {
    get: function() { return this.$store.state.solid.webId},
    set: function() {}
  },
  storage:{
    get: function() { return this.$store.state.solid.storage},
    set: function() {}
  },
  activities:{
    get: function() { return this.$store.state.agora.activities},
    set: function() {}
  },

}
}
</script>
