<template>
  <div class="chat">
    <h1>Solid Chat</h1>
    <b-form-select v-model="selected" :options="options"></b-form-select>


    <div v-if="selected == null">
        Or add/create a new channel
      <b-form-group>
        <b-form-input v-model="name" placeholder="Channel name"></b-form-input>
        <div class="mt-2">Value: {{ name }}</div>
        <b-form-input v-model="url" placeholder="Channel url"></b-form-input>
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
    'SolidChatList': () => import('@/components/SolidChatList')
  },
  data() {
    return {
      selected: "https://solidarity.inrupt.net/public/ChatTest/",
      options: [
        { value: null, text: 'Please select an option or create a new Channel' },
        { value: null, text: '' },
        { value: 'https://solidarity.inrupt.net/public/ChatTest/', text: 'ChatTest' },
        { value: 'https://solidarity.inrupt.net/public/Solidarity/', text: 'Solidarity' },
        { value: 'https://solidarity.inrupt.net/public/Shighl/Shighl/', text: 'Shighl' },
        { value: 'https://solidos.solid.community/Team/SolidOs%20team%20chat/', text: 'Solidos' },
        { value: 'https://w3c-cg.solid.community/public/w3c-cg-chat/', text: 'Solid W3C CG' },
        /*    { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }*/
      ]
    }
  },
  methods:{

  },
  watch: {
    selected: function (val) {
      console.log(val)
      //  this.fullName = val + ' ' + this.lastName
    }
  }
}
</script>
