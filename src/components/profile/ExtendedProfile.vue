<template>
  <div class="modele-view">
    <a :href="profile_url" target="_blank">{{profile_url}}</a>
    <hr style="margin:8px auto">
    <b-button @click="editTopic = !editTopic" variant="info"> <b-icon-pen></b-icon-pen> Interest Topics</b-button>
    <b-button @click="editSkill = !editSkill" variant="info"> <b-icon-pen></b-icon-pen> Skills</b-button>
    <b-button @click="editService = !editService" variant="info"> <b-icon-pen></b-icon-pen> Services</b-button>
    <hr style="margin:8px auto">
    Interests :
    <div  v-if="editTopic == true">
      <div class="input-group mb-3">
        <input id="interest" v-model="interest" type="text" class="form-control"
        placeholder="I'm intersted in..." aria-label="Interest"
        aria-describedby="interest-label"
        @keyup.enter="addInterest">
        <div class="input-group-append">
          <button id="submit_btn" class="btn btn-primary" type="button" @click="addInterest">Add
            <span id="submit_spinner" class="spinner-border spinner-border-sm" hidden role="status" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>

    <button type="button" v-for="interest in interests" :key="'i_'+interest" class="btn btn-outline-info btn-sm">
      {{interest}}
      <b-icon-trash-fill @click.stop="delInterest(interest)" v-if="editTopic == true"></b-icon-trash-fill>
    </button>

    <hr>
    Skills :
    <div  v-if="editSkill == true">
      <div class="input-group mb-3">
        <input id="skills" v-model="skill" type="text" class="form-control"
        placeholder="I have some skills that could interest others..." aria-label="Skill"
        aria-describedby="skill-label"
        @keyup.enter="addSkill">
        <div class="input-group-append">
          <button id="submit_btn" class="btn btn-primary" type="button" @click="addSkill">Add
            <span id="submit_spinner" class="spinner-border spinner-border-sm" hidden role="status" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>

    <button type="button" v-for="skill in skills" :key="'sk_'+skill" class="btn btn-outline-info btn-sm">
      {{skill}}
      <b-icon-trash-fill @click.stop="delSkill(skill)" v-if="editSkill == true"></b-icon-trash-fill>
    </button>

    <hr>
    Services :
    <div  v-if="editService == true">
      <div class="input-group mb-3">
        <input id="service" v-model="service" type="text" class="form-control"
        placeholder="I propose a service..." aria-label="Service"
        aria-describedby="service-label"
        @keyup.enter="addService">
        <div class="input-group-append">
          <button id="submit_btn" class="btn btn-primary" type="button" @click="addService">Add
            <span id="submit_spinner" class="spinner-border spinner-border-sm" hidden role="status" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>

    <button type="button" v-for="service in services" :key="'se_'+service" class="btn btn-outline-info btn-sm">
      {{service}}
      <b-icon-trash-fill @click.stop="delService(service)" v-if="editService == true"></b-icon-trash-fill>
    </button>

  </div>
</template>

<script>
import ToastMixin from '@/mixins/ToastMixin'

import { foaf } from 'rdf-namespaces'

export default {
  name: 'ExtendedProfile',
  mixins: [ToastMixin],
  data() {
    return {
      interests: [],
      skills: [],
      services: [],
      interest: "",
      skill: "",
      service: "",
      editTopic: false,
      editSkill: false,
      editService: false
    }
  },
  async created(){
    this.profile_url = await this.$store.state.solid.storage+"popock/profile.ttl"
    this.getOrCreate(this.profile_url)
    this.$route.params.interest != undefined ?   this.interest = this.$route.params.interest :""
  },
  watch: {
    async profile_url(p_u){
      this.getOrCreate(p_u)
    }
  },
  methods:{
    async getOrCreate(p_u){
      try{
        this.makeToast("Get", p_u)
        this.profileDoc = await this.$fc.readFile(p_u)
        let subj = await this.profileDoc.getSubject(this.profile_url+"#me")
        this.interests = await subj.getAllLiterals(foaf.topic_interest)
        this.skills = await subj.getAllLiterals("http://rdfs.org/resume-rdf/cv.rdfs#hasSkill")
        this.services = await subj.getAllLiterals("https://schema.org/providesService")
      }catch(e){
        this.makeToast("Create", p_u)
        try{
          this.profileDoc = await this.$fc.createFile(p_u)
        }catch(e){
          this.makeToast("Unable to create your extended profile", p_u+ "are you sure that this app is granted in your POD preferences ?", "danger")
        }
      }
      console.log(this.interests.length, this.skills.length, this.services.length)
      this.editTopic = this.interests.length == 0
      this.editSkill = this.skills.length == 0
      this.editService = this.services.length == 0
    },
    async  addInterest(){
      this.interests.push(this.interest)
      this.profileDoc = {}
      let me = {}
      try{
        this.profileDoc = await this.$fc.readFile(this.profile_url)
        me = await this.profileDoc.getSubject(this.profile_url+"#me")
      }
      catch(e){
        this.profileDoc = await this.$fc.createFile(this.profile_url)
        me = await this.profileDoc.addSubject(this.profile_url+"#me")
      }
      me.addLiteral(foaf.topic_interest, this.interest)
      await this.profileDoc.save()
      this.interest = ""
      console.log("TODO add activity & match semapps")
    },
    async delInterest(interest){
      this.profileDoc = await this.$fc.readFile(this.profile_url)
      this.interests = this.interests.filter(function(value){ return value != interest});
      let me = await this.profileDoc.getSubject(this.profile_url+"#me")
      me.removeLiteral(foaf.topic_interest, interest)
      await this.profileDoc.save()
    },
    async addSkill(){
      this.skills.push(this.skill)
      this.profileDoc = {}
      let me = {}
      try{
        this.profileDoc = await this.$fc.readFile(this.profile_url)
        me = await this.profileDoc.getSubject(this.profile_url+"#me")
      }
      catch(e){
        this.profileDoc = await this.$fc.createFile(this.profile_url)
        me = await this.profileDoc.addSubject(this.profile_url+"#me")
      }
      me.addLiteral("http://rdfs.org/resume-rdf/cv.rdfs#hasSkill", this.skill)
      await this.profileDoc.save()
      this.skill = ""
      console.log("TODO add activity & match semapps")
    },
    async delSkill(skill){
      this.profileDoc = await this.$fc.readFile(this.profile_url)
      this.skills = this.skills.filter(function(value){ return value != skill});
      let me = await this.profileDoc.getSubject(this.profile_url+"#me")
      me.removeLiteral("http://rdfs.org/resume-rdf/cv.rdfs#hasSkill", skill)
      await this.profileDoc.save()
    },
    async addService(){
      this.services.push(this.service)
      this.profileDoc = {}
      let me = {}
      try{
        this.profileDoc = await this.$fc.readFile(this.profile_url)
        me = await this.profileDoc.getSubject(this.profile_url+"#me")
      }
      catch(e){
        this.profileDoc = await this.$fc.createFile(this.profile_url)
        me = await this.profileDoc.addSubject(this.profile_url+"#me")
      }
      me.addLiteral("https://schema.org/providesService", this.service)
      await this.profileDoc.save()
      this.service = ""
      console.log("TODO add activity & match semapps")
    },
    async delService(service){
      this.profileDoc = await this.$fc.readFile(this.profile_url)
      this.services = this.services.filter(function(value){ return value != service});
      let me = await this.profileDoc.getSubject(this.profile_url+"#me")
      me.removeLiteral("https://schema.org/providesService", service)
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
