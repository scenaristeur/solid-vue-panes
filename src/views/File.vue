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

export default {
  name: 'File',
  components: {
    'Editor': () => import('@/components/pod/Editor'),
  },
  data: function () {
    return {
      file:{},
    }
  },

}
</script>
<style>
.item {
  text-align: left;
}
</style>
