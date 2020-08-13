<template>
  <div class="instances">
    <AddInstance />
    <b-button to="/chat" variant="info">go to Chat</b-button>
    <b-list-group flush>
      <b-list-group-item v-for="i in instances" :key="i.instance">
        Label : {{i.label}}<br>
        created: {{i.created}}<br>
        instance: {{i.instance}}<br>
        classe:  {{i.classe}}<br>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>

export default {
  name: 'instances',
  props: ["index"],
  components: {
    'AddInstance': () => import('@/components/profile/AddInstance'),
  },
  computed:{
    instances(){
      return this.$store.state.solid.indexes.puti.instances
    },
  }
}
</script>
