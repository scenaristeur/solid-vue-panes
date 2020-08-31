<template>
  <div class="profile container">

    <div v-if="webId != null">

      <div class="col-lg-5">
        <div class="media">
          <a class="pull-left" href="#">
            <img class="media-object dp img-circle" :src="profile.photo" style="width: 100px;height:100px;">
          </a>
          <div class="media-body">
            <h4 class="media-heading">{{profile.name || this.webId}}<small> {{profile.locality}}</small></h4>
            <h5>  {{profile.role}} at {{profile.organization }}</h5>
            <a href="https://scenaristeur.github.io/salut" target="_blank">Temporary external Edit</a>
            <hr style="margin:8px auto">

            <b-button @click="editTopic = !editTopic" variant="info"> <b-icon-pen></b-icon-pen> Interest Topics</b-button>
            <b-button to="/groups" variant="info"> <b-icon-pen></b-icon-pen> Groups</b-button>

          </div>
        </div>

      </div>

      <div>
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
        <div >

          <button type="button" v-for="interest in interests" :key="interest" class="btn btn-outline-info btn-sm">
            {{interest}}
            <b-icon-trash-fill @click.stop="delInterest(interest)" v-if="editTopic == true"></b-icon-trash-fill>
          </button>

        </div>
      </div>


      <b-modal id="profile-editor" title="Profile Editor">

        <h4>{{ profile.webId }}</h4>
        <!--  {{ profileDoc }}
        {{ name }}
        {{ photo }}-->
        <img class="m-3" width="80" height="80" :src="profile.photo" rounded="circle" alt=" " /><br>

        <div>
          <b-form-group
          label-cols-sm="3"
          label="Name:"
          label-align-sm="right"
          label-for="name">
          <b-form-input id="name" v-model="profile.name"></b-form-input>
        </b-form-group>


        <b-form-group
        label-cols-sm="3"
        label="Organization:"
        label-align-sm="right"
        label-for="organization">
        <b-form-input id="organization" v-model="profile.organization"></b-form-input>
      </b-form-group>

      <b-form-group
      label-cols-sm="3"
      label="Role:"
      label-align-sm="right"
      label-for="role">
      <b-form-input id="role" v-model="profile.role"></b-form-input>
    </b-form-group>

    <b-form-group
    label-cols-sm="3"
    label="Birthday:"
    label-align-sm="right"
    label-for="bday">
    <b-form-input id="bday" type="date" v-model="profile.bday"></b-form-input>
  </b-form-group>

  <b-form-group
  label-cols-sm="3"
  label="Gender:"
  label-align-sm="right"
  label-for="gender">
  <b-form-input id="gender" v-model="profile.gender"></b-form-input>
</b-form-group>


<b-form-group
label-cols-sm="3"
label="Address Locality:"
label-align-sm="right"
label-for="address">
<b-form-input id="address" v-model="profile.locality"></b-form-input>
</b-form-group>

<b-form-group
label-cols-sm="3"
label="Note:"
label-align-sm="right"
label-for="note">
<b-form-input id="note" v-model="profile.note"></b-form-input>
</b-form-group>
</div>
</b-modal>
</div>

<div v-else>
  <SolidLoginButton />
</div>

</div>
</template>

<script>

let solid = window.solid
console.log("SOLID",solid)
import { fetchDocument, createDocument } from 'tripledoc';
import { foaf } from 'rdf-namespaces'

export default {
  name: 'Profile',
  components: {
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton')
  },

  data: function () {
    return {
      interests: [],
      interest:"",
      editTopic: false
    }
  },
  async  created(){
    this.profile_url = await this.$store.state.solid.storage+"salut/prifile.ttl"
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
      try{
        this.profileDoc = await fetchDocument(p_u)
        let subj = await this.profileDoc.getSubject(this.profile_url+"#me")
        this.interests = await subj.getAllLiterals(foaf.topic_interest)
        console.log(this.interests)
      }catch(e){
        console.log(e)
        this.profileDoc = await createDocument(p_u)
      }

      console.log("PD",this.profileDoc)
    },
    async  addInterest(){
      //https://github.com/scenaristeur/salut/blob/master/src/interests-element.js
      console.log(this.interest, this.profile_url)
      this.interests.push(this.interest)
      //  await solid.data[this.profile_url].foaf$topic_interest.add(this.interest)
      this.profileDoc = await fetchDocument(this.profile_url)
      let me = await this.profileDoc.getSubject(this.profile_url+"#me")
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
      get: function() { return this.$store.state.solid.storage+"public/salut/profile.ttl"},
      set: function() {}
    }

  }
}
</script>
<style scoped>
.profile{
  text-align: left;
}
.media
{
  /*box-shadow:0px 0px 4px -2px #000;*/
  margin: 20px 0;
  padding:30px;
}
.dp
{
  border:10px solid #eee;
  transition: all 0.2s ease-in-out;
}
.dp:hover
{
  border:2px solid #eee;
  transform:rotate(360deg);
  -ms-transform:rotate(360deg);
  -webkit-transform:rotate(360deg);
  /*-webkit-font-smoothing:antialiased;*/
}
</style>
