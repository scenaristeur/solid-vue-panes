<template>
  <div class="chat">
    <h1>Solid Chat</h1>
    <b-form-select v-model="selected" :options="options"></b-form-select>


    <div v-if="selected == null">

      <b-form-group class="row">
        <label for="name">Chat Channel Name</label>
        <b-form-input id="name" v-model="name" :placeholder="'ex: '+name"></b-form-input>
        <label for="url">Chat Channel url</label>
        <b-form-input id="url" v-model="url" :placeholder="'ex: '+url"></b-form-input>
        <div class="mt-2">Value: {{ url }}</div>
        <b-button @click="add">Add</b-button>
      </b-form-group>
    </div>

    <!--  <PopChat :url="selected" />-->
    <SolidChatList :url="selected" />
  </div>
</template>

<script>


export default {
  name: 'Chat',
  components: {
    //  'PopChat': () => import('@/components/PopChat'),
    'SolidChatList': () => import('@/components/chat/SolidChatList')
  },
  data() {
    return {
      selected: "https://solidarity.inrupt.net/public/Solidarity/",
      options: [
        { value: null, text: 'Please select an option or add a manually created one (Creation is not available yet)' },
        //    { value: null, text: '' },

        { value: 'https://solidarity.inrupt.net/public/Solidarity/', text: 'Solidarity (main)' },

        { value: null, text: '-   Solid' },
        { value: 'https://parle.inrupt.net/public/chat/solid/welcome', text: 'Welcome to Solid !' },

        { value: 'https://parle.inrupt.net/public/chat/solid/app_developement', text: 'Solid App Developement' },
        { value: 'https://parle.inrupt.net/public/chat/solid/specifications', text: 'Solid Specifications' },
        { value: 'https://parle.inrupt.net/public/chat/solid/servers', text: 'Solid Servers' },
        { value: 'https://parle.inrupt.net/public/chat/solid/applications', text: 'Solid Applications' },
        { value: null, text: '-   Solid Groups' },
        { value: 'https://parle.inrupt.net/public/chat/solid/panels/authorization', text: 'Solid Panels Authorization' },
        { value: 'https://parle.inrupt.net/public/chat/solid/panels/authentication/', text: 'Solid Panels Authentication' },
        { value: 'https://solidos.solid.community/Team/SolidOs%20team%20chat/', text: 'Solidos' },
        { value: 'https://w3c-cg.solid.community/public/w3c-cg-chat/', text: 'Solid W3C CG' },

        { value: null, text: '-   More'},
        { value: 'https://parle.inrupt.net/public/chat/solid/misc', text: 'Misc' },
        { value: 'https://parle.inrupt.net/public/chat/francais', text: 'Français' },
        { value: 'https://solidarity.inrupt.net/public/Shighl/Shighl/', text: 'Shighl' },
        { value: 'https://parle.inrupt.net/public/chat/ai', text: 'Artificial Intelligence' },
        { value: null, text: '-   Tests' },
        { value: 'https://solidarity.inrupt.net/public/ChatTest/', text: 'ChatTest' },
        { value: 'https://parle.inrupt.net/public/chat/test', text: 'test' },

        /*    { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }*/
      ],
      //  url: this.$store.state.solid.storage+"public/Chat",
      name: "Chat"
    }
  },
  methods:{
    add(){
      this.options.push({ value: this.url, text: this.name })
      this.selected = this.url
      this.url = this.$store.state.solid.storage+"public/Chat"
      this.name = "Chat"
    }
  },
  watch: {
    selected: function (val) {
      console.log(val)
      //  this.fullName = val + ' ' + this.lastName
    }
  },
  computed:{
    url(){
      return this.$store.state.solid.storage+"public/Chat"
    }
  },
}
</script>
<style>
.chat {
  text-align: left;
}
</style>
