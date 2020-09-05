<template>
  <div class="holon-view container">
    <!--  <Component /> -->
    <GroupView />
    <TensionsView />
    <DomainsView />
    <UsersView />
    <DiscussionsView />


    <div class="mb-3">
      <b-button v-b-toggle.config>Config</b-button>
    </div>

    <b-collapse id="config">
      <ConfigView :path="path" />
    </b-collapse>



  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HolonView',
  components: {
    'GroupView': () => import('@/views/holon/group/GroupView'),
    'TensionsView': () => import('@/views/holon/TensionsView'),
    'DomainsView': () => import('@/views/holon/DomainsView'),
    'UsersView': () => import('@/views/holon/UsersView'),
    'DiscussionsView': () => import('@/views/holon/DiscussionsView'),
    'ConfigView': () => import('@/views/holon/config/ConfigView'),
  },
  data() {
    return {
      path: "public/gouvernance/",
    }
  },
}
</script>
<style>
.holon-view {
  text-align: left;
}
</style>
