<template>
  <div class="inbox container">

    <div v-if="webId != null">
      <!--  Inbox_urls : {{ inbox_urls}} <br>
      inbox_acl : {{ inbox_acl }}<br>-->
      <p>To test the inbox, you can add me to your friends :<br> <a href="https://spoggy.solid.community/profile/card#me" target="_blank">https://spoggy.solid.community/profile/card#me</a><br>
You have too <a href="https://forum.solidproject.org/t/popock-bring-your-pod-in-your-pocket/3378/4?u=smag0" target="_blank">grant authenticated Agents & this app</a> if you want to receive messages.
      </p>
      <InboxSend />


      <div>
        <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
          <b-button-group class="mx-1">
            <b-button title="refresh">
              <b-icon-mailbox  @click.stop="getMessages()" variant="outline-success"></b-icon-mailbox>
            </b-button>
            <!--  <b-button>Edit</b-button>
            <b-button>Undo</b-button>-->
          </b-button-group>
        </b-button-toolbar>
      </div>




      <b-list-group>
        <b-list-group-item v-for="m in inbox.files.slice().reverse()" :key="m.name" class="d-flex align-items-center">
          <!--
          {{ m.name }}-->

          <MessageLine :message="m"/>

          <!--  <b-avatar class="mr-3"></b-avatar>
          <b-avatar button  src="https://placekitten.com/300/300" badge badge-variant="danger" class="mr-3"></b-avatar>
          <span class="mr-auto">{{ f }}</span>-->

        </b-list-group-item>
      </b-list-group>

      Subfolders ? {{ inbox.folders }} <br>

    </div>
    <div v-else>
      <SolidLogin />
    </div>
    <!--  inbox: {{ inbox }}-->

    <!--  <div v-for="f in friends" :key="f"  style="font-size: 2rem;">
    <router-link v-bind:to="{ name: 'FoFri', params: { webId: f }}">
    <b-avatar rounded="lg"></b-avatar>  {{ f }}
  </router-link>
  <br>
</div > -->
<InboxDialogs />

</div>
</template>

<script>
import auth from 'solid-auth-client';
const SolidFileClient = window.SolidFileClient
console.log("SFC", SolidFileClient)
const fc = new SolidFileClient(auth)
import profileMixin from '@/mixins/profileMixin'

//read public access & agents access
import {
  getSolidDatasetWithAcl,
  getAgentAccessAll,
  getPublicAccess
} from "@inrupt/solid-client";

export default {
  name: 'Inbox',
  mixins: [profileMixin],
  components: {
    'MessageLine': () => import('@/components/inbox/MessageLine'),
    'InboxSend': () => import('@/components/inbox/InboxSend'),
    'InboxDialogs': () => import('@/components/inbox/InboxDialogs'),
    'SolidLogin': () => import('@/components/solid/SolidLogin'),

  },
  data: function () {
    return {
      inbox_urls: "",
      friends: [],
      inbox_acl: {},
      inbox: {files:[]},
      webId: null
    }
  },
  async created(){
    /* acl example

    @prefix : <#>.
    @prefix n0: <http://www.w3.org/ns/auth/acl#>.
    @prefix inbox: <./>.
    @prefix c: </profile/card#>.

    :AppendDefault
        a n0:Authorization;
        n0:agentClass n0:AuthenticatedAgent;
        n0:default inbox:;
        n0:mode n0:Append.
    :AppendRead
        a n0:Authorization;
        n0:accessTo inbox:;
        n0:agentClass n0:AuthenticatedAgent;
        n0:mode n0:Append, n0:Read.
    :AppendReadDefault
    a n0:Authorization; n0:default inbox:; n0:mode n0:Append, n0:Read.
    :ControlReadWrite
        a n0:Authorization;
        n0:accessTo inbox:;
        n0:agent c:me;
        n0:mode n0:Control, n0:Read, n0:Write.
    :ControlReadWriteDefault
        a n0:Authorization;
        n0:agent c:me;
        n0:default inbox:;
        n0:mode n0:Control, n0:Read, n0:Write.
    :ReadWrite
        a n0:Authorization;
        n0:accessTo inbox:;
        n0:mode n0:Read, n0:Write;
        n0:origin <http://127.0.0.1:8080>, <https://scenaristeur.github.io>.
    :ReadWriteDefault
        a n0:Authorization;
        n0:default inbox:;
        n0:mode n0:Read, n0:Write;
        n0:origin <http://127.0.0.1:8080>, <https://scenaristeur.github.io>.
    */
  },
  async mounted() {
    this.webId  = this.$store.state.solid.webId
    this.inbox_urls = await this.updateInboxUrl()
    this.current_inbox_url = this.inbox_urls[0]
    console.log(this.current_inbox_url)
    const myDatasetWithAcl = await getSolidDatasetWithAcl(this.current_inbox_url);
    console.log(myDatasetWithAcl)
    const accessByAgent = getAgentAccessAll(myDatasetWithAcl);

    const publicAccess = getPublicAccess(myDatasetWithAcl);
    console.log("accessByAgent",accessByAgent, "publicAccess",publicAccess)

    console.log(this.current_inbox_url)
    await this.getMessages()
  },
  watch: {
    /*  '$route' (to) {
    //  '$route' (to, from) {
    this.webId = to.params.webId || this.$store.state.solid.webId
    this.updateFriends()
  }*/
},
methods:{
  async getMessages(){
    this.inbox = await fc.readFolder(this.current_inbox_url)
  },
  async updateInboxUrl(){
    return await this.getInbox(this.webId)
  },

}
}
</script>
