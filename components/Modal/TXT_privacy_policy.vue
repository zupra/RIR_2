<template lang="pug">

article#TXT_privacy_policy


  h2 Политика конфиденциальности персональных данных


  div ...Политика конфиденциальности персональных данных


  pre {{city}}






</template>

<script>
export default {
  name: 'Agreement',
  props: {
    cityName: {
      type: String,
      required: true
    }
  },
  computed: {
    city() {
      return this.$store.state[this.cityName]
    }
  }
}
</script>

<style lang="stylus">
#TXT_privacy_policy
  height 60vh
  overflow-y scroll
</style>
