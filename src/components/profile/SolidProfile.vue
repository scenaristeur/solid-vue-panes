<template>
  <div class="modele-view row">
    <div class="col-lg-5">
      <small><a v-bind:href="webId" target="_blank">{{ webId }}</a></small>
      <hr>


        <b-alert class="row" variant="success" show>
        <EditableDiv v-model="profile.name" placeholder="your NAME" @input="update"></EditableDiv>
        <ul>
          <small>
          <li><u>is a</u></li>
          <li  v-if="profile.role">rdf:type</li>
        </small>
        </ul>
        <EditableDiv v-model="profile.role" placeholder="your ROLE" @input="update"></EditableDiv>
        <ul><small>
          <li>at</li>
          <li v-if="profile.organization"><code>@prefix org: {{ org }}. <br>
            org:subOrganizationOf</code></li>
          </small>
        </ul>
        <EditableDiv v-model="profile.organization" placeholder="your ORGANIZATION" @input="update"></EditableDiv>.
      </b-alert>

      <small>
        <b-alert class="row" variant="success" show>
          <ul>
            <li>
              Located at
            </li>
            <li  v-if="profile.locality">
              <code>{{ location }}</code>
            </li>
          </ul>
          <EditableDiv v-model="profile.locality" placeholder="your LOCALITY" @input="update"></EditableDiv>
          <ul>
            <li>in</li>
            <li  v-if="profile.country"><code>{{ org }}<br>
              </code></li>
            </ul>
            <EditableDiv v-model="profile.country" placeholder="your COUNTRY" @input="update"></EditableDiv>.
        </b-alert>
          (todo see js console BUG #1)
        </small>

        <hr>

        <div class="media">
          <a class="pull-left" href="#">
            <img class="media-object dp img-circle" :src="profile.photo" style="width: 100px;height:100px;">
          </a>




        </div>
      </div>


      <div class="col-lg-5"  v-if="profile.organization">
        <EditableDiv v-model="profile.organization" placeholder="YOUR ORGANIZATION" @input="update"></EditableDiv>
        org:hasMember <small><i>(Todo : getmembers())</i></small>
      </div>

      <!--  <b-button v-b-modal.profile-editor>Edit</b-button>



      <b-modal id="profile-editor" :title="profile.webId">
      <img class="m-3" width="80" height="80" :src="profile.photo" rounded="circle" alt=" " /><br>

      <div>
      <b-form-group label-cols-sm="3"
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
-->

</div>

</template>

<script>
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'SolidProfile',
  components: {
    'EditableDiv': () => import('@/components/basic/EditableDiv'),
  },
  //  mixins: [ToastMixin],
  props:['value'],
  data() {
    return {
      location: "<http://schema.org/location>",
      org: "<http://www.w3.org/ns/org#subOrganizationOf>"
    }
  },
  created(){
    //  console.log("route",this.$route)
    //  this.url = this.$route.params.url
    //  this.getData()
  },
  computed:{
    webId(){return this.$store.state.solid.webId},
    profile(){return this.$store.state.solid.profile},

    profile_url:{
      get: function() { return this.$store.state.solid.storage+"public/salut/profile.ttl"},
      set: function() {}
    }

  },
  methods: {
    update(){
      console.log(this.profile)
      this.$store.dispatch('solid/updateProfile', this.profile)
    },

  },
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
