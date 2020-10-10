<template>
  <div class="modele">
    <h1>This is an TestRouter page</h1>
    <!--  <COMPONENET />  -->
    parametre {{ webId }}
    <hr>

    <router-link :to="{ name: 'TestRouter', params: { webId: 'https://spoggy.solidcommunity.net/profile/card#me' }}">spoggy</router-link><br>
    <router-link :to="{ name: 'TestRouter', params: { webId: 'https://spoggy-test5.solidcommunity.net/profile/card#me' }}">sp t5</router-link><br>
    <router-link :to="{ name: 'TestRouter', params: { webId: 'https://spoggy-test6.solidcommunity.net/profile/card#me' }}">sp t6</router-link><br>
    <router-link :to="{ name: 'TestRouter'}">No param</router-link><br>
    <hr>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'TestRouter',
  data: function () {
    return {
      webId: {},
      //      friends: []
    }
  },
  created() {
    console.log("webId",this.$route.params.webId)
    this.webId = this.$route.params.webId || "me"

  },
  watch: {
    '$route' (to, from) {
      console.log("from",from)
      console.log("to",to)
      this.webId = to.params.webId || "me"
      // réagir au changement de route...
    }
  }
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
}
</script>
