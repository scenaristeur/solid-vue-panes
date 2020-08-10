<template>
  <div class="chat">
    <h1>This is an chat page</h1>
     <b-form-select v-model="selected" :options="options"></b-form-select>
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
        selected: "https://solidarity.inrupt.net/public/Solidarity/",
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'https://solidarity.inrupt.net/public/ChatTest/', text: 'ChatTest' },
          { value: 'https://solidarity.inrupt.net/public/Solidarity/', text: 'Solidarity' },
      /*    { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }*/
        ]
      }
    },
    watch: {
  selected: function (val) {
    console.log(val)
  //  this.fullName = val + ' ' + this.lastName
  }
}
}
</script>
