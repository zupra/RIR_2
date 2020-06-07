<template>
  <div ref="lavContainer" :style="style"></div>
</template>

<script>
import Vue from 'vue'
let lottieWeb

if (!Vue.prototype.$isServer) {
  console.log('GO lottie')
  // lottieWeb = require('lottie-web/build/player/lottie_light.js')
  lottieWeb = () => import('bodymovin')
}

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    renderer: {
      type: String,
      default: 'canvas'
    },
    loop: {
      type: Boolean,
      default: true
    },
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
    console.log(bodymovin)

    if (lottieWeb) {
      this.animation = lottieWeb.loadAnimation({
        /*
        container: this.$refs.lavContainer,
        renderer: this.renderer,
        loop: this.loop,
        autoplay: this.autoplay,
        animationData: this.data,
        rendererSettings: this.settings
        */

        wrapper: this.$refs.lavContainer,
        animType: 'svg',
        loop: true,
        path: this.data
      })
    }
  }
}
</script>
