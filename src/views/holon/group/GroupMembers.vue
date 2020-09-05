<template>
  <div class="groups-view">

    <b-card
    title="Members"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    >
    <b-card-text>
      <b-list-group>
        <b-list-group-item v-for="member in members" :key="member">
          {{member.split('/').slice(2,3)[0]}}
        </b-list-group-item>
      </b-list-group>
    </b-card-text>

    <b-button variant="info">Enroll</b-button>
    <b-button variant="info" >Invite</b-button>
    <b-button variant="info">Request Join</b-button>
  </b-card>

</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'GroupMembers',
  components: {
    //  'GroupEdit': () => import('@/views/holon/group/GroupEdit'),
    //  'GroupList': () => import('@/views/holon/group/GroupList'),

  },
  props: ['members'],
}
</script>
