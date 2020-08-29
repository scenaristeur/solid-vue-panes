<template>
  <div class="group-create">

    <b-modal id="new-group-modal" title="New Group" @ok="add">
      <b-form-group>
        <label for="name">Group Name</label>
        <b-form-input id="name" v-model="name" :placeholder="'ex: '+name"></b-form-input>
        <label for="purpose">Group Purpose</label>
        <b-form-input id="purpose" v-model="purpose" placeholder="ex: Build Solid Cool apps..."></b-form-input>
        <label for="parent">Parent / Supercircle</label>
        <b-form-input id="parent" v-model="parent" placeholder="ex: Supercircle"></b-form-input>

        <label for="url">Group url</label>
        <b-form-input id="url" v-model="url" :placeholder="'ex: '+url"></b-form-input>
      </b-form-group>
    </b-modal>

    <a v-bind:href="url" target="_blank">{{url}}</a>

  </div>
</template>

<script>
// @ is an alias to /src
import { createDocument } from 'tripledoc';
import { vcard, dct, foaf, ldp} from 'rdf-namespaces' //
import groupsMixin from '@/mixins/groupsMixin'
//const { namedNode } = require('@rdfjs/data-model');

export default {
  name: 'GroupCreate',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
data() {
  return {
    name: "CoolGroup",
    purpose: "",
    parent: "",
      mixins: [groupsMixin],
  }
},
methods:{
  async add(){
    console.log(this.name, this.url)
    var dateObj = new Date();
    var date = dateObj.toISOString()
    this.path = this.url+this.name+".ttl"
    // https://www.w3.org/TR/vocab-org/#org:purpose
    let groupDoc =    await createDocument(this.path);
    let subj =   groupDoc.addSubject({identifier:"this"})
    subj.addLiteral(vcard.fn, this.name)
    subj.addNodeRef(ldp.inbox, "./"+this.name+"/inbox/")
    subj.addLiteral(dct.created, date)
    subj.addNodeRef(foaf.maker, this.webId)
    subj.addNodeRef(vcard.hasMember, this.webId)
    subj.addNodeRef(vcard.hasMember, "https://spoggy-test4.solid.community/profile/card#me")
    subj.addNodeRef(vcard.hasMember, "https://spoggy-test5.solid.community/profile/card#me")
    subj.addNodeRef(vcard.hasMember, "https://spoggy.solid.community/profile/card#me")
    subj.addLiteral('http://www.w3.org/ns/org#purpose', this.purpose)
    subj.addNodeRef("http://www.w3.org/ns/org#subOrganizationOf", this.parent)

    /*  let indexSubj = chatDoc.addSubject({identifier: index, identifierPrefix: ind_prefix})
    indexSubj.addNodeRef('http://www.w3.org/2005/01/wf/flow#message',subj.asNodeRef())*/

    await groupDoc.save();
    this.$emit('created')
    /*@prefix vcard: <http://www.w3.org/2006/vcard/ns#>.
    @prefix ldp: <http://www.w3.org/ns/ldp#>.

    <#this> a vcard:Group;
    vcard:fn "Solid Friends";
    ldp:inbox <./friend-requests-inbox/>;
    vcard:hasMember <https://friend1.inrupt.net/profile/card#me>;
    vcard:hasMember <https://friend2.inrupt.net/profile/card#me>.*/

  }
},
computed:{
  webId(){
    return this.$store.state.solid.webId
  },
  storage(){
    return this.$store.state.solid.storage
  },
  url:{
    get: function() { return this.$store.state.solid.storage+"public/groups/"},
    set: function() {}
  }
},
}
</script>
