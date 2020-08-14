<template>
  <div class = "chat">
    <h6>Solid Chat</h6>

    <div class="container">
      <router-link to="/indexes">Add an instance to your publicTypeIndex</router-link>
      <b-form-select  v-model="selected" :options="options"> </b-form-select>

    </div>
    <!--<PopChat  :url="selected" />-->
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
        { value: {instance:'https://w3c-cg.solid.community/public/w3c-cg-chat/', created:'12/01/2019', label: 'Solid W3C CG'}, text: 'Solid W3C CG' },
        { value: {instance:'https://parle.inrupt.net/public/chat/solid/applications/', created:'08/01/2020', label: 'Applications'} ,  text : 'Solid Applications' } ,
        { value: {instance:'https://parle.inrupt.net/public/solid/francais/', created:'08/01/2020', label: 'Français'} ,  text : 'Français' } ,
        { value: {instance:'https://solidarity.inrupt.net/public/Shighl/Shighl/', created:'01/01/2020', label: 'Shighl / Solid-vue-panes'} ,  text : 'Shighl / Solid-vue-panes' } ,
        {value: null, text: '----'} ,
        { value: {instance:'https://solidarity.inrupt.net/public/ChatTest/', created:'01/01/2020', label: 'ChatTest'} ,  text : 'ChatTest' } ,

        /*  {  v a l u e :  ' h t t p s : / / p a r l e . i n r u p t . n e t / p u b l i c / c h a t / s o l i d / w e l c o m e ' ,  t e x t :  ' W e l c o m e  t o  S o l i d  ! '  } ,

        {  v a l u e :  ' h t t p s : / / p a r l e . i n r u p t . n e t / p u b l i c / c h a t / s o l i d / a p p _ d e v e l o p e m e n t ' ,  t e x t :  ' S o l i d  A p p  D e v e l o p e m e n t '  } ,
        {  v a l u e :  ' h t t p s : / / p a r l e . i n r u p t . n e t / p u b l i c / c h a t / s o l i d / s p e c i f i c a t i o n s ' ,  t e x t :  ' S o l i d  S p e c i f i c a t i o n s '  } ,
        {  v a l u e :  ' h t t p s : / / p a r l e . i n r u p t . n e t / p u b l i c / c h a t / s o l i d / s e r v e r s ' ,  t e x t :  ' S o l i d  S e r v e r s '  } ,
        {  v a l u e :  ' h t t p s : / / p a r l e . i n r u p t . n e t / p u b l i c / c h a t / s o l i d / a p p l i c a t i o n s ' ,  t e x t :  ' S o l i d  A p p l i c a t i o n s '  } ,
        {  v a l u e :  n u l l ,  t e x t :  ' -    S o l i d  G r o u p s '  } ,
        {  v a l u e :  ' h t t p s : / / p a r l e . i n r u p t . n e t / p u b l i c / c h a t / s o l i d / p a n e l s / a u t h o r i z a t i o n ' ,  t e x t :  ' S o l i d  P a n e l s  A u t h o r i z a t i o n '  } ,
        {  v a l u e :  ' h t t p s : / / p a r l e . i n r u p t . n e t / p u b l i c / c h a t / s o l i d / p a n e l s / a u t h e n t i c a t i o n / ' ,  t e x t :  ' S o l i d  P a n e l s  A u t h e n t i c a t i o n '  } ,
        {  v a l u e :  ' h t t p s : / / s o l i d o s . s o l i d . c o m m u n i t y / T e a m / S o l i d O s % 2 0 t e a m % 2 0 c h a t / ' ,  t e x t :  ' S o l i d o s '  } ,
        {  v a l u e :  ' h t t p s : / / w 3 c - c g . s o l i d . c o m m u n i t y / p u b l i c / w 3 c - c g - c h a t / ' ,  t e x t :  ' S o l i d  W 3 C  C G '  } ,

        {  v a l u e :  n u l l ,  t e x t :  ' -    M o r e ' } ,
        {  v a l u e :  ' h t t p s : / / p a r l e . i n r u p t . n e t / p u b l i c / c h a t / s o l i d / m i s c ' ,  t e x t :  ' M i s c '  } ,
        {  v a l u e :  ' h t t p s : / / p a r l e . i n r u p t . n e t / p u b l i c / c h a t / f r a n c a i s ' ,  t e x t :  ' F r a n � a i s '  } ,
        {  v a l u e :  ' h t t p s : / / s o l i d a r i t y . i n r u p t . n e t / p u b l i c / S h i g h l / S h i g h l / ' ,  t e x t :  ' S h i g h l '  } ,
        {  v a l u e :  ' h t t p s : / / p a r l e . i n r u p t . n e t / p u b l i c / c h a t / a i ' ,  t e x t :  ' A r t i f i c i a l  I n t e l l i g e n c e '  } ,
        /*    {  v a l u e :  n u l l ,  t e x t :  ' -    T e s t s '  } ,
        {  v a l u e :  ' h t t p s : / / s o l i d a r i t y . i n r u p t . n e t / p u b l i c / C h a t T e s t / ' ,  t e x t :  ' C h a t T e s t '  } ,
        {  v a l u e :  ' h t t p s : / / p a r l e . i n r u p t . n e t / p u b l i c / c h a t / t e s t ' ,  t e x t :  ' t e s t '  } , */
      ]
      let channels = this.$store.state.solid.indexes.puti.instances
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
