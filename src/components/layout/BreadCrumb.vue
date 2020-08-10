<template>
  <div class="breadcrumb">
    <!--  {{ root }}<br>
    {{ fileUrl }}<br>{{ path}}-->
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  data() {
    return {
      /*  items: [
      {
      text: 'Root',
      href: "me",
      //   active: true
    },
    {
    text: 'Manage',
    href: '#'
  },
  {
  text: 'Library',
  active: true
}
]*/
}
},
computed:{
  root(){
    return this.$store.state.chat.root
  },
  path(){
    return this.$store.state.chat.path
  },
  fileUrl(){
    return this.$store.state.chat.fileUrl
  },
  items(){
    let items = []
    let fil = ""
    items.push ({text: "root", href:"/"})
    //  console.log(this.$store.state.chat.fileUrl.split(this.root))
    let withoutRoot=this.$store.state.chat.fileUrl.split(this.root)[1]
    if (withoutRoot != undefined && withoutRoot.length > 1){
      let splittedUrl = withoutRoot.split("/")
      console.log(splittedUrl)
      splittedUrl.forEach((part) => {
        fil+=part+"/"
        items.push ({text: part, href:"?channel="+fil, active:false})
      });
    }
    return items

  }

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
</style>
