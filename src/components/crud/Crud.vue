<template>
  <div class="crud container">
    shapeUrl : {{ shape_url }}
    <LoadShape />

  </div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'Crud',
  //  mixins: [profileMixin],
  components: {
    'LoadShape': () => import('@/components/crud/LoadShape'),
  },
  data: function () {
    return {
      webId: {},
      shape_url: "",
    }
  },
  created() {
    this.shape_url = this.$route.query.shape_url
    /*this.webId = this.$route.params.webId || this.$store.state.solid.webId
    this.updateFriends()*/
  },
  watch: {
    '$route' (to) {
      console.log(to)
      //  '$route' (to, from) {
      //  this.webId = to.params.webId || this.$store.state.solid.webId
      //  this.updateFriends()
    }
  },
  methods:{
    /*async updateFriends(){
    this.friends = await this.getFriends(this.webId)
  }*/
}
}
</script>

<style>
.crud {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

  /* palette */
  --light-pink: hsla(0, 100%, 84%, 1);
  --deep-champagne: hsla(33, 100%, 82%, 1);
  --lemon-yellow-crayola: hsla(62, 100%, 86%, 1);
  --tea-green: hsla(110, 100%, 87%, 1);
  --celeste: hsla(185, 100%, 80%, 1);
  --baby-blue-eyes: hsla(217, 100%, 81%, 1);
  --maximum-blue-purple: hsla(249, 100%, 85%, 1);
  --mauve: hsla(300, 100%, 89%, 1);
  --baby-powder: hsla(60, 100%, 99%, 1);
  
}
.brute {
  background-color: var(--mauve);
  border:1px dotted black;
  font-size: smaller;
}
.brute-hide {
  display: none;
}
.brute:before {
  content: "♥ debug: ";
}
</style>
