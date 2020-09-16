<i18n src="@/common/locales.json"></i18n>
<template>
  <div class="home">

    <img width="100px" alt="Vue logo" src="../assets/popock.png">
    <h1>PoPock</h1>
    <h4>{{ $t('POds in the POCKet') }}</h4>


    <HelloWorld />
    <ShareTarget />


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
