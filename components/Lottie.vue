<template>
  <div ref="lavContainer" :style="style"></div>
</template>

<script>
// import lottie from 'lottie-web';

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    renderer: {
      type: String,
      default: 'svg'
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
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%'
        // overflow: 'hidden',
        // margin: '0 auto'
      }
    }
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: this.renderer,
      loop: this.loop,
      autoplay: this.autoplay,
      animationData: this.data,
      rendererSettings: this.settings
    })
    // this.$emit('animCreated', this.anim)
  }
}
</script>
