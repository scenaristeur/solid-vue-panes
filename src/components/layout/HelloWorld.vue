<i18n src="@/common/locales.json"></i18n>

<template>
  <div class="hello">
    <div v-if="webId == null">

    <SolidLoginButton class="m-3"  />
    <ProviderList />

  </div>

    <div class="container fluid">
      <div>
        <b-card-group deck>

          <b-card bg-variant="dark" text-variant="white" header="Profile" class="text-center">
            <b-card-text>
              <ul>
                <li><router-link to="/profile"><b-icon-person-badge class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-person-badge><br>{{ $t('profile') }}</router-link></li>
                <li><router-link to="/friends"><b-icon-people-fill class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-people-fill><br>{{ $t('friends') }}</router-link></li>
                <li><router-link to="/fofri"><b-icon-people class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-people><br>{{ $t('fofri') }}</router-link></li>
                <!--  <li><router-link to="/indexes">Indexes</router-link></li>-->
                <!--  <li><router-link to="/profile">Profile (General + Friends)</router-link></li> -->
              </ul>
            </b-card-text>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" header="Communication" class="text-center">
            <b-card-text>
              <ul>
                <li><router-link to="/chat"><b-icon-chat class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-chat><br>{{ $t('chat') }}</router-link></li>
                <li><router-link to="/inbox"><b-icon-mailbox class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-mailbox><br>{{ $t('inbox') }}</router-link></li>
                <li><router-link to="/parle"><b-icon-chat-text-fill class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-chat-text-fill><br>{{ $t('talk') }}</router-link></li>
                <!--<li><router-link to="/share"> - Share, todo move to misc</router-link></li>-->
              </ul>
            </b-card-text>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" header="Gouvernance" class="text-center">
            <b-card-text>
              <ul>
                <li><router-link to="/tension/edit"><b-icon-lightning class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-lightning><br>{{ $t('Tension') }}</router-link></li>
                <li><router-link to="/tensions"><b-icon-card-checklist class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-card-checklist><br>{{ $t('Tensions') }}</router-link></li>
                <li><router-link to="/groups"><b-icon-building class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-building><br>{{ $t('Groups') }}</router-link></li>
                <li><router-link to="/parle"><b-icon-chat-text-fill class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-chat-text-fill><br>{{ $t('talk') }}</router-link></li>
              </ul>
            </b-card-text>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" header="Storage" class="text-center">
            <b-card-text>
              <ul>
                <li>
                  <!-- <router-link to="/storage"><b-icon-folder class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-folder><br>{{ $t('databrowser') }}</router-link>  -->
                  <router-link to="/editor"><b-icon-pen class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-pen><br>{{ $t('editor') }}</router-link>
                </li>
                <li><router-link to="/bookmarks"><b-icon-bookmarks-fill class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-bookmarks-fill><br>{{ $t('bookmarks') }}</router-link></li>
              </ul>
            </b-card-text>
          </b-card>


        </b-card-group>
      </div>

      <div class="mt-3">
        <b-card-group deck>
          <b-card header="More" class="text-center">
            <b-card-text>
              <router-link to="/about"><b-icon-patch-question-fll class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-patch-question-fll><b-icon-patch-question class="border border-info rounded p-2" font-scale="4" variant="info"></b-icon-patch-question><br>About Popock</router-link>
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
    'ProviderList': () => import('@/components/solid/ProviderList')
  },
  computed:{
    webId(){
      return this.$store.state.solid.webId
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
}
</style>
