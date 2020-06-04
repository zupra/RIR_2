<template>
  <div ref="lavContainer" :style="style"></div>
</template>

<script>
import Vue from 'vue'
let lottieWeb

if (!Vue.prototype.$isServer) {
  lottieWeb = require('lottie-web/build/player/lottie_light.js')
}

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    loop: Boolean,
    autoplay: {
      type: Boolean,
      default: true
    },
    settings: Object,
    height: Number,
    width: Number
  },

  data() {
    return {
      animation: null
    }
  },
  computed: {
    style() {
      const style = {}
      if (this.width) {
        style.width = this.width + 'px'
      }
      if (this.height) {
        style.height = this.height + 'px'
      }
      return style
    }
  },
  mounted() {
    if (lottieWeb) {
      this.animation = lottieWeb.loadAnimation({
        container: this.$refs.lavContainer,
        renderer: 'svg',
        loop: this.loop,
        autoplay: this.autoplay,
        animationData: this.data,
        rendererSettings: this.settings
      })
    }
  }
}
</script>
