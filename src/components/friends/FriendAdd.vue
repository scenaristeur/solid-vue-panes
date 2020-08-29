<template>
  <div class="friend-add container">
    <b-input-group prepend="webId" class="mt-3">
      <b-form-input v-model="friend"></b-form-input>
      <b-input-group-append>
        <b-button variant="outline-success"  @click="add">Add</b-button>
      </b-input-group-append>
    </b-input-group>


    Want new Solid friend ?  Add a button or a link in your own website to :
    <b-alert variant="success" show>
      <!--  <span v-html="beg"></span> -->
      <span v-html="link"></span>
      <!--  <span v-html="end"></span>-->
    </b-alert>



  </div>
</template>

<script>
import profileMixin from '@/mixins/profileMixin'
import { fetchDocument } from 'tripledoc';
import { foaf } from 'rdf-namespaces'

export default {
  name: 'FriendsAdd',
  mixins: [profileMixin],
  components: {
    //'PeopleItem': () => import('@/components/profile/PeopleItem'),
  },
  props: ['value'],
  data: function () {
    return {
      friend: "https://spoggy.solid.community/profile/card#me",
      html: '<div><a href="#">This is example</a></div>',
      //  beg: '<pre><a href="</pre>',
      //  end: '" target="_blank">Be my Solid Friend</a>'
      //  link: ""
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
    this.$route.query.add != undefined ? this.friend = this.$route.query.add+this.$route.hash : ""
  //  console.log("TODO must use the router instead of route query for the #me!!!",this.friend)
    this.webId = this.$store.state.solid.webId

  },

  methods:{
    async  add(){
      try{
        console.log(this.friend, this.webId)
      //  !(this.friend.endWith('#me') || this.friend.endWith('#i')) ? this.friend+("#me") : ""
        const profileDoc = await fetchDocument(this.webId);
        const p = profileDoc.getSubject(this.webId)
        await  p.addRef(foaf.knows, this.friend )
        await profileDoc.save()
        //refresh
        let friends = await this.getFriends(this.webId)
        this.$store.commit('solid/setFriends', friends)
      }catch(e){
        alert(e)
      }


    }
  },
  computed:{
    webId: {
      get: function() { return this.$store.state.solid.webId},
      set: function() {}
    },
    link(){
      console.log("route",this.$route, location.href)
      let path = location.protocol+location.host+location.pathname+"?add="+this.$store.state.solid.webId
      return  path //'<a href="'+path+'" target="_blank">Be my friend</a>'
    }
  }
}
</script>
