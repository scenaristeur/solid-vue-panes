<template>
  <div class="fofri container">
    <h5>FoFri ! The following friends tool...</h5>
    Current :  <small>{{ webId }}</small><br>
    {{ friends.length }} friends<br>
    <!--{{ indexes }} instances<br>-->

    <div class="row">
      <!--  <div class="col">-->
      Public Instances 
      <b-list-group>
        <div v-for="i in indexes.puti.instances" :key="i.instance" class="container fluid mb-3">
          <b-list-group-item  v-bind:to="{ name: 'FoFri', params: { instance: i }}">
            label : {{i.label}}<br>
            instance : {{i.instance}}<br>
            classe : {{i.classe}}<br>
            created : {{i.created}}<br>

            <!--  <div><PeopleItem :webId="f" /></div>-->
          </b-list-group-item>
          <small class="row"><a :href="i.instance" target="_blank">{{ i.instance }}</a></small>
        </div>
      </b-list-group>
      <!--  </div>
      <div class="col">
      <b-list-group>
      <div v-for="f in friends" :key="f" class="container fluid mb-3">
      <b-list-group-item  v-bind:to="{ name: 'FoFri', params: { webId: f }}">
      <div><PeopleItem :webId="f" /></div>
    </b-list-group-item>
    <small class="row"><a :href="f" target="_blank">{{ f }}</a></small>
  </div>
</b-list-group>

</div>-->
</div>
<b-button :to="link" variant=outline-info>add Spoggy to your friends</b-button><br>
<router-link :to="{ name: 'FoFri'}">Me</router-link><br>
<router-link :to="{ name: 'FoFri', params: { webId: 'https://spoggy.solid.community/profile/card#me' }}">spoggy</router-link><br>

<router-link :to="{ name: 'FoFri', params: { webId: 'https://spoggy-test.solid.community/profile/card#me' }}">spoggy-test6</router-link><br>
<hr>


<!-- avatar & badge https://bootstrap-vue.org/docs/components/avatar-->
<b-list-group>
  <div v-for="f in friends" :key="f" class="container fluid mb-3">
    <b-list-group-item  v-bind:to="{ name: 'FoFri', params: { webId: f }}">
      <div><PeopleItem :webId="f" /></div>
    </b-list-group-item>
    <small class="row"><a :href="f" target="_blank">{{ f }}</a></small>
  </div>
</b-list-group>

<!--  <div v-for="f in friends" :key="f"  style="font-size: 2rem;">
<router-link v-bind:to="{ name: 'FoFri', params: { webId: f }}">
<b-avatar rounded="lg"></b-avatar>  {{ f }}
</router-link>
<br>
</div > -->


</div>
</template>

<script>
import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'FoFri',
  mixins: [profileMixin],
  components: {
    'PeopleItem': () => import('@/components/profile/PeopleItem'),
  },
  data: function () {
    return {
      webId: {},
      friends: [],
      indexes:{puti: {instances: []}}
      //  publicInstances : []
    }
  },
  created() {
    this.webId = this.$route.params.webId || this.$store.state.solid.webId
    this.updateFriends()
    this.updateIndexes()
  },
  watch: {
    '$route' (to) {
      //  '$route' (to, from) {
      this.webId = to.params.webId || this.$store.state.solid.webId
      this.updateFriends()
      this.updateIndexes()
    }
  },
  methods:{
    async updateFriends(){
      this.friends = await this.getFriends(this.webId)
    },
    async updateIndexes(){
      //temporary commented to see where to put it
      //  this.indexes = await this.getIndexes(this.webId)
      console.log("TODO : temporary commented to see where to put it",this.indexes)
    }
  },
  computed:{
    link(){
      console.log("route",this.$route, location.href)
      let path = location.protocol+location.host+location.pathname+"?add=https://spoggy.solid.community/profile/card#me"
      return  path //'<a href="'+path+'" target="_blank">Be my friend</a>'
    }
  }
}
</script>
<style>
a{
  color: #42b983;
}
</style>
