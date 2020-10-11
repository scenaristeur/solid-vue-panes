<i18n src="@/common/locales.json"></i18n>
<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">PoPock</b-navbar-brand>
      <div class="col p-0 m-0">
        <InboxNotif />
        <AgoraNotif />
      </div>
      <b-button size="sm" to="/workspaces" variant="outline-warning"><span v-if="currentWorkspace.name != undefined">{{ currentWorkspace.name}}</span> <span v-else>Workspaces </span></b-button>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>

          <!--  <b-nav-item  href="https://scenaristeur.github.io/spoggy-simple/?source=https://parle.solidcommunity.net/public/parle/" target="_blank">Viualization</b-nav-item>
        -->

        <!-- <b-nav-item-dropdown right>
        <template v-slot:button-content>
        {{ $t('databrowser') }}
      </template>
      <b-dropdown-item to="/storage">{{ $t('explorer') }} + {{ $t('editor') }}</b-dropdown-item>
      <b-dropdown-item to="/browser">{{ $t('explorer') }}</b-dropdown-item>
      <b-dropdown-item to="/editor">{{ $t('editor') }}</b-dropdown-item>
      <b-dropdown-item to="/bookmarks">{{ $t('bookmarks') }}</b-dropdown-item>
    </b-nav-item-dropdown> -->

    <b-nav-item to="/editor"> <b-icon-pen class="border border-info rounded p-2" font-scale="2"></b-icon-pen> {{ $t('editor') }}</b-nav-item>

    <b-nav-item-dropdown right>

      <template v-slot:button-content>
        {{ $t('User') }}
      </template>
      <b-dropdown-item to="/profile">  {{ $t('profile') }}</b-dropdown-item>
      <b-dropdown-item to="/general">Profile General</b-dropdown-item>
      <b-dropdown-item to="/fofri">{{ $t('fofri') }}</b-dropdown-item>
      <b-dropdown-item to="/indexes">Indexes</b-dropdown-item>
      <b-dropdown-item to="/friends">{{ $t('friends') }}</b-dropdown-item>
    </b-nav-item-dropdown>



    <b-nav-item-dropdown right>
      <template v-slot:button-content>
        Communication
      </template>
      <b-dropdown-item to="/parle">{{ $t('talk') }}</b-dropdown-item>
      <b-dropdown-item to="/chat">{{ $t('chat') }}</b-dropdown-item>
      <b-dropdown-item to="/inbox">{{ $t('inbox') }}</b-dropdown-item>
    </b-nav-item-dropdown>

    <!--    <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
  </b-navbar-nav>

  <!-- Right aligned nav items -->
  <b-navbar-nav class="ml-auto">
    <!--  <b-nav-form>
    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
  </b-nav-form> -->

  <!--    <ShareButton /> -->

  <!-- Using 'button-content' slot -->
  <LangChooser />
  <b-nav-item ><SolidLoginButton /></b-nav-item>


  <b-nav-item-dropdown right>
    <template v-slot:button-content>
      Experiments
    </template>
    <b-dropdown-item to="/storage">{{ $t('explorer') }} + {{ $t('editor') }}</b-dropdown-item>
    <b-dropdown-item to="/migration">Migration</b-dropdown-item>
    <b-dropdown-item to="/groups">Groups</b-dropdown-item>
    <b-dropdown-item to="/agora">Agora</b-dropdown-item>
    <b-dropdown-item to="/forms">Forms</b-dropdown-item>
    <b-dropdown-item to="/salut">Salut</b-dropdown-item>
    <b-dropdown-item to="/post">Post</b-dropdown-item>
    <b-dropdown-item to="/offers">Offers</b-dropdown-item>
    <b-dropdown-item to="/pod">Pod 2 </b-dropdown-item>
    <b-dropdown-item to="/share">Share</b-dropdown-item>
    <b-dropdown-item to="/network">Network</b-dropdown-item>
    <b-dropdown-item to="/holon">Holon</b-dropdown-item>
    <b-dropdown-item to="/gouvernance1">Gouvernance 1</b-dropdown-item>
    <b-dropdown-item to="/gouvernance">Gouvernance</b-dropdown-item>
    <b-dropdown-item to="/simplegouv">Simple Gouv</b-dropdown-item>
    <b-dropdown-item to="/semapps">SemApps</b-dropdown-item>
    <b-dropdown-item to="/workspaces">WorkSpaces</b-dropdown-item>

  </b-nav-item-dropdown>


  <b-nav-item to="/about">About</b-nav-item>
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
    'InboxNotif': () => import('@/components/inbox/InboxNotif'),
    'AgoraNotif': () => import('@/components/agora/AgoraNotif'),
    'LangChooser': () => import('@/components/translation/LangChooser')
  },
  methods: {
  },
  computed:{
    currentWorkspace: {
      get: function() { return this.$store.state.workspaces.currentWorkspace},
      set: function() {}
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
