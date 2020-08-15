<template>
  <div class="modele">
    <h1>This is an file page</h1>
    file: {{ file }} <br>
    <br>
    <br>
    <!--  <COMPONENET />  -->

    <div>
      <b-tabs content-class="mt-3">

        <b-tab title="Content" active>
        <p>  <!--content : {{ content}}-->
            <Editor />


          </p>
        </b-tab>
        <b-tab title="Second">
          <p>I'm the second tab</p>
        </b-tab>
        <b-tab title="Disabled" disabled>
          <p>I'm a disabled tab!</p>
        </b-tab>
      </b-tabs>
    </div>




  </div>
</template>

<script>
// @ is an alias to /src

// @ is an alias to /src


export default {
  name: 'File',
  components: {
    'Editor': () => import('@/components/pod/Editor'),
  },
  data: function () {
    return {
      //  webId: {},
    //  path:"",
      file:{},
    //  content:{}
    }
  },
  /*created() {
    const SolidFileClient = window.SolidFileClient
    console.log("SFC", SolidFileClient)
    this.fc = new SolidFileClient(auth)
    this.file = this.$route.params.file
    console.log(this.file)
    this.path = this.file.url
    this.updateFile()
  },
  watch: {
    '$route' (to) {

      //  '$route' (to, from) {
      this.file = to.params.file
      this.path = this.file.url
      this.updateFile()
    }
  },
  methods:{
    async updateFile(){
      this.content = await this.fc.readFile(this.path)
    },
  }*/
}
</script>
<style>
.item {
  text-align: left;
}
</style>
