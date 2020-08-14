<template>
  <div class="fofri container">
    <h5>FoFri ! The following friends tool...</h5>
    Current :  <small>{{ webId }}</small><br>
    {{ friends.length }} friends<br>

    <router-link :to="{ name: 'FoFri'}">Me</router-link><br>
    <router-link :to="{ name: 'FoFri', params: { webId: 'https://spoggy.solid.community/profile/card#me' }}">spoggy</router-link>
  -->   <b-button disabled>add Spoggy to your friends</b-button><br>
  <router-link :to="{ name: 'FoFri', params: { webId: 'https://spoggy-test.solid.community/profile/card#me' }}">spoggy-test6</router-link><br>
  <hr>


  <!-- avatar & badge https://bootstrap-vue.org/docs/components/avatar-->
  <b-list-group>
    <div v-for="f in friends" :key="f" class="container fluid mb-3">
      <b-list-group-item  v-bind:to="{ name: 'FoFri', params: { webId: f }}">
        <!--<b-avatar class="mr-3"></b-avatar>
        <b-avatar button  src="https://placekitten.com/300/300" badge badge-variant="danger" class="mr-3"></b-avatar>
        <span class="mr-auto">{{ f }}</span>
        <b-badge>12</b-badge>-->
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
    }
  },
  created() {
    this.webId = this.$route.params.webId || this.$store.state.solid.webId
    this.updateFriends()
  },
  watch: {
    '$route' (to) {
      //  '$route' (to, from) {
      this.webId = to.params.webId || this.$store.state.solid.webId
      this.updateFriends()
    }
  },
  methods:{
    async updateFriends(){
      this.friends = await this.getFriends(this.webId)
    }
  }
}
</script>
<style>
a{
  color: #42b983;
}
</style>
