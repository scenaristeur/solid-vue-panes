<template>
  <div class="agora-list container">
    <h5> {{ activities.length}} Activities</h5>
    <!--  <b-input-group class="mb-2">
    <b-form-datepicker id="example-datepicker" v-model="date" min="2020-08-01" :max="max"></b-form-datepicker>
    <b-input-group-append>
    <b-button @click="sort">Sort</b-button>
  </b-input-group-append>
</b-input-group>-->

<b-card-group deck>

  <ActivityItem v-for="a in activities.reverse()" :key="a.id" :activity="a" />
</b-card-group>
<!--
<b-list-group>
<b-list-group-item   v-for="a in activities.reverse()" :key="a.id" class="flex-column align-items-start">
<ActivityItem :activity="a" />
</b-list-group-item>

</b-list-group>-->

</div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'AgoraList',
  //mixins: [profileMixin],
  components: {
    'ActivityItem': () => import('@/components/agora/ActivityItem'),
  },
  props: ['value'],
  data: function () {
    return {
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
    let d = new Date()
    this.date = this.formatDate(d)
    this.max = this.date
    this.activities = this.$store.state.agora.activities
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    async activities (activities) {
      console.log("ACTIVITIES",activities.length, activities)
    },
  },
  methods:{
    sort(){
      this.activities.reverse()
    },
    formatDate(d) {
      return [d.getFullYear(), ("0" + (d.getMonth() + 1)).slice(-2), ("0" + d.getDate()).slice(-2)].join("-")
    },
    /*  async updateFriends(){
    this.friends = await this.getFriends(this.webId)
  }*/
},
computed:{
  storage(){
    return this.$store.state.solid.storage
  },
  activities:{
    get: function() { return this.$store.state.agora.activities},
    set: function() {}
  },
}
}
</script>
<style>
.container {
  text-align: left;
}
</style>
