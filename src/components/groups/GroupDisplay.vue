<template>
  <div class="group-display">

    <div>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle="'accordion-'+ttlName" variant="info">{{group.name || file.name}}</b-button>
        </b-card-header>
        <b-collapse :id="'accordion-'+ttlName" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <cite title="Purpose">{{group.purpose}}</cite>

              <div class="row">
                <div class="col-sm-6">
                  <GroupChat />
                </div>
                <div class="col-sm-6">

                  <GroupTensions />
                </div>
              </div>
              <div class="row">
                <GroupParle />
              </div>

              <hr>
              <GroupMembers :url="file.url" :members="group.members"/>
              <b-button @click="open('modal-members-'+file.url)" variant="outline-info">{{ group.members.length }} Members</b-button>
              <b-button v-bind:to="{ name: 'Groups', params: { url: file.parent+ttlName }}" :disabled="group.subgroups.length == 0" variant="outline-info">{{ group.subgroups.length }} subgroups</b-button>

              <div>
                <b-button-group >
                  <b-dropdown variant="outline-info" right split text="menu">
                    <b-dropdown-item @click="open('modal-subgroups-'+file.url)">New subgroup</b-dropdown-item>
                  </b-dropdown>
                  <b-button @click="join">Join/Invite</b-button>
                </b-button-group>
              </div>


            </b-card-text>
          </b-card-body>
        </b-collapse>
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
  </div>

</template>

<script>
import groupsMixin from '@/mixins/groupsMixin'
import ToastMixin from '@/mixins/ToastMixin'

import { createDocument, fetchDocument } from 'tripledoc';
import { vcard, dct, foaf, ldp} from 'rdf-namespaces'

export default {
  name: 'GroupDisplay',
  mixins: [groupsMixin, ToastMixin],
  components: {
    'GroupMembers': () => import('@/components/groups/GroupMembers'),
    'GroupChat': () => import('@/components/groups/GroupChat'),
    'GroupTensions': () => import('@/components/groups/GroupTensions'),
    'GroupParle': () => import('@/components/groups/GroupParle'),
  },
  props: ['file'],
  data: function () {
    return {
      group: {members:[],subgroups: []},
      name: "",
      purpose: "",
      ttlName : ""

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
    async join(){
      console.log("join")
      this.open('modal-members-'+this.file.url)
    },
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
      subj.addRef(ldp.inbox, "./"+this.name+"/inbox/")
      subj.addLiteral(dct.created, date)
      subj.addRef(foaf.maker, this.webId)
      subj.addRef(vcard.hasMember, this.webId)
      subj.addRef(vcard.hasMember, "https://spoggy-test4.solid.community/profile/card#me")
      subj.addRef(vcard.hasMember, "https://spoggy-test5.solid.community/profile/card#me")
      subj.addRef(vcard.hasMember, "https://spoggy.solid.community/profile/card#me")
      subj.addLiteral('http://www.w3.org/ns/org#purpose', this.purpose)
      subj.addRef("http://www.w3.org/ns/org#subOrganizationOf", this.parent)

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
      //  console.log("group",this.group)
      if (this.group.name != undefined){
        this.ttlName = this.group.name.replace(/\s/g, '_')
      }

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
      return this.group.name != undefined ? this.file.parent+this.group.name.replace(/\s/g, '_')+"/" : ""
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
