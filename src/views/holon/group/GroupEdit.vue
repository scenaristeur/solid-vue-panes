<template>
  <div class="groups-view">
    <!--  <Component /> -->
    groups create

    <b-input-group>
      <template v-slot:prepend>
        <b-input-group-text >Name</b-input-group-text>
      </template>
      <b-form-input v-model="group.name"></b-form-input>
    </b-input-group>

    <b-input-group>
      <template v-slot:prepend>
        <b-input-group-text >Purpose</b-input-group-text>
      </template>
      <b-form-textarea
      id="textarea"
      v-model="group.purpose"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
      ></b-form-textarea>
    </b-input-group>

    <b-input-group>
      <template v-slot:prepend>
        <b-input-group-text >SubGroupOf</b-input-group-text>
      </template>
      <b-form-select v-model="group.parent" :options="options"></b-form-select>
    </b-input-group>

    <b-button @click="save">Save</b-button>

  </div>
</template>

<script>
// @ is an alias to /src
import { createDocument, fetchDocument } from 'tripledoc';
import { vcard, dct, foaf, ldp, rdfs, rdf} from 'rdf-namespaces'
import auth from 'solid-auth-client';
const SolidFileClient = window.SolidFileClient
const fc = new SolidFileClient(auth)

export default {
  name: 'GroupEdit',
  components: {
    //    'GroupsView': () => import('@/views/holon/GroupsView'),

  },
  data() {
    return {
      group: {},
      options: []
    }
  },
  created() {
    //do something after creating vue instance
    this.webId = this.$store.state.solid.webId
    this.groups = this.$store.state.gouvernance.groups
  },
  watch: {
    groups (g) {
      //  '$route' (to, from) {
      console.log(g)
      this.setOptions()
    },
  },
  methods: {
    async save() {
      console.log(this.group, this.$store.state.crud.workspace)
      let url = this.$store.state.crud.workspace+'Group/'

      let name = this.group.name.trim()
      let ttl_name = name.replace(/\s/g, '_')
      console.log(name, url)
      var dateObj = new Date();
      var date = dateObj.toISOString()
      let fileUrl = url+ttl_name+"/index.ttl"
      console.log(fileUrl)
      // https://www.w3.org/TR/vocab-org/#org:purpose
      let groupDoc
      try{
        groupDoc = await fetchDocument(fileUrl);
      }catch(e){
        groupDoc = await createDocument(fileUrl);
      }
      let subj =   groupDoc.addSubject({identifier:"this"})
      subj.addLiteral(vcard.fn, name)
      subj.addNodeRef(ldp.inbox, "./"+ttl_name+"/inbox/")
      subj.addLiteral(dct.created, date)
      subj.addNodeRef(foaf.maker, this.webId)
      subj.addNodeRef(rdf.type, vcard.Group)
      subj.addNodeRef(rdfs.label, name)
      subj.addNodeRef(vcard.hasMember, this.webId)
      subj.addNodeRef(vcard.hasMember, "https://spoggy-test4.solid.community/profile/card#me")
      subj.addNodeRef(vcard.hasMember, "https://spoggy-test5.solid.community/profile/card#me")
      subj.addNodeRef(vcard.hasMember, "https://spoggy.solid.community/profile/card#me")
      subj.addLiteral('http://www.w3.org/ns/org#purpose', this.group.purpose)
      subj.addNodeRef("http://www.w3.org/ns/org#subOrganizationOf", this.group.parent)

      /*  let indexSubj = chatDoc.addSubject({identifier: index, identifierPrefix: ind_prefix})
      indexSubj.addNodeRef('http://www.w3.org/2005/01/wf/flow#message',subj.asNodeRef())*/

      await groupDoc.save();
      this.group = {}
      this.folder = await fc.readFolder(url)
      console.log("FOLDER",this.folder)
      this.$store.commit('gouvernance/setGroups', this.folder)


    },
    setOptions(){
      this.options = []
      this.groups.folders.forEach((f) => {
        console.log(f)
        this.options.push({value:f.url, text:f.name})
      });

    }
  },
  computed:{
    groups: {
      get: function() { return this.$store.state.gouvernance.groups},
      set: function() {}
    },
    webId: {
      get: function() { return this.$store.state.solid.webId},
      set: function() {}
    },

  },
}
</script>
<style>
.users-view {
  text-align: left;
}
</style>
