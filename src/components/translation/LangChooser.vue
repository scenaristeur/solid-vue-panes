<template>
  <div class="lang-chooser">
    <b-nav-item-dropdown text="Lang" right>
      <b-dropdown-item @click="localeChange('en')">EN</b-dropdown-item>
      <b-dropdown-item @click="localeChange('fr')">FR</b-dropdown-item>
      <b-dropdown-item @click="localeChange('de')">DE</b-dropdown-item>
      <b-dropdown-item @click="localeChange('ja')">JA</b-dropdown-item>
      <b-dropdown-item @click="localeChange('es')">ES</b-dropdown-item>
      <b-dropdown-item @click="localeChange('ru')">RU</b-dropdown-item>
      <b-dropdown-item to="/translation">Translate to your language</b-dropdown-item>
    </b-nav-item-dropdown>

</div>
</template>

<script>
//import profileMixin from '@/mixins/profileMixin'

export default {
  name: 'FoFri',
  //mixins: [profileMixin],
  components: {
    //'PeopleItem': () => import('@/components/profile/PeopleItem'),
  },
  props: ['value'],
  data: function () {
    return {
      //  webId: {},
      //  friends: [],
    }
  },
  created() {
    //  this.webId = this.$route.params.webId || this.$store.state.solid.webId
    //  this.updateFriends()
  },
  watch: {
    storage (st) {
      //  '$route' (to, from) {
      console.log(st)
    }
  },
  methods:{
    localeChange(loc){
      console.log(loc)
      this.$i18n.locale = loc
    },
},
computed:{
  storage(){
    return this.$store.state.solid.storage
  }
}
}
</script>
