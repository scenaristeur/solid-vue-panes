module.exports = {
  // options...
  publicPath: process.env.NODE_ENV === 'production'
  ? '/solid-vue-panes/'
  : '/'
  ,
/* pages: {
    loadShape: {
      entry: 'src/components/LoadShape.vue',
    template: 'client/public/index.html',
    },
    helloWorld: {
      entry: 'src/components/HelloWorld.vue',
     template: 'client/public/index.html',
    },
    SolidLogin: {
      entry: 'src/components/solid/SolidLogin.vue',
     template: 'client/public/index.html',
    },
  },*/
}
