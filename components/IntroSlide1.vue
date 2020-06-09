<template lang="pug">
.wrap.slide1.flex
  .content.flex_col.x_center
    div
      a(href="#").smart-cities-link Умные города Росатома
    h2.Intro__content-city-name {{ city.cityName }}
    p.Intro__content-hello-text {{ city.helloText }}
    p.Intro__content-hello-text {{ city.helloTextMain }}
    .Intro__content-head-of-city.flex.x_start.y_center
      img.head-of-city__photo(:src="require(`~/static/img/intro/${city.city}/head-of-city_${city.city}.png`)")
      .head-of-city__name
        h3 {{ city.headOfCityName }}
        p {{ city.headOfCityOccupation }}
  .images.flex
    div.flex.y_center
      div.left-image.flex.x_center.y_center(:class="city.colorThemeClasses.leftCircleImage")
        img(:src="require(`~/static/img/intro/${city.city}/slide1-left_${city.city}.png`)")
    div.flex_col.x_sa
      div.right-image.flex.x_center.y_center(:class="city.colorThemeClasses.rightCircleImage")
        img(:src="require(`~/static/img/intro/${city.city}/slide1-upper_${city.city}.png`)")
      div.bottom-image.flex.x_center.y_center(:class="city.colorThemeClasses.bottomCircleImage")
        img(:src="require(`~/static/img/intro/${city.city}/slide1-bottom_${city.city}.png`)")
</template>

<script>
export default {
  name: 'IntroSlide1',
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

<style lang="stylus" scoped>
.slide1
  position relative
  height 100%
  & .Intro__content-city-name
    margin-top: 16px
    margin-bottom: 0;
    font-weight: bold;
    font-size: 70px;
    line-height: 85px;
  & .content
    max-width 556px
  & .Intro__content-hello-text
    font-size: 18px;
    line-height: 30px;
    &:first-child
      margin-top: 13px
  & .Intro__content-head-of-city
    margin-top: 20px
    & .head-of-city__photo
      circle(96px)
    & .head-of-city__name
      margin-left: 20px
      h3
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;
      p
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
  & .images
    height 100%
    position absolute
    right -75px
  & .right-side-images
    position: relative;
    margin-right: -17px
  & .left-image
    circle(366px)
    -webkit-animation: shakeLeft 2.7s linear alternate infinite;
    animation: shakeLeft 2.7s linear alternate infinite;
  & .right-image
    circle(214px)
    -webkit-animation: shakeRight 4s linear alternate infinite;
    animation: shakeRight 4s linear alternate infinite;
  & .bottom-image
    circle(250px)
    -webkit-animation: shakeBottom 2s linear alternate infinite;
    animation: shakeBottom 2s linear alternate infinite;
@-webkit-keyframes shakeLeft
  100%
    transform translate(8px, 8px)
@-webkit-keyframes shakeRight
  100%
    transform translate(6px, 6px)
@-webkit-keyframes shakeBottom
  100%
    transform translateY(4px)
</style>
