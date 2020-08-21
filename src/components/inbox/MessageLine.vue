<template>
  <div class="message-line container">
    <div class="d-flex align-items-center">
      <b-avatar class="mr-3" v-if="photo == undefined"></b-avatar>
      <b-avatar button v-else :src="photo" badge badge-variant="danger" class="mr-3"></b-avatar>
      <h6 class="mr-auto">{{ sender }}</h6>

      <span> {{ text }}</span>

      <b-badge>{{ dateSent }}</b-badge><br>
      <!--  publicTypeIndex<b-badge>{{ friends.length }}</b-badge><br>-->
    </div>
    <div class="row">
      <!--  <div v-if="profile.locality" class="col-sm-4"><small>locality:</small> {{profile.locality}}</div>
      <div v-if="profile.organization" class="col-sm-4"><small>organization:</small> {{profile.organization}}</div>-->
      <div><small>{{message.url}}</small></div>


      <!--  <Instancesmin :webId="webId"/> -->
    </div>

  </div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'
import { fetchDocument } from 'tripledoc';
import { schema,  rdfs } from 'rdf-namespaces' //rdf,

export default {
  name: 'MessageLine',
  //  mixins: [profileMixin],
  props:['message'],
  /*  components: {
  'Instancesmin': () => import('@/components/profile/Instancesmin'),
},*/
data: function () {
  return {
    sender: "Loading...",
    label: "...",
    photo: undefined,
    text: "...",
    dateSent: ""
    //  webId: {},
    //  friends: [],
    //  profile:{name: "loading profile..."},
    //  indexes: {puti:[]}
  }
},
mounted() {
  //this.webId = this.$route.params.webId || this.$store.state.solid.webId
  this.updateLine()
},
watch: {
  /*  '$route' (to) {
  //  '$route' (to, from) {
  this.webId = to.params.webId || this.$store.state.solid.webId
  this.updateFriends()
}*/
},
methods:{
  async updateLine(){
    const messageDoc = await fetchDocument(this.message.url);
    console.log(messageDoc)
    let  subject = messageDoc.getSubject(this.message.url);
    this.sender = await  subject.getRef(schema.sender)
    this.label = await  subject.getString(rdfs.label)
    this.dateSent = await subject.getDateTime(schema.dateSent)
    this.text = await subject.getString(schema.text)
    console.log(this.sender, this.label, this.dateSent, this.text)
    /*  this.profile = await this.getProfile(this.webId)
    //  console.log(this.profile)
    this.friends = await this.getFriends(this.webId)
    this.indexes = await this.getIndexes(this.webId)
    console.log("indexes",this.indexes)*/
  }
}
}
</script>
