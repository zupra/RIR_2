<template lang="pug">
.INDEX.flex
  //- pre {{$data}}
  .m_auto
    N-link.H.flex.text_x3.mb-2(
      v-for="city in ARR"
      :to="city"
      :key="city.index"
    ) {{city}}
</template>

<script>
export default {
  asyncData({ store }) {
    return {
      ARR: [...Object.keys(store.state)]
    }
  }
}
</script>

<style lang="stylus">
.INDEX
  height 100vh
</style>
