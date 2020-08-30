<template>
  <div class="chat-selector container">
    <h5>Chat-SElector</h5>
    value : {{ value }}

    <div class="container fluid">
      <div>
        <b-card-group deck>
          <b-card bg-variant="dark" text-variant="white" header="My Channels" class="text-center">
            <b-card-text>

              <ul>
                <li>
                  <router-link to="/indexes">  <b-icon-chat class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-chat><br>New channel</router-link>

                </li>
                <li v-for="mc in my_channels" :key="mc.instance">
                  <router-link to="/chat"><b-icon-chat class="border border-info rounded p-2" font-scale="4" variant="info">
                  </b-icon-chat><br>
                  {{ mc.instance}}, {{ mc.classe }}
                </router-link>
              </li>
            </ul>
          </b-card-text>
        </b-card>

        <b-card bg-variant="dark" text-variant="white" header="Common Channels" class="text-center">
          <b-card-text>

            <ul>

              <li v-for="cc in common_channels" :key="cc.instance">
                <router-link :to="'/chat?instance='+cc"><b-icon-chat class="border border-info rounded p-2" font-scale="4" variant="info">
                </b-icon-chat><br>
                {{cc}}
              </router-link>
            </li>
          </ul>
        </b-card-text>

      </b-card>
    </b-card-group>
  </div>
</div>

</div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'
/*    let optionsBase =  [

{ value: {instance:'https://solidarity.inrupt.net/public/Solidarity/', created:'01/01/2020', label: 'Solidarity'} ,  text : 'Solidarity (main) ' } ,
{ value: {instance:'https://parle.inrupt.net/public/chat/solid/welcome/', created:'08/01/2020', label: 'Welcome'} ,  text : 'Welcome to Solid' } ,
{ value: {instance:'https://solidos.solid.community/Team/SolidOs%20team%20chat/', created:'01/01/2020', label: 'Solidos'}, text: 'Solidos' } ,
{ value: {instance:'https://w3c-cg.solid.community/public/w3c-cg-chat/', created:'01/01/2020', label: 'Solid W3C CG'}, text: 'Solid W3C CG' },
{ value: {instance:'https://parle.inrupt.net/public/chat/solid/applications/', created:'08/01/2020', label: 'Applications'} ,  text : 'Solid Applications' } ,
{ value: {instance:'https://parle.inrupt.net/public/chat/solid/francais/', created:'08/01/2020', label: 'Français'} ,  text : 'Français' } ,
{ value: {instance:'https://solidarity.inrupt.net/public/Shighl/Shighl/', created:'01/01/2020', label: 'Shighl / Solid-vue-panes'} ,  text : 'Shighl / Solid-vue-panes' } ,
{value: null, text: '----'} ,
{ value: {instance:'https://solidarity.inrupt.net/public/ChatTest/', created:'01/01/2020', label: 'ChatTest'} ,  text : 'ChatTest' } ,

]
let channels = this.$store.state.solid.indexes.puti != undefined ? this.$store.state.solid.indexes.puti.instances : []
*/

export default {
  name: 'FoFri',
  //mixins: [profileMixin],
  components: {
    //'PeopleItem': () => import('@/components/profile/PeopleItem'),
  },
  props: ['value'],
  data: function () {
    return {
      //  my_channels : ["one", "two"],
      common_channels: [
        {instance:'https://solidarity.inrupt.net/public/Solidarity/', created:'01/01/2020', label: 'Solidarity'},
        {instance:'https://parle.inrupt.net/public/chat/solid/welcome/', created:'08/01/2020', label: 'Welcome to Solid'},
        {instance:'https://solidos.solid.community/Team/SolidOs%20team%20chat/', created:'01/01/2020', label: 'Solidos'},
        {instance:'https://w3c-cg.solid.community/public/w3c-cg-chat/', created:'01/01/2020', label: 'Solid W3C CG'},
        {instance:'https://parle.inrupt.net/public/chat/solid/applications/', created:'08/01/2020', label: 'Applications'} ,
        {instance:'https://parle.inrupt.net/public/chat/solid/francais/', created:'08/01/2020', label: 'Français'} ,
        {instance:'https://solidarity.inrupt.net/public/Shighl/Shighl/', created:'01/01/2020', label: 'Shighl / Solid-vue-panes'} ,
        {instance:'https://solidarity.inrupt.net/public/ChatTest/', created:'01/01/2020', label: 'ChatTest'} ,
      ]
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
    this.my_channels = this.$store.state.solid.indexes.puti != undefined ? this.$store.state.solid.indexes.puti.instances : []
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    storage (st) {
      //  '$route' (to, from) {
      console.log(st)
    },
    selected(selected){
      this.selected = selected
      console.log(selected)
    }
  },
  methods:{
    /*  async updateFriends(){
    this.friends = await this.getFriends(this.webId)
  }*/
},
computed:{
  storage(){
    return this.$store.state.solid.storage
  },
  my_channels: {
    get: function() { return this.$store.state.solid.indexes.puti.instances},
    set: function() {}
  },

}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
