<template>
  <div class="groups-view">
    <!--  <Component /> -->

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
import FC from 'solid-file-client'
const fc = new FC( auth )
import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'GroupEdit',
  mixins: [ToastMixin],
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
      subj.addLiteral(rdfs.label, name)
      subj.addNodeRef(vcard.hasMember, this.webId)
      subj.addNodeRef(vcard.hasMember, "https://spoggy-test4.solidcommunity.net/profile/card#me")
      subj.addNodeRef(vcard.hasMember, "https://spoggy-test5.solidcommunity.net/profile/card#me")
      subj.addNodeRef(vcard.hasMember, "https://spoggy.solidcommunity.net/profile/card#me")
      subj.addNodeRef('http://www.w3.org/ns/org#purpose', 'http://www.w3.org/ns/org#Organization')
      subj.addLiteral('http://www.w3.org/ns/org#purpose', this.group.purpose)


      try{
        await groupDoc.save();
        this.makeToast("Group created", fileUrl, "success")
        //  this.$emit('created')
        //  this.init()
      }
      catch(e){
        this.makeToast("Group creation error", fileUrl+e, "danger")
      }

      if (this.group.parent != undefined){
        try{
          let parent = this.group.parent+"index.ttl"
          subj.addNodeRef("http://www.w3.org/ns/org#subOrganizationOf", parent)
          let parentDoc =    await fetchDocument(parent);
          let pSubj = parentDoc.getSubject(parent+"#this")
          pSubj.addNodeRef("http://www.w3.org/ns/org#hasSubOrganization", fileUrl)
          await parentDoc.save();
          this.makeToast("Parent updated", parent, "success")
        }catch(e){
          this.makeToast("Parent update error", parent+e, "danger")

        }
      }

      /*  let indexSubj = chatDoc.addSubject({identifier: index, identifierPrefix: ind_prefix})
      indexSubj.addNodeRef('http://www.w3.org/2005/01/wf/flow#message',subj.asNodeRef())*/

      this.group = {}
      this.folder = await fc.readFolder(url)
      console.log("FOLDER",this.folder)
      this.$store.commit('gouvernance/setGroups', this.folder)







    },
    setOptions(){
      this.options = []
      this.groups.folders.forEach((f) => {
        //  console.log(f)
        this.options.push({value:f.url, text:decodeURI(f.name)})
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
