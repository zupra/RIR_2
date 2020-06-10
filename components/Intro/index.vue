<template lang="pug">
section.Intro(:class="city.colorThemeClasses.section")
  .Intro__content
    client-only
      swiper.swiper(
        :options="swiperOption"
      )
        swiper-slide
          IntroSlide1(:cityName="cityName")
        swiper-slide
          IntroSlide2(:cityName="cityName")
        swiper-slide
          IntroSlide3(:cityName="cityName")
        .swiper-pagination(
          slot="pagination"
        )
  IntroFooter(:cityName="cityName")

</template>

<script>
import IntroSlide1 from './IntroSlide1'
import IntroSlide2 from './IntroSlide2'
import IntroSlide3 from './IntroSlide3'
import IntroFooter from './IntroFooter'
export default {
  components: {
    IntroFooter,
    IntroSlide3,
    IntroSlide2,
    IntroSlide1
  },
  props: {
    cityName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        loop: false,
        mousewheel: true,
        direction: 'vertical',
        freeModeSticky: true,
        freeMode: true,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        }
      }
    }
  },
  computed: {
    city() {
      return this.$store.state[this.cityName]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-slide:not(.swiper-slide-active){
    opacity: 0 !important;
  }
.Intro
  display flex
  flex-direction column
  height 100vh
  color: #FFF
  background: url("~static/img/intro/react.png") 0 center no-repeat, linear-gradient(156.35deg, #107B9E 0%, #1A9FB5 46.21%, #3EC180 100%)
  &__content
    flex 1
    overflow-y hidden
    .swiper-container
      height 100%
      padding-top 70px
    .swiper-slide-active
      height 100%!important
</style>
