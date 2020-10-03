<template>
  <div class="container">
    <!--  <Offers/> -->
    Offer or Ask for

    <MyOffers />
    <OtherOffers />
  </div>
</template>

<script>

export default {
  name: 'Offers',
  components: {

    'MyOffers': () => import('@/components/offers/MyOffers'),
    'OtherOffers': () => import('@/components/offers/OtherOffers'),
  },
}
</script>
