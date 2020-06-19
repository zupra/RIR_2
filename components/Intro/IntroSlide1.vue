<template lang="pug">
.wrap.slide1.flex
  .content.flex_col.x_center
    div
      .btn_blue Умные города Росатома
    h2.Intro__content-city-name {{ city.cityName }}
    p.Intro__content-hello-text {{ city.helloText }}
    p.Intro__content-hello-text {{ city.helloTextMain }}
    .Intro__content-head-of-city.flex.x_start.y_center
      picture
        source(
          :srcset="require(`~/static/Intro/${city.city}/head-of-city_${city.city}.webp`)"
          type='image/webp'
        )
        img.head-of-city__photo(
          :src="require(`~/static/Intro/${city.city}/head-of-city_${city.city}.png`)"
          alt='фото глава МО'
        )
      .head-of-city__name
        h3 {{ city.headOfCityName }}
        p {{ city.headOfCityOccupation }}
  .images.flex
    div.flex.y_center
      div.left-image.flex.x_center.y_center(
        :class="city.colorThemeClasses.leftCircleImage"
      )
        picture
          source(
            :srcset="require(`~/static/Intro/${city.city}/slide1-left_${city.city}.webp`)"
            type='image/webp'
          )
          img(
            :src="require(`~/static/Intro/${city.city}/slide1-left_${city.city}.png`)"
            alt='шар лого'
          )
    div.flex_col.x_sa
      div.right-image.flex.x_center.y_center(
        :class="city.colorThemeClasses.rightCircleImage"
      )
        picture
          source(
            :srcset="require(`~/static/Intro/${city.city}/slide1-upper_${city.city}.webp`)"
            type='image/webp'
          )
          img(
            :src="require(`~/static/Intro/${city.city}/slide1-upper_${city.city}.png`)"
            alt='шар лого'
          )
      div.bottom-image.flex.x_center.y_center(
        :class="city.colorThemeClasses.bottomCircleImage"
      )
        picture
          source(
            :srcset="require(`~/static/Intro/${city.city}/slide1-bottom_${city.city}.webp`)"
            type='image/webp'
          )
          img.bottom(
            :src="require(`~/static/Intro/${city.city}/slide1-bottom_${city.city}.png`)"
            alt='шар лого'
          )
  .images-adaptive.flex_col
    .left-image.flex.x_center.y_center(
      :class="city.colorThemeClasses.leftCircleImage"
    )
      picture
        source(
          media="(max-width: 768px)"
          :srcset="require(`~/static/Intro/${city.city}/slide1-left-768_${city.city}.webp`)"
          type='image/webp'
        )
        source(
          media="(max-width: 768px)"
          :srcset="require(`~/static/Intro/${city.city}/slide1-left-768_${city.city}.png`)"
        )
        source(
          media="(max-width: 1024px)"
          :srcset="require(`~/static/Intro/${city.city}/slide1-left-1024_${city.city}.webp`)"
          type='image/webp'
        )
        source(
          media="(max-width: 1024px)"
          :srcset="require(`~/static/Intro/${city.city}/slide1-left-1024_${city.city}.png`)"
        )
        img(
          :src="require(`~/static/Intro/${city.city}/slide1-left_${city.city}.png`)"
          alt='шар лого'
        )
    .flex_col.x_sa.other-images
      .right-image.flex.x_center.y_center(
        :class="city.colorThemeClasses.rightCircleImage"
      )
        picture
          source(
            media="(max-width: 768px)"
            :srcset="require(`~/static/Intro/${city.city}/slide1-upper-768_${city.city}.webp`)"
            type='image/webp'
          )
          source(
            media="(max-width: 768px)"
            :srcset="require(`~/static/Intro/${city.city}/slide1-upper-768_${city.city}.png`)"
          )
          source(
            media="(max-width: 1024px)"
            :srcset="require(`~/static/Intro/${city.city}/slide1-upper-1024_${city.city}.webp`)"
            type='image/webp'
          )
          source(
            media="(max-width: 1024px)"
            :srcset="require(`~/static/Intro/${city.city}/slide1-upper-1024_${city.city}.png`)"
          )
          img(
            :src="require(`~/static/Intro/${city.city}/slide1-upper_${city.city}.png`)"
            alt='шар лого'
          )
      .bottom-image.flex.x_center.y_center(
        :class="city.colorThemeClasses.bottomCircleImage"
      )
        picture
          source(
            media="(max-width: 768px)"
            :srcset="require(`~/static/Intro/${city.city}/slide1-bottom-768_${city.city}.webp`)"
            type='image/webp'
          )
          source(
            media="(max-width: 768px)"
            :srcset="require(`~/static/Intro/${city.city}/slide1-bottom-768_${city.city}.png`)"
          )
          source(
            media="(max-width: 1024px)"
            :srcset="require(`~/static/Intro/${city.city}/slide1-bottom-1024_${city.city}.webp`)"
            type='image/webp'
          )
          source(
            media="(max-width: 1024px)"
            :srcset="require(`~/static/Intro/${city.city}/slide1-bottom-1024_${city.city}.png`)"
          )
          img.bottom(
            :src="require(`~/static/Intro/${city.city}/slide1-bottom_${city.city}.png`)"
            alt='шар лого'
          )

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
  .Intro__content-city-name
    margin-top: 16px
    margin-bottom: 0;
    font-weight: bold;
    font-size: 70px;
    line-height: 85px;
  .content
    max-width 556px
  .Intro__content-hello-text
    font-size: 18px;
    line-height: 30px;
    &:first-child
      margin-top: 13px
  .Intro__content-head-of-city
    margin-top: 20px
    .head-of-city__photo
      circle(96px)
    .head-of-city__name
      margin-left: 20px
      h3
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;
      p
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
  .images
    height 100%
    position absolute
    right -75px
  .images-adaptive
    display none
  .right-side-images
    position: relative;
    margin-right: -17px
  .left-image
    circle(366px)
    animation: shakeLeft 2.7s linear alternate infinite;
  .right-image
    circle(214px)
    animation: shakeRight 4s linear alternate infinite;
  .bottom-image
    circle(250px)
    animation: shakeBottom 2s linear alternate infinite;

