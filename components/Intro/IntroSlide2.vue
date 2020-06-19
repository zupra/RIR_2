<template lang="pug">
.wrap.slide2.flex
  .content.flex_col.x_center
    h2.Intro__content-explore-title(
      v-if="city.slogan"
    ) {{ city.slogan }}
    h2.Intro__content-explore-title(
      v-if="city.slogan2"
    ) {{ city.slogan2 }}
    h2.Intro__content-explore-title(
      v-else
    ) Изучай город
    p.Intro__content-explore-text Сейчас в пилотном режиме для горожан доступны следующие сервисы: решение городских проблем онлайн, учереждения, полиция и депутатские округа

    div
      .btn_white Перейти к сервисам

  .images.flex.y_end.x_sa(
    :class="city.slide2PositionOptions"
  )
    picture
      source(
        media="(max-width: 870px)"
        :srcset="require(`~/static/Intro/${city.city}/slide2-870_${city.city}.webp`)"
        type='image/webp'
      )
      source(
        media="(max-width: 870px)"
        :srcset="require(`~/static/Intro/${city.city}/slide2-870_${city.city}.png`)"
      )
      source(
        media="(max-width: 1200px)"
        :srcset="require(`~/static/Intro/${city.city}/slide2-1200_${city.city}.webp`)"
        type='image/webp'
      )
      source(
        media="(max-width: 1200px)"
        :srcset="require(`~/static/Intro/${city.city}/slide2-1200_${city.city}.png`)"
      )
      source(
        :srcset="require(`~/static/Intro/${city.city}/slide2_${city.city}.webp`)"
        type='image/webp'
      )
      img.slide2-main-img(
        :src="require(`~/static/Intro/${city.city}/slide2_${city.city}.png`)"
        :class="city.contur"
        alt='слайд 2'
      )
    div.images__group.flex(
      v-if="city.secondSlideGraphicBalls"
    )
      picture
        source(
          :srcset="require(`~/static/Intro/${city.city}/tool.webp`)"
          type='image/webp'
        )
        img.images-group__item(
          :src="require(`~/static/Intro/${city.city}/tool.png`)"
          alt='слайд 2'
      )
      picture
        source(
          :srcset="require(`~/static/Intro/${city.city}/swimmer.webp`)"
          type='image/webp'
        )
        img.images-group__item(
          :src="require(`~/static/Intro/${city.city}/swimmer.png`)"
          alt='слайд 2'
        )
    div.images__interesting-place.flex.y_center.x_center(
      v-if="city.slide2InterestingPlace"
      :class="city.slide2InterestingPlaceStyle"
    )
      picture
          source(
            media="(max-width: 870px)"
            :srcset="require(`~/static/Intro/${city.city}/slide2-1-870_${city.city}.webp`)"
            type='image/webp'
          )
          source(
            media="(max-width: 870px)"
            :srcset="require(`~/static/Intro/${city.city}/slide2-1-870_${city.city}.png`)"
          )
          source(
            media="(max-width: 1200px)"
            :srcset="require(`~/static/Intro/${city.city}/slide2-1-1200_${city.city}.webp`)"
            type='image/webp'
          )
          source(
            media="(max-width: 1200px)"
            :srcset="require(`~/static/Intro/${city.city}/slide2-1-1200_${city.city}.png`)"
          )
          source(
            :srcset="require(`~/static/Intro/${city.city}/slide2-1_${city.city}.webp`)"
            type='image/webp'
          )
          img(
            :src="require(`~/static/Intro/${city.city}/slide2-1_${city.city}.png`)"
            alt='слайд 2 интересное место'
          )
</template>

<script>
export default {
  name: 'IntroSlide2',
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
.slide2
  height 100%
  .content
    max-width 467px
  .Intro__content-explore-title
    font-weight bold
    font-size 70px
    line-height 85px
    margin-bottom 0
  .Intro__content-explore-text
    margin-top 27px
    font-size 18px
    line-height 30px
    margin-bottom 22px
  .images
    padding-left 52px
    flex 1
    position: relative
  .slide2-main-img
    display flex
  .images__group
    position absolute
    bottom: 80px
    right 0
  .images__group-item
    z-index 3
  .images-group__item:last-child
    margin-left -55px
    z-index 1
  .images__interesting-place
    position absolute
    width 210px
    height 210px
    border-radius 50%
    background-color #E6EDFF
    top 46px
    right 35px
@media screen and (max-width 1200px)
  .images__group
    display none
  .slide2
    .images
      margin-right 20px
      padding-left 32px
    .Intro__content-explore-title
      line-height 67px
    .images__interesting-place
      circle(189px)
      top 20px
      right 50px
@media screen and (max-width 870px)
  .slide2
    .Intro__content-explore-title
      font-size: 40px
      line-height: 95.4%
    .Intro__content-explore-text
      font-size: 16px
      line-height: 22px
    .images__interesting-place
      circle(137px)
      top 100px
      right 20px
@media screen and (max-width 680px)
  .slide2
    .images
      display none
    .Intro__content-explore-title
      font-size: 34px
      line-height: 40px
    .Intro__content-explore-text
      margin-top: 0
    .Intro__content-hello-text
      font-size: 14px
      line-height: 19px
</style>
