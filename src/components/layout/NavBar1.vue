<i18n src="@/common/locales.json"></i18n>
<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">PoPock</b-navbar-brand>
      <InboxNotif />

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>

          <!--  <b-nav-item  href="https://scenaristeur.github.io/spoggy-simple/?source=https://parle.solid.community/public/parle/" target="_blank">Viualization</b-nav-item>
        -->

        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            {{ $t('databrowser') }}
          </template>
          <b-dropdown-item to="/storage">{{ $t('databrowser') }}</b-dropdown-item>
          <b-dropdown-item to="/browser">Browser</b-dropdown-item>
          <b-dropdown-item to="/editor">Editor</b-dropdown-item>
          <b-dropdown-item to="/bookmarks">{{ $t('bookmarks') }}</b-dropdown-item>
        </b-nav-item-dropdown>





        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            {{ $t('communication') }}
          </template>
          <b-dropdown-item to="/chat">{{ $t('chat') }}</b-dropdown-item>
          <b-dropdown-item to="/inbox">{{ $t('inbox') }}</b-dropdown-item>
          <b-dropdown-item to="/parle">{{ $t('talk') }}</b-dropdown-item>

        </b-nav-item-dropdown>

        <!--    <b-nav-item href="#" disabled>Disabled</b-nav-item> -->


        <b-nav-item-dropdown right>

          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item to="/profile">Profile</b-dropdown-item>
          <b-dropdown-item to="/general">Profile General</b-dropdown-item>
          <b-dropdown-item to="/fofri">Following Friends</b-dropdown-item>
          <b-dropdown-item to="/indexes">Indexes</b-dropdown-item>
          <b-dropdown-item to="/friends">Friends</b-dropdown-item>
          <b-dropdown-item href="#" disabled>Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item @click="localeChange('en')">EN</b-dropdown-item>
          <b-dropdown-item @click="localeChange('fr')">FR</b-dropdown-item>
          <b-dropdown-item @click="localeChange('de')">DE</b-dropdown-item>
          <b-dropdown-item @click="localeChange('ja')">JA</b-dropdown-item>
          <b-dropdown-item @click="localeChange('es')">ES</b-dropdown-item>
          <b-dropdown-item @click="localeChange('ru')">RU</b-dropdown-item>
          <b-dropdown-item to="/translation">Translate to your language</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item to="/about">About</b-nav-item>



      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!--  <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form> -->

      <!--    <ShareButton /> -->

      <!-- Using 'button-content' slot -->



      <b-nav-item ><SolidLoginButton /></b-nav-item>

      <b-nav-item-dropdown right>
        <template v-slot:button-content>
          Misc
        </template>

        <b-dropdown-item to="/groups">Groups</b-dropdown-item>
        <b-dropdown-item to="/offers">Offers</b-dropdown-item>
        <b-dropdown-item to="/forms">Forms</b-dropdown-item>
        <b-dropdown-item to="/pod">Pod</b-dropdown-item>
        <b-dropdown-item to="/share">Share</b-dropdown-item>
        <b-dropdown-item to="/agora">Agora</b-dropdown-item>

      </b-nav-item-dropdown>



    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</div>
</template>

<script>
//import SolidLogin from '@/components/solid/SolidLogin.vue'


export default {
  name: 'NavBar',
  props: {
    msg: String
  },
  components: {
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
    'InboxNotif': () => import('@/components/inbox/InboxNotif')
  },
  methods: {
    localeChange(loc){
      console.log(loc)
      this.$i18n.locale = loc
    },
  }
  /*watch: {
  locale (val) {
  this.$i18n.locale = val
}
}*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}*/
</style>