@keyframes shakeLeft
  100%
    transform translate(8px, 8px)

@keyframes shakeRight
  100%
    transform translate(6px, 6px)

@keyframes shakeBottom
  100%
    transform translateY(4px)

@media screen and (max-width 1450px)
  .slide1
    justify-content space-between
    .images
      position relative
      right 10px
    .left-image
      circle(268px)
      padding: 20px;
    .right-image
      circle(210px)
      padding: 20px;
    .bottom-image
      circle(193px)
      padding: 20px;
      .bottom
        display block
        width 100%
        height 100%
@media screen and (max-width 1024px)
  .slide1
    .content
      max-width 397px
    .Intro__content-city-name
      font-size 40px
      line-height 50px
    .Intro__content-hello-text
      font-size 16px
      line-height 22px
    .images
      display none
    .images-adaptive
      display flex
      align-items center
      justify-content center
      align-items flex-start
      .left-image
        circle(268px)
        padding: 30px
        & img
          width 100%
      .other-images
        flex-direction row-reverse
        .right-image
          circle(210px)
          margin-right 12px
        .bottom-image
          circle(190px)
          margin-top: 130px
@media screen and (max-width 768px)
  .slide1
    .images-adaptive
      .left-image
        circle(200px)
        padding: 30px
      & img
        max-width 100%
      .other-images
        flex-direction row-reverse
        .right-image
          circle(160px)
          margin-right 12px
        .bottom-image
          circle(145px)
          margin-top: 130px
@media screen and (max-width 680px)
  .slide1
    .Intro__content-city-name
      margin-top: 0
    .Intro__content-hello-text
      font-size: 14px
      line-height: 19px
  .btn_blue
    background: #005CA9;
    padding: 8px 19px
    font-size: 14px;
    line-height: 16px;
  .Intro__content-city-name
    font-size: 34px!important;
    line-height: 40px!important;
  .head-of-city__name
    & h3
      font-size: 18px;
      line-height: 30px;
    & p
      font-size: 16px;
  .slide1
    .images-adaptive
      display none
</style>
