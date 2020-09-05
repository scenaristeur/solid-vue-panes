<template>
  <div class="groups-view">
    current : {{ currentGroup}}
    <b-card
    title="Filiation"

    tag="article"
    style="max-width: 20rem;"
    class="mb-2">
    <div v-if="parent">    Parent : {{ parent }}
      <b-button @click="openParent">Open Parent</b-button><br>
    </div>
    Subgroups:
    <b-card-text>
      <b-list-group>
        <b-list-group-item v-for="group in subgroups" :key="group" @click="updateCurrentGroup(group)">
          {{ group}}
        </b-list-group-item>
      </b-list-group>
    </b-card-text>

    <b-button variant="info" >Create SubGroup</b-button><b-button variant="info">Change Parent</b-button>
  </b-card>

</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'GroupFiliation',
  components: {
    //  'GroupEdit': () => import('@/views/holon/group/GroupEdit'),
    //  'GroupList': () => import('@/views/holon/group/GroupList'),

  },
  created() {
    //do something after creating vue instance
    this.currentGroup = this.$store.state.gouvernance.currentGroup
    console.log(this.currentGroup)
  },
  props: ['parent', 'subgroups'],
  data: function () {
    return {
      //  subgroups: "",
      //  webId: {},
      //  friends: [],
    }
  },
  methods: {
    updateCurrentGroup(group) {
      console.log(group)
      let url=group.substring(0,group.lastIndexOf("/"))+"/";
      console.log(url)
      this.$store.commit('gouvernance/setCurrentGroup', {url:url})
    },
    openParent(){
      this.$store.commit('gouvernance/setCurrentGroup', {url:this.parent})
    }
  }
}
</script>
