<template>
  <div class="about container">
    <h1>About Popock</h1>

    <p><a href="https://popock.slack.com" target="_blank">Join Popock slack</a></p>

    <p>If you don't find answers to your questions about Popock, the best way is to use <a href="https://forum.solidproject.org/t/popock-the-pod-in-the-pocket/3378" target="_blank">Solid Community Forum</a></p>
    <p>If you think Popock is what you need, you can share your opinion, impove & <a href="https://github.com/scenaristeur/solid-vue-panes/projects/1?add_cards_query=is%3Aopen" target="_blank">contribute</a> too.</p>

  <h3>Where is the source code of Popock?</h3>
    <p>Git repository at <a href="https://github.com/scenaristeur/solid-vue-panes/blob/master/README.md" target="_blank">https://github.com/scenaristeur/solid-vue-panes</a>.</p>

    <h3>Where are my data ?</h3>
    <p>With PoPock, your data are stored on your <a href="https://solidproject.org/" target="_blank">Solid Pod</a>.</p>
    <h3>Why does Popock uses <a href="https://solidproject.org/" target="_blank">Solid LinkedData Platform</a> as storage for my data ?</h3>
    <ol>
      <li>Because YOU are the one to choose where to store your data. On which POD provider. </li>
      <li>Because it uses LinkedData (<a href="https://www.w3.org/wiki/LinkedData" target="_blank">w3c wiki</a>, <a href="https://www.w3.org/standards/semanticweb/data" target="_blank">w3c standards</a>, <a href="https://fr.wikipedia.org/wiki/Web_des_donn%C3%A9es" target="_blank">fr.wikipedia</a>).</li>
    </ol>

    <h3>Components</h3>
    Popock is developped around the concept of webcomponents.
    <ul>
      <li>SoligLogin (example of code with the source <a href="https://github.com/scenaristeur/solid-vue-panes/blob/master/src/components/solid/SolidLogin.vue" target="_blank">SolidLogin.vue</a> )</li>
    </ul>


    <h3>Solid Libraries</h3>
    <ul>
      <li><a href="https://github.com/solid/solid-auth-client" target="_blank" rel="noopener">solid-auth-client</a></li>
      <li><a href="https://github.com/jeff-zucker/solid-file-client" target="_blank" rel="noopener">solid-file-client</a></li>
      <li><a href="https://github.com/solid/query-ldflex" target="_blank" rel="noopener">ldflex-query</a>  (<a href="https://comunica.github.io/Tutorial-ISWC2019-Slides-LDflex/#" target="_blank" rel="noopener">ldflex-query tuto</a>)</li>
      <li><a href="https://vincenttunru.gitlab.io/tripledoc/" target="_blank" rel="noopener">tripledoc</a></li>
      <li><a href="https://docs.inrupt.com/developer-tools/javascript/client-libraries/" target="_blank" rel="noopener">@inrupt/solid-client</a></li>

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



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  text-align: left;
}
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
