<i18n src="@/common/locales.json"></i18n>

<template>
  <div class="translation">
    <h1>This is an translation test page</h1>
    <!--  <COMPONENET />  -->

    <label for="locale">locale</label>
    <select v-model="locale">
      <option>en</option>
      <option>fr</option>
      <option>de</option>
      <option>ja</option>
    </select>
    <p>message: {{ $t('hello') }}</p>

    <a href="https://github.com/scenaristeur/solid-vue-panes/tree/master/src/components/TranslationTest.vue" target="_blank">Help Translating to your language</a>

  </div>
</template>

<i18n>
  {
    "de": {
      "hello": "Hallo Welt!"
    },
    "fr": {
      "hello": "Salut le monde!"
    }
  }
</i18n>

<script>
//http://kazupon.github.io/vue-i18n/guide/sfc.html#basic-usage

// @ is an alias to /src

export default {
  name: 'TranslationTest',
  data () { return { locale: 'en' } },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  }
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
}
</script>
