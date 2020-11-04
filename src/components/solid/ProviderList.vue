<i18n src="@/common/locales.json"></i18n>
<template>
  <div class=" provider-list container">

    <div>


      <b-card sub-title="Card subtitle">
        <b-card-title>{{$t('provider_select_proposition')}}</b-card-title>

        <b-dropdown id="dropdown-1" text="Fournisseurs" class="m-md-2">
          <b-dropdown-item
          v-for="o in options"
          :key="o.url"
          :title="o.description"
          @click="openProvider(o)"
          :disabled="o.disabled">{{o.text}}</b-dropdown-item>
        </b-dropdown>


        <b-list-group>
          <b-list-group-item v-for="o in options"  :key="o.url" :href="o.url" target="_blank" :disabled="o.disabled">
            <b>{{ o.text }}</b>
            <p>
              <small>
                {{ o.description }}
              </small>
            </p>
            <p><small>Support : {{o.support}}</small></p>
          </b-list-group-item>
        </b-list-group>
        <!-- <b-card-text>A second paragraph of text in the card.</b-card-text>

        <a href="#" class="card-link">Card link</a>
        <b-link href="#" class="card-link">Another link</b-link> -->
      </b-card>

    </div>

    <b-button href="https://solidproject.org/" variant="info" target="_blank">What is Solid ?</b-button>
  </div>
</template>

<script>
export default {
  name: 'ProviderList',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
//  mixins: [ToastMixin],
props:['value'],
data() {
  return {
    source: "https://ewingson.solidcommunity.net/public/ttl/pod-provider.ttl",
    options: [
      {text: "https://solidcommunity.net", description:"solidcommunity.net is a public Solid server. (25 Mo)", url:"https://solidcommunity.net/", support:"https://forum.solidproject.org/"},
      {text: "https://solidweb.org", description:"solidweb.org is a public Solid server based in Germany which is in an experimental state. (250 Mo)", url:"https://solidweb.org/", support:"https://gitlab.com/solidweb.org/support"},
      {text: "https://inrupt.net", description:"inrupt.net is a public Solid server provided by Inrupt, Inc. (25 Mo)", url:"https://inrupt.net/"},
      {text: "https://dev.inrupt.net", description:"dev.inrupt.net is a public Solid development server of Inrupt, Inc.", url:"https://dev.inrupt.net/"},
      {text: "https://solid.open.ac.uk", description:"solid.open.ac.uk is a public Solid server based at the UK's Open University.", url:"https://solid.open.ac.uk/"},
      {text: "https://solid.pldn.nl/", description:"solid.pldn.nl is an experimental public Solid server based in the Netherlands.", url:"https://solid.pldn.nl"},
      {text: "https://solid.openlinksw.com:8444", description:"solid.openlinksw.com:8444 is a public Solid server running 4.x deployed by OpenLink Software Inc., U.S.", url:"https://solid.openlinksw.com:8444"},
      {text: "https://solid.openlinksw.com:8445", description:"solid.openlinksw.com:8444 is a public Solid server running 5.x deployed by OpenLink Software Inc., U.S.", url:"https://solid.openlinksw.com:8445/"},

      {text: "BECOME A POD PROVIDER", description:"Build Your POD PROVIDER", url:"https://solidproject.org/for-developers/pod-server"},

      {text: "https://ld.solidbase.info", description:"ld.solidbase.info is a public Solid server hosted by ecobytes.net, Germany.", url:"https://ld.solidbase.info/", disabled:true},
      {text: "https://solid.authing", description:"solid.authing was a public Solid server deployed in China.", url:"https://solid.authing.cn/", disabled:true},
      {text: "https://podware.org", description:"podware.org was a public Solid server deployed in Italy", url:"https://podware.org", disabled:true},
      {text: "https://solid.community", description:"solid.community was a public server for early adopters of Solid.", url:"https://solid.community/", disabled:true},
    ]
  }
},
created(){
  //  console.log("route",this.$route)
  //  this.url = this.$route.params.url
  //  this.getData()
},
methods: {
  openProvider(p){
    console.log(p)
    window.open(p.url, '_blank');

  }
  /*async getData() {
  let dataDoc = await fetchDocument(this.url);
  let subj = dataDoc.getSubject(this.url+"#this")
  console.log(subj)
  let types = subj.getAllRefs(rdf.type)
  console.log(types)
}*/
},

watch:{
  /*'$route' (to) {
  //  '$route' (to, from) {
  console.log(to)
},
url(url){
console.log("URL CHANGE",url)
}*/
},
computed:{
  /*storage: {
  get: function() { return this.$store.state.solid.storage},
  set: function() {}
},*/
},
}
</script>
<style>
.provider-list {
  text-align: left;
}
</style>
