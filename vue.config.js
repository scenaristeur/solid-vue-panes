module.exports = {
  // options...
  publicPath: process.env.NODE_ENV === 'production'
  ? '/solid-vue-panes/'
  : '/'
  ,
  //https://cli.vuejs.org/core-plugins/pwa.html#example-configuration
  //https://stackoverflow.com/questions/55590275/how-to-fix-that-url-query-params-are-not-working-via-the-web-share-target-api-in
  pwa: {
   name: 'PoPock',
   themeColor: '#4DBA87',
   msTileColor: '#000000',
   appleMobileWebAppCapable: 'yes',
   appleMobileWebAppStatusBarStyle: 'black',
   "share_target": {
  "action": "/share",
  "method": "GET",
   "enctype": "application/x-www-form-urlencoded",
  "params": {
    "title": "title",
    "text": "text",
    "url": "url"
  }
},

   // configure the workbox plugin
   workboxPluginMode: 'InjectManifest',
   workboxOptions: {
     // swSrc is required in InjectManifest mode.
     swSrc: 'src/registerServiceWorker.js',
     // ...other Workbox options...
   }
 }
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
