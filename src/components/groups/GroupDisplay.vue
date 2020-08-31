<template>
  <div class="group-display">
    <b-card >
      <b-card-header> <router-link v-bind:to="file.parent+group.name">{{group.name || file.name}}</router-link></b-card-header>
      <b-card-text>
        <GroupMembers :url="file.url" :members="group.members"/>
        <b-button @click="open('modal-members-'+file.url)" variant="outline-info">{{ group.members.length }} Members</b-button>
        <b-button v-bind:to="{ name: 'Groups', params: { url: file.parent+group.name }}" :disabled="group.subgroups.length == 0" variant="outline-info">{{ group.subgroups.length }} subgroups</b-button>

        <div>
          <b-button-group >
            <!--  <b-button>Button</b-button>
            <b-dropdown right text="Menu">
            <b-dropdown-item>Item 1</b-dropdown-item>
            <b-dropdown-item>Item 2</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Item 3</b-dropdown-item>
          </b-dropdown>-->
          <b-dropdown variant="outline-info" right split text="menu">
            <b-dropdown-item @click="open('modal-subgroups-'+file.url)">New subgroup</b-dropdown-item>
            <!--  <b-dropdown-item>Item 2</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Item 3</b-dropdown-item>-->
          </b-dropdown>
        </b-button-group>
      </div>

    </b-card-text>

    <blockquote class="blockquote mb-0">
      <footer class="blockquote-footer">
        <div class="created">
          {{file.modified}}
        </div>
        <cite title="Purpose">{{group.purpose}}</cite>
      </footer>
    </blockquote>
  </b-card>

  <b-modal v-bind:id="'modal-subgroups-'+file.url" title="SubGroups" @ok="add">
    <b-form-group>
      <label for="name">Group Name</label>
      <b-form-input id="name" v-model="name" :placeholder="'ex: '+name"></b-form-input>
      <label for="purpose">Group Purpose</label>
      <b-form-input id="purpose" v-model="purpose" placeholder="ex: Build Solid Cool apps..."></b-form-input>
      <label for="parent">Parent / Supercircle</label>
      <b-form-input id="parent" v-model="parent" placeholder="ex: Supercircle"></b-form-input>

      <label for="url">Group location</label>
      <b-form-input id="url" v-model="url" :placeholder="'ex: '+url"></b-form-input>
    </b-form-group>
  </b-modal>

</div>
</template>

<script>
import groupsMixin from '@/mixins/groupsMixin'
import toastMixin from '@/mixins/toastMixin'

import { createDocument, fetchDocument } from 'tripledoc';
import { vcard, dct, foaf, ldp} from 'rdf-namespaces'

export default {
  name: 'GroupDisplay',
  mixins: [groupsMixin, toastMixin],
  components: {
    'GroupMembers': () => import('@/components/groups/GroupMembers'),
  },
  props: ['file'],
  data: function () {
    return {
      group: {members:[],subgroups: []},
      name: "",
      purpose: "",
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
    this.init()
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    storage (st) {
      //  '$route' (to, from) {
      console.log(st)
    }
  },
  methods:{
    async add(){
      this.name = this.name.trim().replace(/\s/g, '_')
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

      let parentDoc =    await fetchDocument(this.parent);
      let pSubj = parentDoc.getSubject(this.parent+"#this")
      pSubj.addNodeRef("http://www.w3.org/ns/org#hasSubOrganization", this.path)

      try{
        await groupDoc.save();
        await parentDoc.save();
        this.makeToast("Group created", this.path, "success")
        this.makeToast("Parent updated", this.parent, "success")

        this.$emit('created')
        this.init()
      }
      catch(e){
        alert(e)
      }

      /*@prefix vcard: <http://www.w3.org/2006/vcard/ns#>.
      @prefix ldp: <http://www.w3.org/ns/ldp#>.

      <#this> a vcard:Group;
      vcard:fn "Solid Friends";
      ldp:inbox <./friend-requests-inbox/>;
      vcard:hasMember <https://friend1.inrupt.net/profile/card#me>;
      vcard:hasMember <https://friend2.inrupt.net/profile/card#me>.*/

    },
    async  init(){
      //  console.log(this.url)
      this.group= await this.getGroup(this.file.url)
      //  console.log(this.group)
    },
    open(id){
      this.$bvModal.show(id)
    },
  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    },
    storage(){
      return this.$store.state.solid.storage
    },
    url(){
      return this.file.parent+this.group.name+"/"
    },
    parent(){
      return this.file.url
    }
  }
}
</script>
<style>
.created{
  color: #C5C5C5;
  font-size: 13px;
  font-weight: normal;
}
</style>
