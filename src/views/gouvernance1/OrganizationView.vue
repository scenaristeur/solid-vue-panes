<template>
  <div class="organization-view">

    <!--  <Component /> -->
    OrganizationView, shape_url : {{ shape_url}}

    <OrganizationNew :shape_url="shape_url" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'OrganizationView',
  components: {
    'OrganizationNew': () => import('@/components/gouvernance/OrganizationNew'),
  },
  props: ['shape_url'],
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
