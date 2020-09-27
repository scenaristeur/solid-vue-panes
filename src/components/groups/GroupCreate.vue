<template>
  <div class="group-create">

    <b-modal id="new-group-modal" title="New Group" @ok="add">
      <b-form-group>
        <label for="name">Group Name</label>
        <b-form-input id="name" v-model="name" :placeholder="'ex: '+name"></b-form-input>
        <label for="purpose">Group Purpose</label>
        <b-form-input id="purpose" v-model="purpose" placeholder="ex: Build Solid Cool apps..."></b-form-input>

        <div v-if="this.tension.length > 0">
          <label for="parent">Dedicated to </label>
          <b-form-input id="tension" v-model="this.tension" placeholder="attached to tension"></b-form-input>
        </div>
        <label for="parent">Parent / Supercircle</label>
        <b-form-input id="parent" v-model="parent" placeholder="ex: Supercircle"></b-form-input>

        <label for="url">Group location</label>
        <b-form-input id="url" v-model="url" :placeholder="'ex: '+url"></b-form-input>
      </b-form-group>
    </b-modal>

    <a v-bind:href="url" target="_blank">{{url}}</a>

  </div>
</template>

<script>
// @ is an alias to /src
import { createDocument, fetchDocument } from 'tripledoc';
import { vcard, dct, foaf, ldp, rdfs, rdf} from 'rdf-namespaces' //
import groupsMixin from '@/mixins/groupsMixin'
//const { namedNode } = require('@rdfjs/data-model');
import ActivityMixin from '@/mixins/ActivityMixin.js'
export default {
  // see permissions ? https://vuejsdevelopers.com/2018/01/08/vue-js-roles-permissions-casl/
  name: 'GroupCreate',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
mixins: [groupsMixin, ActivityMixin],
data() {
  return {
    name: "CoolGroup",
    purpose: "",
    parent: "",
    pubPod: "https://agora.solid.community/public/popock/inbox/", // REVOIR ACTIVITY MIXIN !!!

  }
},
created(){
  this.$route.params.tension != undefined ?   this.tension = this.$route.params.tension :""
  console.log("TEnsion", this.tension)
  if (this.tension.length > 0 ){
    this.$bvModal.show("new-group-modal")
    this.purpose = "This group aims to treat "+this.tension
  }


},
watch: {
  '$route' (to) {
    //  '$route' (to, from) {
    //  console.log(to)
    //  this.url = to.params.url // || this.storage+"public/groups/"
    //  console.log(this.url)
    //  this.initGroups(to.params.url)
    this.tension = to.params.tension
    console.log("tension",this.tension)
    if (this.tension.length > 0 ){
      this.$bvModal.show("new-group-modal")
      this.purpose = "This group aims to treat "+this.tension
    }
    //  this.updateFriends()
    //  this.updateIndexes()
  }
},
methods:{
  async add(){
    this.name = this.name.trim()
    let ttl_name = this.name.replace(/\s/g, '_')
    console.log(this.name, this.url)
    var dateObj = new Date();
    var date = dateObj.toISOString()
    this.path = this.url+ttl_name+".ttl"
    console.log(this.path)
    // https://www.w3.org/TR/vocab-org/#org:purpose
    //http://ipocore.sourceforge.net/1.2.0/ipo-1.2.0.html#Task
    let groupDoc =    await createDocument(this.path);
    let subj =  groupDoc.addSubject({identifier:"this"})
    subj.addLiteral(vcard.fn, this.name)
    subj.addRef(ldp.inbox, "./"+ttl_name+"/inbox/")
    subj.addLiteral(dct.created, date)
    subj.addRef(foaf.maker, this.webId)
    subj.addRef(vcard.hasMember, this.webId)
    subj.addRef(vcard.hasMember, "https://spoggy-test4.solid.community/profile/card#me")
    subj.addRef(vcard.hasMember, "https://spoggy-test5.solid.community/profile/card#me")
    subj.addRef(vcard.hasMember, "https://spoggy.solid.community/profile/card#me")
    subj.addLiteral('http://www.w3.org/ns/org#purpose', this.purpose)
    subj.addRef("http://www.w3.org/ns/org#subOrganizationOf", this.parent)
    if (this.tension.length > 0){
      subj.addRef('https://www.w3.org/ns/activitystreams#object', this.tension+"#this")
      subj.addRef(foaf.topic_interest, this.tension)
      // add the group to the tension
      let tensionDoc = await fetchDocument(this.tension);
      let tensionSubj = tensionDoc.getSubject(this.tension+"#this")
      tensionSubj.addRef("https://www.w3.org/ns/activitystreams#actor", this.path+"#this")
      await tensionDoc.save();

    }

    /*  let indexSubj = chatDoc.addSubject({identifier: index, identifierPrefix: ind_prefix})
    indexSubj.addNodeRef('http://www.w3.org/2005/01/wf/flow#message',subj.asNodeRef())*/

    await groupDoc.save();
    this.$emit('created')



    this.activity=  {
      "@context": [
        "https://www.w3.org/ns/activitystreams",
        {
          "org": "http://www.w3.org/ns/org#",
          "purpose": {
            "@id": "org:purpose",
            "@type": "@id"
          },
          "subOrganizationOf": {
            "@id": "org:subOrganizationOf",
            "@type": "@id"
          }
        }
      ],
      "summary": "will Be auto-generated",
      "type": "Create",
      "actor": {
        "type": "webId",
        "name": this.webId
      },
      "object": {
        "type": "Group", // ["Group", "hc:Circle"],
        "name": this.name,
        "purpose": this.purpose,
        "url": this.path+"#this",
        "subOrganizationOf": this.parent
      }
    }
    let autoSummary = [this.activity.actor.name,
      this.activity.type,
      "a",
      this.activity.object.type,
      "with name", this.activity.object.name,
      "and purpose", this.activity.object.purpose, ". It is a subOrganizationOf ", this.activity.object.parent].join(" ")
      this.activity.summary = autoSummary

      console.log(this.activity)


      // does not work from mixin ??
      this.sendActivity()


      /*@prefix vcard: <http://www.w3.org/2006/vcard/ns#>.
      @prefix ldp: <http://www.w3.org/ns/ldp#>.

      <#this> a vcard:Group;
      vcard:fn "Solid Friends";
      ldp:inbox <./friend-requests-inbox/>;
      vcard:hasMember <https://friend1.inrupt.net/profile/card#me>;
      vcard:hasMember <https://friend2.inrupt.net/profile/card#me>.*/

    },
    async sendActivity(){
      console.log(this.activity)
      console.log(this.activity.actor.name, this.activity.type, this.activity.summary, this.date)

      var dateObj = new Date();
      let d = this.formatDate(dateObj)
      let fileUrl = this.pubPod+d+".ttl"
      var messageId = "Activity_"+dateObj.getTime()
      var date = dateObj.toISOString()
      let activityDoc = {}
      console.log(fileUrl)
      try{
        activityDoc = await fetchDocument(fileUrl);
      }catch(e){
        activityDoc = await createDocument(fileUrl);
      }

      console.log("webId",this.webId)
      let subj =   activityDoc.addSubject({identifier:messageId})
      //subj.addLiteral(sioc.content, this.activity)
      subj.addLiteral(rdfs.label, this.activity.summary)
      subj.addLiteral(dct.created, date)
      subj.addRef(foaf.maker, this.activity.actor.name)
      subj.addRef('https://www.w3.org/ns/activitystreams#actor', this.activity.actor.name)
      subj.addRef(rdf.type, 'https://www.w3.org/ns/activitystreams#'+this.activity.type)
      subj.addLiteral('https://www.w3.org/ns/activitystreams#summary', this.activity.summary)
      subj.addRef('https://www.w3.org/ns/activitystreams#object', this.activity.object.url)
      await activityDoc.save();

    },
  },
  computed:{
    webId:{
      get: function() { return this.$store.state.solid.webId},
      set: function() {}
    },
    storage:{
      get: function() { return this.$store.state.solid.storage},
      set: function() {}
    },
    url:{
      get: function() { return this.$store.state.solid.storage+"public/groups/"},
      set: function() {}
    }
  },
}
</script>
