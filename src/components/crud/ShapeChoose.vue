<template>
  <div class="shape-choose">

    <ShapeRemoteLoader />
    <div class="row">
      <div class="col  d-none">
        <ShapeEditor />
      </div>
      <div class="col">
        <ShapeUpload />
      </div>
    </div>
  </div>
</template>

<script>
// wainting for https://github.com/scenaristeur/shighl-vuejs/projects/1#card-42549729

export default {
  name: 'ShapeChoose',
  components: {
    ShapeUpload: () => import('@/components/crud/ShapeUpload.vue'),
    ShapeRemoteLoader: () => import('@/components/crud/ShapeRemoteLoader.vue'),
    ShapeEditor: () => import('@/components/crud/ShapeEditor.vue'),
  },
}
</script>
