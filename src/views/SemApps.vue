<i18n src="@/common/locales.json"></i18n>

<template>
  <div class="container">
    <h2>Visualization</h2>

    <h5>{{$t('proposition_frends_graph')}} <b-button variant="outline-info" onClick="window.location.reload();">{{$t('refresh')}}</b-button></h5>


    <SemappsEnpoints :endpoints="endpoints" />
    <SemappsNetwork variant="outline-info" />
    <!--  <div class="col-lg-7">
    <SemappsComponent path="projects/" type="Project" variant="outline-info"/>
    <SemappsComponent path="persons/" type="Person" variant="outline-info"/>
    <SemappsComponent path="skills/" type="Skill" variant="outline-info"/>
    <SemappsComponent path="themas/" type="Thema" variant="outline-info"/>
    <SemappsComponent path="organizations/" type="Organization" variant="outline-info"/>

  </div>-->




</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'SemApps',
  components: {
    'SemappsEnpoints': () => import('@/components/semapps/SemappsEnpoints'),
    'SemappsNetwork': () => import('@/components/semapps/SemappsNetwork'),
    //  'SemappsComponent': () => import('@/components/semapps/SemappsComponent'),
    /*    'SemappsProjects': () => import('@/components/semapps/SemappsProjects'),
    'SemappsPersons': () => import('@/components/semapps/SemappsPersons'),
    'SemappsSkills': () => import('@/components/semapps/SemappsSkills'),
    'SemappsThemas': () => import('@/components/semapps/SemappsThemas'),
    'SemappsOrganizations': () => import('@/components/semapps/SemappsOrganizations'),*/

  },

  data() {
    return {
      endpoints : [
        {name: "Assemblée Virtuelle",
        url: "https://data.virtual-assembly.org/",
        disabled: false, containers: [ "skills", "themas","organizations", "projects", "persons"],
        model: "semapps"},
        {name: "Colibris Social",
        url: "https://colibris.social/",
        disabled: false, containers: [ "actors"],
        model: "colibris"},
        // {name: "Fake url for test",
        // url: "https://popock-test.virtual-assembly.org/",
        // disabled: false,
        // containers: [ "test"],
        // model: "semapps"},
        /*  {name: "Startinblox",
        url: "https://api.startinblox.com/",
        disabled: false,
        containers: [  "users"],
        model: "startinblox"},*/
        {name: "Startinblox Community",
        url: "https://api.community.startinblox.com/",
        disabled: false,
        containers: ["accounts", "users"],
        model: "startinblox"},
        {name: "Happy Dev",
        url: "https://api.paris.happy-dev.fr/",
        disabled: false,
        containers: [ /*"accounts",*/ "users"],
        model: "startinblox"},
      ],
      //  containers: [/* "skills", "themas","organizations", "projects", "persons",*/ "users"] // "projects", "persons",
    }
  },

}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
