<template>
  <div class="d-inline m-2">
    <b-button title="add friend" size="sm" variant="info" :to="'/friends?add='+webId">
      <b-icon-person-plus></b-icon-person-plus>
    </b-button>
    <router-link :to="'/profile?url='+webId" class="text-info m-2">{{ name }}</router-link>
  </div>
</template>

<script>

export default {
  name: 'UserName',
  props:['webId'],
  data() {
    return {
    name:""
    }
  },
  created(){
  this.name = this.webId.split('/').slice(2,3)[0]
  },
  watch: {
    async webId (webId) {
      this.name = webId.split('/').slice(2,3)[0]
    }
}
}
</script>
