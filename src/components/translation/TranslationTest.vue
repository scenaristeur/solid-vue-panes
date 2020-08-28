<i18n src="@/common/locales.json"></i18n>

<template>
  <div class="translation">
    <h1>This is an translation test page</h1>
    <!--  <COMPONENET />  -->

    <a href="https://github.com/scenaristeur/solid-vue-panes/blob/master/src/common/locales.json" target="_blank">Help Translating to your language</a>

    <hr>
    Translation test
    <label for="locale">locale</label>
    <select v-model="locale">
      <option>en</option>
      <option>fr</option>
      <option>de</option>
      <option>ja</option>
      <option>es</option>
      <option>ru</option>
    </select>
    <p>hello: {{ $t('hello') }}</p>
    <p>login: {{ $t('login') }}</p>
    <p>logout: {{ $t('logout') }}</p>


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
