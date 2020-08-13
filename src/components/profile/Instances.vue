<template>
  <div class="instances">
    <AddInstance />

    <b-list-group flush>
      <b-list-group-item v-for="i in instances" :key="i.instance">
        Label : {{i.label}}<br>
        created: {{i.created}}<br>
        instance: {{i.instance}}<br>
        classe:  {{i.classe}}<br>
        <router-link :to="{ name: 'ChatI', params: { instance: i.instance}}">Open {{i.label}}</router-link>
      </b-list-group-item>
    </b-list-group>


    <!--<b-list-group flush>
    <b-list-group-item v-for="c in index.classes" :key="c">
    {{i.instance}}<br>
    {{i.classe}}
  </b-list-group-item>
</b-list-group>-->
<!--  <div v-for="i in index.instances" :key="i.instance">
<b-card
title="Card Title"
img-src="https://picsum.photos/600/300/?image=25"
img-alt="Image"
img-top
tag="article"
style="max-width: 20rem;"
class="mb-2"
>
<b-card-text>
{{i.instance}}<br>
{{i.classe}}

</b-card-text>

<b-button href="#" variant="primary">Go somewhere</b-button>
</b-card>
</div>-->
{{instances}}

</div>
</template>

<script>
// @ is an alias to /src

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
