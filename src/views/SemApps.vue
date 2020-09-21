<template>
  <div class="modele-view container row">
    <h2>SemApps</h2>
    <SemappsEnpoints :endpoints="endpoints" />
      <SemappsNetwork :containers="containers" variant="outline-info" />
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
        {name: "Assemblée Virtuelle", url: "https://data.virtual-assembly.org/", disabled: false},
        {name: "Nouvelle Source", url: "https://blabla.virtual-assembly.org/", disabled: false},
        {name: "Another One", url: "https://Nothing.virtual-assembly.org/", disabled: true}
      ],
      containers: [ "skills", "themas","organizations", "projects", "persons"] // "projects", "persons",
    }
  },

}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
