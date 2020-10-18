<template>
  <div>
    <ProviderList />
  </div>
</template>
<script>
export default {
  name: 'Providers',
  components: {
    'ProviderList': () => import('@/components/solid/ProviderList'),
  },
}
</script>
