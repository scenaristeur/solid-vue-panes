<template>
  <div class="modele-view">
    <!--  <Component /> -->
    SemApps {{ endpoints }}
    https://data.virtual-assembly.org/projects

    <br >
    https://data.virtual-assembly.org/persons
    <br>
    skills, themas, organizations
    <SemappsProjects />
    <SemappsPersons />
    <SemappsSkills />
    <SemappsThemas />
    <SemappsOrganizations />
    <SemappsEnpoints :endpoints="endpoints" />



  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'SemApps',
  components: {
    'SemappsProjects': () => import('@/components/semapps/SemappsProjects'),
    'SemappsPersons': () => import('@/components/semapps/SemappsPersons'),
    'SemappsSkills': () => import('@/components/semapps/SemappsSkills'),
    'SemappsThemas': () => import('@/components/semapps/SemappsThemas'),
    'SemappsOrganizations': () => import('@/components/semapps/SemappsOrganizations'),
    'SemappsEnpoints': () => import('@/components/semapps/SemappsEnpoints'),
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
