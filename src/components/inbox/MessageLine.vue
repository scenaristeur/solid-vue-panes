<template>
  <div class="message-line container">
    <div class="item ">

      <div  v-if="sender != null">
        <div class="avatar"></div>
        <b-button class="reply" size="sm" variant="success" @click.stop="init_reply()">
          <b-icon-reply  @click.stop="init_reply()" variant="outline-success"></b-icon-reply>
        </b-button>
        <!--    <b-avatar class="mr-3" v-if="photo == undefined"></b-avatar>
        <b-avatar button v-else :src="photo" badge badge-variant="danger" class="mr-3"></b-avatar>
      -->
      <div class="maker text-info">
        {{sender.split('/').slice(2,3)[0]}}

      </div>


      <div class="created mt-2">
        {{dateSent}}
        <b-button size="sm" variant="outline-danger" @click.stop="init_trash()">
          <b-icon-trash  variant="danger"></b-icon-trash>
        </b-button>
      </div>
      <!--  <div><small>{{message.url}}</small></div>-->
      <div class="content mb-2 mr-2">

        <b>{{label}}</b><br>
        {{ text }}
      </div>

    </div>
    <div v-else>
      <a v-bind:href="message.url" target="_blank">{{message.name}}</a>
    </div>




    <!--  <b-badge>{{ dateSent }}</b-badge><br>-->
    <!--  publicTypeIndex<b-badge>{{ friends.length }}</b-badge><br>-->
  </div>
  <div class="row">

    <!--  <div v-if="profile.locality" class="col-sm-4"><small>locality:</small> {{profile.locality}}</div>
    <div v-if="profile.organization" class="col-sm-4"><small>organization:</small> {{profile.organization}}</div>-->



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
    dateSent: "",
    replyTitle: ""
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
  async init_trash(){
    console.log("trash",this.message)
    this.$bvModal.show("confirm-trash")
    this.$store.commit('inbox/setToTrash', this.message.url)
    this.$store.commit('inbox/setLabel', "Ref: "+this.label)

  },
  async init_reply(){
    console.log("reply",this.message)
    this.$bvModal.show("reply")
    this.$store.commit('inbox/setRecipient', this.sender)
    this.$store.commit('inbox/setLabel', "Ref: "+this.label)
    this.$store.commit('inbox/setOldContent', this.dateSent+" : "+this.text)
  },
  async updateLine(){
    const messageDoc = await fetchDocument(this.message.url);
    let  subject = messageDoc.getSubject(this.message.url);
    this.sender = await  subject.getRef(schema.sender)
    this.label = await  subject.getString(rdfs.label)
    this.dateSent = await subject.getString(schema.dateSent)
    this.text = await subject.getString(schema.text)
  }
}
}
</script>
<style>
.Asolid-chat-list{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-width: 320px;
  background: #fff;
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0,0,0,.87);
}
.Bitem{
  position: absolute;
  /*  left: 0px;
  top: 0px; */
  margin-left: 0px;
  margin-top: 0px;
  /*  width: 722px; */
  /*  height: 574px; */
  background-color: rgb(255, 255, 255);
}
.avatar{
  position: absolute;
  left: 0px;
  top: 8px;
  width: 29px;
  height: 29px;
  background-image: url(../../assets/no-avatar.png);
  background-size: contain;
  opacity: .3;
}
.reply{
  position: absolute;
  left: 0px;
  top: 38px;
  width: 29px;
  height: 29px;

}
.maker{
  position: absolute;
  left: 35px;
  top: 4px;
  width: auto;
  height: auto;
  text-align: left;
}
.content{
  position: relative;
  padding-left: 36px;
  padding-top: 23px;
  padding-bottom: 5px;
  width: 90%;
  height: auto;
  text-align: left;
}
.created{
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: #C5C5C5;
  font-size: 13px;
  font-weight: normal;
}
</style>
