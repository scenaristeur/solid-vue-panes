<template>
  <div class="modele-view">
  <!--  <a href="https://scenaristeur.github.io/salut" target="_blank">
      Temporary external Edit on Salut App</a>-->
      <hr style="margin:8px auto">
      <b-button @click="editTopic = !editTopic" variant="info"> <b-icon-pen></b-icon-pen> Interest Topics</b-button>
    <hr style="margin:8px auto">
      <div  v-if="editTopic == true">
        <div class="input-group mb-3">
          <input id="interest" v-model="interest" type="text" class="form-control"
          placeholder="I'm intersted in..." aria-label="Interest"
          aria-describedby="interest-label">
          <div class="input-group-append">
            <button id="submit_btn" class="btn btn-primary" type="button" @click="addInterest">Add
              <span id="submit_spinner" class="spinner-border spinner-border-sm" hidden role="status" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>

      <button type="button" v-for="interest in interests" :key="interest" class="btn btn-outline-info btn-sm">
        {{interest}}
        <b-icon-trash-fill @click.stop="delInterest(interest)" v-if="editTopic == true"></b-icon-trash-fill>
      </button>

    </div>
  </template>

  <script>
  //import {  fetchDocument } from 'tripledoc';
  //import {  rdf} from 'rdf-namespaces'
  import ToastMixin from '@/mixins/ToastMixin'
  import { fetchDocument, createDocument } from 'tripledoc';
  import { foaf } from 'rdf-namespaces'


  export default {
    name: 'ExtendedProfile',
    /*  components: {
    'Component': () => import('@/components/Component'),
  },*/
   mixins: [ToastMixin],
  props:['value'],
  data() {
    return {
      interests: [],
      interest:"",
      editTopic: false
    }
  },
  async  created(){
    this.profile_url = await this.$store.state.solid.storage+"popock/profile.ttl"
    this.getOrCreate(this.profile_url)
  },
  watch: {
    async profile_url(p_u){
      this.getOrCreate(p_u)
    }
  },
  methods:{
    async getOrCreate(p_u){
      console.log(p_u)
    //  this.makeToast("Get Or Create", p_u)
      try{
        this.makeToast("Get", p_u)
        this.profileDoc = await fetchDocument(p_u)
        let subj = await this.profileDoc.getSubject(this.profile_url+"#me")
        this.interests = await subj.getAllLiterals(foaf.topic_interest)
        console.log(this.interests)
      }catch(e){
        this.makeToast("Create", p_u)
        //  console.log(e)
        this.profileDoc = await createDocument(p_u)
      }

      console.log("PD",this.profileDoc)
    },
    async  addInterest(){
      //https://github.com/scenaristeur/salut/blob/master/src/interests-element.js
      console.log(this.interest, this.profile_url)
      this.interests.push(this.interest)
      //  await solid.data[this.profile_url].foaf$topic_interest.add(this.interest)
      this.profileDoc = {}
      let me = {}
      try{
        this.profileDoc = await fetchDocument(this.profile_url)
        me = await this.profileDoc.getSubject(this.profile_url+"#me")
      }
      catch(e){
        this.profileDoc = await createDocument(this.profile_url)
        me = await this.profileDoc.addSubject(this.profile_url+"#me")
      }
      //  me.addRef(foaf.topic_interest, this.interest)
      me.addLiteral(foaf.topic_interest, this.interest)
      //  me.addNodeRef(foaf.topic_interest, this.interest)
      await this.profileDoc.save()
      this.interest = ""

    },
    async delInterest(interest){
      console.log(interest)
      /*   let index = e.target.getAttribute("index")
      let interest = this.interests[index]

      this.interests.splice(index,1);
      */
      this.profileDoc = await fetchDocument(this.profile_url)
      this.interests = this.interests.filter(function(value){ return value != interest});
      console.log(this.interests, interest)
      let me = await this.profileDoc.getSubject(this.profile_url+"#me")
      //  me.removeRef(foaf.topic_interest, interest)
      me.removeLiteral(foaf.topic_interest, interest)
      console.log(me)
      await this.profileDoc.save()

    }
  },
  computed:{
    webId(){return this.$store.state.solid.webId},
    profile(){return this.$store.state.solid.profile},

    profile_url:{
      get: function() { return this.$store.state.solid.storage+"public/popock/profile.ttl"},
      set: function() {}
    }

  }
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
