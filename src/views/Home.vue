<template>
  <div class="home">

    <img  width="100px" alt="Vue logo" src="../assets/logo.png">
    <h1>PoPock</h1>
    <h4> {{ $t('POds in the POCKet') }}  </h4>
    <ShareTarget />
    <HelloWorld />

  </div>
</template>

<i18n>
  {
    "de": {
      "POds in the POCKet": "Dein POD in deiner Tasche!"
    },
    "fr": {
      "POds in the POCKet": "Ton POd dans ta POChe!"
    },
    "ja": {
      "POds in the POCKet": "あなたのポケットにあなたのPOD！"
    },
    "es": {
      "POds in the POCKet": "¡Tu POD en tu bolsillo!"
    },
    "ru": {
      "POds in the POCKet": "Ваш POD в кармане!"
    }
  }
</i18n>

<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    'ShareTarget': () => import('@/components/share/ShareTarget')

  }
}
</script>
