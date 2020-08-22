<template>
  <div class="inbox container">

    <div v-if="webId != null">
      Inbox_urls : {{ inbox_urls}} <br>
      inbox_acl : {{ inbox_acl }}<br>
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
  async mounted() {
    this.webId  = this.$store.state.solid.webId
    this.inbox_urls = await this.updateInboxUrl()
    this.current_inbox_url = this.inbox_urls[0]
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
