<template>
  <div class="share">
    <h1>This is an share page</h1>
    title : {{ title }}
    <br>
    text : {{ text }}
    <br>
    url : {{ url }}
    <br>
    <router-link to="share?title=hello&text=world&url=http%3A%2F%2Fsolid.community%2Fboo">Text One</router-link>

    <router-link to="share?title=O*LA&text=ME&url=http://hello.test">text two</router-link>
    <router-link to="share?title=flik&text=what&url=https://flik.flok@test.gh">TEXT THREE</router-link>
    <!--  <COMPONENET />  -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Share',
  /*  components: {
  'Component': () => import('@/components/Component'),
},*/
data: function () {
  return {
    //  webId: {},
    title:"",
    text:"",
    url: ""
  }
},
created() {
  this.title = this.$route.query.title
  this.text = this.$route.query.text
  this.url = this.$route.query.url
  console.log(this.$route)
},
watch: {
  '$route' (to) {
    //  '$route' (to, from) {
    this.title = to.query.title
    this.text = to.query.text
    this.url = to.query.url
    console.log(this.$route.query)
    console.log(to.query)
    //    this.updatePod()
  }
},
methods:{
  /*async updatePod(){
  this.folder = await this.fc.readFolder(this.path)
},*/
}
}
</script>
