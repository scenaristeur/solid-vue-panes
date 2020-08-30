<template>
  <div class="salut">
    <SalutProfile />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Salut',
  components: {
    'SalutProfile': () => import('@/components/salut/SalutProfile'),
  },
}
</script>
