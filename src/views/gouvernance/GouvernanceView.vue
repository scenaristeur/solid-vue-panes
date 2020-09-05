<template>
  <div class="gouvernance-view container">

    <!--<OrganizationView :shape_url="organization_shex"/>-->

    <b-card-group deck>
      <CrudCard v-for="shape in shapes" :key="shape.name" :shape="shape"/>
    </b-card-group>

    <CrudConfig :path="path" />

    <br>
    <br>
    <a href="https://fr.wikipedia.org/wiki/Holacratie" target="_blank">Holacratie sur Wikipedia</a>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'GouvernanceView',
  components: {
    //  'OrganizationView': () => import('@/views/gouvernance/OrganizationView'),
    'CrudCard': () => import('@/components/crud-shape/CrudCard'),
    'CrudConfig': () => import('@/components/crud-shape/CrudConfig'),
  },
  data: function () {
    return {
      organization_shex : "https://holacratie.solid.community/public/Schema/organization.shex",
      shapes: [
        {name:"Organization", url: "https://holacratie.solid.community/public/Schema/organization.shex"},
        {name:"Role", url: "https://holacratie.solid.community/public/Schema/role.shex"},
        {name:"Tension", url: "https://holacratie.solid.community/public/Schema/tension.shex"},
        {name:"Reunion", url: "https://holacratie.solid.community/public/Schema/todo.shex"},
      ],
      path: "public/gouvernance/"
      //  webId: {},
      //  friends: [],
    }
  },
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
