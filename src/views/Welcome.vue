<i18n src="@/common/locales.json"></i18n>
<template>
  <div class="welcome container mt-3">

    <div class="row">
      <div class="col-md-6 col-12 mb-3">
        <p>
          Popock utilise la plateforme Solid :

          <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/qUZuaNkEvGU?rel=0"
          allowfullscreen
          ></b-embed>
          <small><i>(la traduction automatique est disponible dans les 'Paramètres' de la vidéo)</i></small>
        </p>
        <p>
          poPock Demo Semwebpro 2020
          <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/yk7o0UpD49Y?rel=0"
          allowfullscreen
          ></b-embed>
        </p>
      </div>

      <b-jumbotron class="col" bg-variant="info" text-variant="white" border-variant="dark">
        <template v-slot:header class="header">Popock</template>

        <template v-slot:lead>
          {{ $t('POds in the POCKet') }}
        </template>

        <hr class="my-4">




        <p>
          Le projet Solid de Sir Tim Berners-Lee propose une manière différente d'utiliser Internet,
          en dissociant les données & les applications.
        </p>
        <p>Chacun peut choisir où il stocke ses données, à qui il les partage, & quelles applications y ont accès.
        </p>
        <p>
          Vos données sont structurées de manière à pouvoir être liées les unes aux autres.<br>
          Il est également possible de les lier aux données partagées par d'autres utilisateurs, ou à des bases de données sémantiques telles que Semapps, offrant ainsi une infinité de connexions !
        </p>
        <p>
          <b>Popock</b> est une applications modulaire qui facilite la gestion de vos données Solid en mettant à votre disposition plusieurs outils :
          <ul>
            <li>Profil étendu</li>
            <li>Explorateur</li>
            <li>Editeur</li>
            <li>Réseau social</li>
            <li>Chat</li>
            <li>Collaboration</li>
            <li>Gouvernance partagée</li>
            <li>Visualisation graphique des informations et des liens</li>
            <li>Et bien d'autres modules à venir...</li>
          </ul>
        </p>

        <div class="row bg-light rounded" >
          <SolidLoginButton  class="m-2"/>
          <b-button class="m-2" variant="info" to="/providers">Je n'ai pas de POD</b-button>
        </div>
      </b-jumbotron>

    </div>

    <b-jumbotron>
      <div class="row">
        <div class="col">
          <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/JcITkApsrAM?rel=0"
          allowfullscreen
          ></b-embed>
          Media sharing with poPock / partager images, videos, sons sur votre Pod

        </div>

        <div class="col">
          <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/njsg4_T4vuQ?rel=0"
          allowfullscreen
          ></b-embed>
          Editeur Popock (FR)

        </div>
        <div class="col">
          <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/EJ9zD6i5juk?rel=0"
          allowfullscreen
          ></b-embed>
          Popock Editor (EN)

        </div>
      </div>
    </b-jumbotron>


    <b-jumbotron border-variant="info">
      <center>
        <h2>Services</h2>
        <div class="row">
          <div class="col">
            <h4>Créer un POD</h4>
            <p style="text-align:left">
              Avec Solid, le stockage de vos données s'effectue sur un POD.<br>
              Si vous n'avez pas de POD,
              plusieurs fournisseurs peuvent vous en procurer un .
            </p>
            <b-button class="m-2" variant="info"  to="/providers">Je n'ai pas de POD</b-button>
          </div>

          <div class="col">
            <h4>Developpement d'applications decentralisées</h4>
            <p style="text-align:left">
              Vous avez une idée d'application décentralisée basée sur Solid?
            </p>
            <a class="btn m-2 btn-info"  href="https://framaforms.org/contact-1604842682" target="_blank">Formulaire de contact</a>
            <a class="btn m-2 btn-info"  href="mailto:scenaristeur@gmail.com?subject=Developpement_poPock">Mail</a>
          </div>

          <div class="col">
            <h4>Soutenir le projet poPock, Investir</h4>
            <p style="text-align:left">
              Vous souhaitez participer au projet poPock, en tant que contributeur ou investisseur ?
            </p>
            <a class="btn m-2 btn-info"  href="https://framaforms.org/contact-1604842682" target="_blank">Formulaire de contact</a>
            <a class="btn m-2 btn-info"  href="mailto:scenaristeur@gmail.com?subject=Contribution_investissement">Mail</a>
          </div>
        </div>


      </center>
    </b-jumbotron>



    <b-jumbotron border-variant="info">
      <center>
        <h2>Foire aux questions</h2>


        <div class="col">
          <h4>C'est quoi Solid ?</h4>
          <p style="text-align:left">
            <ul>
              <li>Le projet <a href="https://fr.wikipedia.org/wiki/Solid_(projet_de_web_d%C3%A9centralis%C3%A9)" target="_blank">Solid sur Wikipedia</a></li>
              <li>Le site du projet <a href="https://solidproject.org/" target="_blank">Solid</a> (anglais)</li>
              <li><a href="https://fr.wikipedia.org/wiki/Tim_Berners-Lee" target="_blank">Tim Berners-Lee</a></li>
              <li><a href="https://inrupt.com/" target="_blank">Inrupt</a> (anglais)</li>
              <li>Des questions<a href="https://forum.solidproject.org/t/francais-french-speaking/820" target="_blank"> -> Le forum Solid Community</a></li>
            </ul>
          </p>
        </div>


      </center>
    </b-jumbotron>




    <b-card
    title="Semapps vue par l'oeil de Popock"
    img-top
    tag="article"
    style="max-width: 34rem;"
    class="mb-2"
    >
    <small>
      <a href="https://cdr.solidcommunity.net/public/semapps/Screenshot_2020-10-18%20PoPock.png"
      target="_blank"><b-card-img src="https://cdr.solidcommunity.net/public/semapps/Screenshot_2020-10-18%20PoPock.png"></b-card-img></a></small>
      <b-card-text>
        Semapps est une base de connaissance compatible Solid développée par l'Assemblée Virtuelle.<br>
        Startinblox propose d'autres bases de connaissances.<br>
        Popock permet de les visualiser et de les connecter
      </b-card-text>

      <b-button to="/semapps" variant="outline-info">Voir Semapps par l'oeil de Popock</b-button>
    </b-card>

    <!--  - proposer un module, contribuer -->

  </div>

</template>

<script>
//import {  fetchDocument } from 'tripledoc';
//import {  rdf} from 'rdf-namespaces'
//import ToastMixin from '@/mixins/ToastMixin'

export default {
  name: 'Welcome',
  components: {
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
  },
  //  mixins: [ToastMixin],
  props:['value'],
  data() {
    return {
      //
    }
  },
  created(){
    //  console.log("route",this.$route)
    //  this.url = this.$route.params.url
    //  this.getData()
  },
  methods: {
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
.welcome {
  text-align: left;
}
a {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
