<template>
  <div class="shape-create container">
    <h5>Shape Create</h5>
    shape_url : {{ shape_url }}
<!--<FormTab />-->

  </div>
</template>

<script>
import ShexMixin from '@/mixins/crud/ShexMixin'

export default {
  name: 'ShapeCreate',
  mixins: [ShexMixin],
  components: {
  //  'FormTab': () => import('@/components/crud/FormTab'),
  },
  props: ['shape_url'],
  data: function () {
    return {
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
    this.load_schema(this.shape_url)
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    storage (st) {
      //  '$route' (to, from) {
      console.log(st)
    },
    shape_url(s_u){
      console.log("shape_url changed",s_u)
      this.load_schema(s_u)
    }

  },
  methods:{

    load_schema(s_u){
      this.load_remote_schema(s_u)

    }

    /*  async updateFriends(){
    this.friends = await this.getFriends(this.webId)
  }*/
},
computed:{
  storage(){
    return this.$store.state.solid.storage
  }
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
