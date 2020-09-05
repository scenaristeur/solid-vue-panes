<template>
  <div class="groups-view">

    <b-card
    title="Filiation"

    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    >
    Parent : {{ parent }}
    <b-card-text>
      <b-list-group>
        <b-list-group-item v-for="group in subgroups" :key="group">
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
  props: ['parent'],
  data: function () {
    return {
      subgroups: "",
      //  webId: {},
      //  friends: [],
    }
  },
}
</script>
