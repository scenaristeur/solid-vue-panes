<template>
  <div class="misc">
    <Offers/>
    <Forms />
    Misc
  </div>
</template>

<script>

export default {
  name: 'Misc',
  components: {
    'Offers': () => import('@/views/Offers'),
    'Forms': () => import('@/views/Forms'),
  },
}
</script>
