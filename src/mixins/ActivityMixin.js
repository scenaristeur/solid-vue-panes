import { fetchDocument, createDocument } from 'tripledoc';
import {/*namedNode, sioc,*/  dct, foaf, rdfs, rdf } from 'rdf-namespaces'
export default {
  created(){
    this.webId = this.$store.state.solid.webId
    //  console.log("ActivityMixin WEBID CREATED",this.webId)
    this.config(this.webId)
    let d = new Date()
    this.date = this.formatDate(d)
    //  console.log(this.as)
    //  console.log(this.date)
    //  this.$store.dispatch('agora/setPubPod', this.pubPod)
  },

  methods: {
    async sendActivity(){
      console.log(this.activity)
      var dateObj = new Date();
      var messageId = "Activity_"+dateObj.getTime()
      var date = dateObj.toISOString()
      let d = this.formatDate(dateObj)
      console.log(this.activity.actor.name, this.activity.type, this.activity.summary, d)
      let fileUrl = this.pubPod+d+".ttl"

      let activityDoc = {}
      try{
        activityDoc = await fetchDocument(fileUrl);
      }catch(e){
        activityDoc = await createDocument(fileUrl);
      }

      console.log("webId",this.webId)
      if(this.activity.summary.length <1 ){
        this.activity.summary = [this.activity.actor.name, this.activity.type, "a", this.activity.object.type, "with name", this.activity.object.name].join(" ")
      }
      let subj = activityDoc.addSubject({identifier:messageId})
      //subj.addLiteral(sioc.content, this.activity)
      subj.addLiteral(rdfs.label, this.activity.object.name)
      subj.addLiteral(dct.created, date)
      subj.addRef(foaf.maker, this.webId)
      subj.addRef('https://www.w3.org/ns/activitystreams#actor', this.webId)
      subj.addRef(rdf.type, 'https://www.w3.org/ns/activitystreams#'+this.activity.type)
      subj.addLiteral('https://www.w3.org/ns/activitystreams#summary', this.activity.summary)
      subj.addRef('https://www.w3.org/ns/activitystreams#object', this.activity.object.url)
    this.currentWorkspace != undefined ?  subj.addRef(rdf.type, this.currentWorkspace.path+this.activity.object.type) : subj.addRef(rdf.type, this.activity.object.url+"#"+this.activity.object.type)
      /*  console.log("PART1 OK")
      let object_subj =   activityDoc.addSubject({identifier:this.activity.object.url})
      object_subj.addLiteral(rdf.type, this.activity.object.type)
      object_subj.addLiteral(rdfs.label, this.activity.object.name)
      console.log("PART2 OK")*/

      await activityDoc.save();

    },
    async   send() {
      console.log(this.activity)
      //console.log(this.activity.actor.name, this.activity.type, this.activity.summary, this.date)
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

      //console.log("webId",this.webId)
      let autoSummary = [this.activity.actor.name, this.activity.type, "a", this.activity.object.type, "with name", this.activity.object.name].join(" ")
      //console.log("Musr create outbox object first, then activity !",activityDoc, messageId, date)
      let subj =   activityDoc.addSubject({identifier:messageId})
      //subj.addLiteral(sioc.content, this.activity)
      subj.addLiteral(rdfs.label, autoSummary)
      subj.addLiteral(dct.created, date)
      subj.addRef(foaf.maker, this.webId)
      subj.addRef('https://www.w3.org/ns/activitystreams#actor', this.webId)
      subj.addRef(rdf.type, 'https://www.w3.org/ns/activitystreams#'+this.activity.type)
      subj.addLiteral('https://www.w3.org/ns/activitystreams#summary', this.activity.summary)
      subj.addRef('https://www.w3.org/ns/activitystreams#object', this.activity.object.url)
      await activityDoc.save();

      // put something in outbox
      //put something in Agora inbox
      //https://agora.solidcommunity.net/public/agora/inbox/

    },
    formatDate(d) {
      return [d.getFullYear(), ("0" + (d.getMonth() + 1)).slice(-2), ("0" + d.getDate()).slice(-2)].join("-")
    },
    postActivity(){

    },
    config(webId){
      this.config = {}
      this.config.webId = webId

      //console.log("ActivityMixin config", this.config)
    }
  },
  webId: {
    webId (webId) {
      this.config(webId)
    },
  },
  computed:{
    webId: {
      get: function() { return this.$store.state.solid.webId},
      set: function() {}
    },
    activities:{
      get: function() { return this.$store.state.agora.activities},
      set: function() {}
    },
  },
  data: function () {
    return {
      as: {
        core: [
          "Object",
          "Link",
          "Activity",
          "IntransitiveActivity",
          "Collection",
          "OrderedCollection",
          "CollectionPage",
          "OrderedCollectionPage",
        ],
        activity:[
          "Accept",
          "Add",
          "Announce",
          "Arrive",
          "Block",
          "Create",
          "Delete",
          "Dislike",
          "Flag",
          "Follow",
          "Ignore",
          "Invite",
          "Join",
          "Leave",
          "Like",
          "Listen",
          "Move",
          "Offer",
          "Question",
          "Reject",
          "Read",
          "Remove",
          "TentativeReject",
          "TentativeAccept",
          "Travel",
          "Undo",
          "Update",
          "View",
        ],
        actor: [
          "Application",
          "Group",
          "Organization",
          "Person",
          "Service",
        ],
        object: [
          "Article",
          "Audio",
          "Document",
          "Event",
          "Image",
          "Note",
          "Page",
          "Place",
          "Profile",
          "Relationship",
          "Tombstone",
          "Video",
          "Mention",
        ]
      },
      /*  activity:  {
      "@context": [
      "https://www.w3.org/ns/activitystreams",
      {
      "hc": "https://smag0.solidcommunity.net/holacracy/ns#",
      "purpose": {
      "@id": "hc:purpose",
      "@type": "@id"
    }
  }
],
"summary": "Sally created a circle",
"type": "Create",
"actor": {
"type": "webId",
"name": "Sally"
},
"object": {
"type": "Group", // ["Group", "hc:Circle"],
"name": "A Simple Circle",
"purpose": "This is a simple circle to represent the Solid Community"
}
},*/
pubPod: "https://agora.solidcommunity.net/public/popock/inbox/",

}
},
}
