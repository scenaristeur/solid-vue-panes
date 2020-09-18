<template>
  <div class="modele-view container row">
    <h2>SemApps</h2>
    <div class="col-lg-7">
      <SemappsComponent path="organizations/" type="Organization" variant="outline-info"/>
      <SemappsComponent path="projects/" type="Project" variant="outline-info"/>
      <SemappsComponent path="persons/" type="Person" variant="outline-info"/>
      <SemappsComponent path="skills/" type="Skill" variant="outline-info"/>
      <SemappsComponent path="themas/" type="Thema" variant="outline-info"/>
    </div>
    <SemappsEnpoints class="col-lg-3" :endpoints="endpoints" />



  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'SemApps',
  components: {
    'SemappsEnpoints': () => import('@/components/semapps/SemappsEnpoints'),
    'SemappsComponent': () => import('@/components/semapps/SemappsComponent'),
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
      ]
    }
  },

}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
