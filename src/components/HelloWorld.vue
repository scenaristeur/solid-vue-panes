<template>
  <div class="hello">

    <h1>PoPock</h1>
    <h4>all your pods in the pocket</h4>


    <SolidLogin class="m-3" v-if="webId == null" />

    <p>
      <a href="https://scenaristeur.github.io/solid-vue-panes/?title=Popock&url=https://scenaristeur.github.io/solid-vue-panes/&text=My%20favorite%20Pod%20Manager">Bookmark Popock</a>
    </p>

    <hr>

    <div class="container fluid">
      <div>
        <b-card-group deck>
          <b-card bg-variant="warning" text-variant="white" header="Communication" class="text-center">
            <b-card-text>
              <ul>
                <li><router-link to="/chat">Solid Chat</router-link></li>

                <li> Add me ( https://spoggy.solid.community/profile/card#me ) to your friends and send me a mail to my <router-link to="/inbox">Inbox</router-link></li>
                <li> Are you crazy enough for nested Chat ? take a look at <router-link to="/parle">Parle</router-link></li>
                
                <!--  <li><router-link to="/inbox">Inbox : todo</router-link></li>
                <li><router-link to="/communication">Communication (Parle/Chat/Inbox)</router-link></li>-->
                <!--<li><router-link to="/share"> - Share, todo move to misc</router-link></li>-->
              </ul>
            </b-card-text>
          </b-card>

          <b-card bg-variant="secondary" text-variant="white" header="Storage" class="text-center">
            <b-card-text>
              <ul>
                <li><router-link to="/storage">Storage</router-link> </li>
                <li><router-link to="/browser">Browser</router-link></li>
                <li><router-link to="/editor">Editor</router-link></li>
              </ul>
            </b-card-text>
          </b-card>

          <b-card bg-variant="dark" text-variant="white" header="Profile" class="text-center">
            <b-card-text>
              <ul>
                <li><router-link to="/general">Profile</router-link></li>
                <li><router-link to="/fofri">FoFri</router-link> (following friends tool)</li>
                <!--  <li><router-link to="/indexes">Indexes</router-link></li>-->
                <li><router-link to="/friends">Friends</router-link></li>
                <!--  <li><router-link to="/profile">Profile (General + Friends)</router-link></li> -->
              </ul>
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
      <!--        <div class="mt-3">
      <b-card-group deck>
      <b-card bg-variant="info" text-variant="white" header="Info" class="text-center">
      <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
    </b-card>

    <b-card bg-variant="warning" text-variant="white" header="Warning" class="text-center">
    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
  </b-card>

  <b-card bg-variant="danger" text-variant="white" header="Danger" class="text-center">
  <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
</b-card>
</b-card-group>
</div>-->
<div class="mt-3">
  <b-card-group deck>
    <!--          <b-card bg-variant="light" header="Light" class="text-center">
    <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
  </b-card>

  <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
  <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
</b-card>
-->
<b-card header="More" class="text-center">
  <b-card-text>
    <a  href="https://github.com/scenaristeur/solid-vue-panes/projects/1?add_cards_query=is%3Aopen"
    target="_blank">Contribute</a><br>
    <a href="https://forum.solidproject.org/t/popock-the-pod-in-the-pocket/3378" target="_blank">Solid Community Forum</a> <br>
    You get inspired ?<br>
    Want new functionnalities ? <br>
    <a  href="https://github.com/scenaristeur/solid-vue-panes/projects/1?add_cards_query=is%3Aopen"
    target="_blank">Share your thougth...</a><br>
    <a  href="https://forum.solidproject.org/t/popock-the-pod-in-the-pocket/3378" target="_blank">Solid Community Forum</a>
    <br>

  </b-card-text>
</b-card>
</b-card-group>
</div>
</div>



<hr>
<p>Technique</p>

<h3>Components</h3>
Solid-vue-panes is developped around the concept of webcomponents.
<ul>
  <li>SoligLogin (example of code with the source <a href="https://github.com/scenaristeur/solid-vue-panes/blob/master/src/components/solid/SolidLogin.vue" target="_blank">SolidLogin.vue</a> )</li>
</ul>


<h3>Solid Libraries Used</h3>
<ul>
  <li><a href="#" target="_blank" rel="noopener">solid-auth-client</a></li>
  <li><a href="#" target="_blank" rel="noopener">solid-file-client</a></li>
  <li><a href="#" target="_blank" rel="noopener">ldflex-query</a></li>
  <li><a href="#" target="_blank" rel="noopener">tripledoc</a></li>
</ul>
<h3>Installed CLI Plugins</h3>
<ul>
  <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
  <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
  <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
  <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
  <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
  <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha" target="_blank" rel="noopener">unit-mocha</a></li>
</ul>
<h3>Essential Links</h3>
<ul>
  <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
  <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
  <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
  <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
  <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
</ul>
<h3>Ecosystem</h3>
<ul>
  <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
  <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
  <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
  <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
  <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
</ul>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    'SolidLogin': () => import('@/components/solid/SolidLogin')
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
