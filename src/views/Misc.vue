<template>
  <div class="misc">
    <Offers/>
    Misc
  </div>
</template>

<script>

export default {
  name: 'Misc',
    components: {
    'Offers': () => import('@/views/Offers'),
  },
}
</script>
