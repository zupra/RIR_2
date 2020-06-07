<template>
  <div ref="lavContainer"></div>
</template>

<script>
import Vue from 'vue'
import animation_2 from '~/static/animations/JSON/2.json'

let bodyMovin

if (!Vue.prototype.$isServer) {
  bodyMovin = require('bodymovin/build/player/bodymovin.js')
}

export default {
  name: 'Bodymovin',
  props: {
    data: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      animation: null,
      animation_2
    }
  },
  mounted() {
    if (bodyMovin) {
      this.animation = bodyMovin.loadAnimation({
        container: this.$refs.lavContainer,
        animType: 'canvas',
        loop: true,
        path: this.data
      })
    }
  }
}
</script>

<style scoped></style>
