<i18n src="@/common/locales.json"></i18n>
<template>
  <div class="home">
<div>Due solid.community shutdown : if you want to migrate your data from solid.community to soliudcommunity.net, or host some Chat, or use Inbox, see <a href="/migration">Migration</a>.
</div>
    <img width="100px" alt="Vue logo" src="../assets/popock.png">
    <h1>PoPock</h1>
    <h4>{{ $t('POds in the POCKet') }}</h4>
    <ShareTarget />
    <HelloWorld />



  </div>
</template>


<script>

export default {
  name: 'Home',
  components: {
    'HelloWorld': () => import('@/components/layout/HelloWorld'),
    'ShareTarget': () => import('@/components/share/ShareTarget')
  }
}
</script>
