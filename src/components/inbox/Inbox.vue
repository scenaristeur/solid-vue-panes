<template>
  <div class="inbox container">

    <div v-if="webId != null">
      Inbox_urls : {{ inbox_urls}} <br>
      inbox_acl : {{ inbox_acl }}<br>
      <InboxSend />


      <b-list-group>
        <b-list-group-item v-for="m in inbox.files" :key="m.name" class="d-flex align-items-center">
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
    'SolidLogin': () => import('@/components/solid/SolidLogin'),

  },
  data: function () {
    return {
      inbox_urls: "",
      friends: [],
      inbox_acl: {},
      inbox: {},
      webId: null
    }
  },
  async mounted() {
    this.webId  = this.$store.state.solid.webId
    this.inbox_urls = await this.updateInboxUrl()
    this.current_inbox_url = this.inbox_urls[0]
    console.log(this.current_inbox_url)
    await this.getMessages(this.current_inbox_url)
  },
  watch: {
    /*  '$route' (to) {
    //  '$route' (to, from) {
    this.webId = to.params.webId || this.$store.state.solid.webId
    this.updateFriends()
  }*/
},
methods:{
  async getMessages(url){
    this.inbox = await fc.readFolder(url)

  },
  async updateInboxUrl(){
    return await this.getInbox(this.webId)
  }
}
}
</script>
