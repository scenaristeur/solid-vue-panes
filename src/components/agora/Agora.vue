<template>
  <div class="modele container">
    <!--  <COMPONENET />  -->

this page is an experimentation for ActivityPub-lishing <router-link to="/groups"> 'Group Create Activity'</router-link>


    <b-input-group prepend="Activity Pub Pod" class="mt-3">
      <b-form-input v-model="pubPod"></b-form-input>
    </b-input-group>
    <small><a v-bind:href="pubPod" target="_blank">{{ pubPod }}</a></small>


    Activity
    <b-input-group prepend="Type" class="mt-3">
      <b-form-select v-model="activity.type" :options="as.activity"></b-form-select>
      <span> or </span><b-form-input v-model="activity.type"></b-form-input>
    </b-input-group>
    Actor
    <b-input-group prepend="Actor Type" class="mt-3">
      <b-form-select v-model="activity.actor.type" :options="as.actor"></b-form-select>
      <span> or </span><b-form-input v-model="activity.actor.type"></b-form-input>
    </b-input-group>
    <b-input-group prepend="Actor Name" class="mt-3">
      <b-form-input v-model="activity.actor.name"></b-form-input>
    </b-input-group>
    Object
    <b-input-group prepend="Object Type" class="mt-3">
      <b-form-select v-model="activity.object.type" :options="as.object"></b-form-select>
      or <b-form-input v-model="activity.object.type"></b-form-input>

    </b-input-group>
    <b-input-group prepend="Object Name" class="mt-3">
      <b-form-input v-model="activity.object.name"></b-form-input>
    </b-input-group>
    <b-input-group prepend="Object Purpose" class="mt-3">
      <b-form-input v-model="activity.object.purpose"></b-form-input>
    </b-input-group>
    <b-button class="mt-3" @click="send" variant="outline-info">Send</b-button>

    <b-input-group prepend="Summary" class="mt-3">
      <b-form-input v-model="activity.summary"></b-form-input>
    </b-input-group>

  </div>
</template>

<script>

import ActivityMixin from '@/mixins/ActivityMixin.js'


export default {
  name: 'Agora',
  mixins: [ ActivityMixin ],
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
data: function () {
  return {
  //  pubPod: "https://agora.solid.community/public/popock/inbox/",

    activity:  {
      "@context": [
        "https://www.w3.org/ns/activitystreams",
        {
          "hc": "https://smag0.solid.community/holacracy/ns#",
          "purpose": {
            "@id": "hc:purpose",
            "@type": "@id"
          }
        }
      ],
      "summary": "Sally created a circle",
      "type": "Create",
      "actor": {
        "type": "webId",
        "name": "Sally"
      },
      "object": {
        "type": "Group", // ["Group", "hc:Circle"],
        "name": "A Simple Circle",
        "purpose": "This is a simple circle to represent the Solid Community"
      }
    }

  }
},
created(){

},
watch: {
  async activities (activities) {
    console.log("ACTIVITIES",activities.length, activities)
  },
},
methods: {

},

}
</script>
