<template>
  <div>
    <router-link :to="'/profile?url='+webId" class="text-info m-2">{{ name }}</router-link>
    <b-button class="add-friend" title="add friend" size="sm" variant="info" :to="'/friends?add='+webId">
      <b-icon-person-plus></b-icon-person-plus>
    </b-button>
  </div>
</template>

<script>

export default {
  name: 'UserName',
  props:['webId'],
  created(){
    this.name = this.webId.split('/').slice(2,3)[0]
  },
}
</script>
