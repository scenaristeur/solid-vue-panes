<template>
  <div class = "chat">
    <div class="container">
      <router-link to="/indexes">Add an instance to your publicTypeIndex</router-link>
      <b-form-select  v-model="selected" :options="options"> </b-form-select>

    </div>
<SolidChatList  :channel="selected" />
  </div>
</template>

<script>


export default  {
  name :  'Chat' ,

    components :  {
      //   ' P o p C h a t ' :  ( )  = >  i m p o r t ( ' @ / c o m p o n e n t s / P o p C h a t ' ) ,
    'SolidChatList' :  () => import ( '@/components/chat/SolidChatList' )
    } ,
    data ( )  {
      return  {
        selected :  {} ,

      }
    } ,


    computed : {

      options () {
        let optionsBase =  [

          { value: {instance:'https://solidarity.inrupt.net/public/Solidarity/', created:'01/01/2020', label: 'Solidarity'} ,  text : 'Solidarity (main) ' } ,
          { value: {instance:'https://parle.inrupt.net/public/chat/solid/welcome/', created:'08/01/2020', label: 'Welcome'} ,  text : 'Welcome to Solid' } ,
          { value: {instance:'https://solidos.solid.community/Team/SolidOs%20team%20chat/', created:'01/01/2020', label: 'Solidos'}, text: 'Solidos' } ,
          { value: {instance:'https://w3c-cg.solid.community/public/w3c-cg-chat/', created:'01/01/2020', label: 'Solid W3C CG'}, text: 'Solid W3C CG' },
          { value: {instance:'https://parle.inrupt.net/public/chat/solid/applications/', created:'08/01/2020', label: 'Applications'} ,  text : 'Solid Applications' } ,
          { value: {instance:'https://parle.inrupt.net/public/solid/francais/', created:'08/01/2020', label: 'Français'} ,  text : 'Français' } ,
          { value: {instance:'https://solidarity.inrupt.net/public/Shighl/Shighl/', created:'01/01/2020', label: 'Shighl / Solid-vue-panes'} ,  text : 'Shighl / Solid-vue-panes' } ,
          {value: null, text: '----'} ,
          { value: {instance:'https://solidarity.inrupt.net/public/ChatTest/', created:'01/01/2020', label: 'ChatTest'} ,  text : 'ChatTest' } ,

]
let channels = this.$store.state.solid.indexes.puti != undefined ? this.$store.state.solid.indexes.puti.instances : []
let optionsChannels = []
if (channels.length > 0) {
  channels.forEach((c) => {
  //  console.log(c)
    if (c.classe == 'http://www.w3.org/ns/pim/meeting#LongChat') {
      optionsChannels.push({value: c, text: c.label || c.instance } )
    }
  } ) ;
}

let options = optionsChannels.concat(optionsBase)
console.log ("OPTIONS",options )
return options
} ,
} ,
}
</script>
<style>
.chat {
  text-align : left;
}
</style>
