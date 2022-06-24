<template>
  <div class="message-line container">
    <div class="item ">

      <div  v-if="sender != null">
        <div class="avatar"></div>
        <UserName :webId="sender" />
        <b-button class="reply" size="sm" title="reply"  variant="success" @click.stop="init_reply()">
          <b-icon-reply  disabled @click.stop="init_reply()" variant="outline-success"></b-icon-reply>
        </b-button>
        <!--    <b-button class="add-friend" title="add friend" size="sm" variant="info" :to="'/friends?add='+sender">
        <b-icon-person-plus></b-icon-person-plus>
      </b-button>
      <b-avatar class="mr-3" v-if="photo == undefined"></b-avatar>
      <b-avatar button v-else :src="photo" badge badge-variant="danger" class="mr-3"></b-avatar>
    -->



    <div class="created">
      <Date  :dateIso="dateSent" />
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
</div>

</div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'

import { schema,  rdfs } from 'rdf-namespaces' //rdf,

export default {
  name: 'MessageLine',
  //  mixins: [profileMixin],
  props:['message'],
  components: {
    'UserName': () => import('@/components/basic/UserName'),
    'Date': () => import('@/components/basic/Date')
  },
  data: function () {
    return {
      sender: "",
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
  },
  async init_reply(){
    console.log("reply",this.message)
    //  this.$bvModal.show("reply")
    let reply = {}
    reply.url = this.message.url
    reply.sender = this.sender
    reply.dateSend = this.dateSent
    reply.text = this.text
    reply.label = this.label
    this.$store.commit('inbox/setReply', reply)
    /*  this.$store.commit('inbox/setLabel', "Ref: "+this.label)
    this.$store.commit('inbox/setOldContent', this.dateSent+" : "+this.text)*/
  },
  async updateLine(){
    const messageDoc = await this.$fc.readFile(this.message.url);
    let  subject = messageDoc.getSubject(this.message.url);
    this.sender =   subject.getRef(schema.sender)
    this.label =   subject.getString(rdfs.label)
    this.dateSent =  subject.getLiteral(schema.dateSent)
    this.text =  subject.getString(schema.text)
  }
}
}
</script>
<style scoped>

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
  top: 70px;
  width: 29px;
  height: 29px;

}
.add-friend{
  position: absolute;
  left: 0px;
  top: 38px;
  width: 29px;
  height: 29px;
}
.maker{
  /*position: absolute;*/
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
  text-align: right;
}
</style>
