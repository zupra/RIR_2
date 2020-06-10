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
    div.flex
      .registration-link Перейти к сервисам
  .images.flex.y_end.x_sa(
    :class="city.slide2PositionOptions"
  )
    img.slide2-main-img(
      :src="require(`~/static/img/intro/${city.city}/slide2_${city.city}.png`)"
      :class="city.contur"
    )
    div.images__group.flex(
      v-if="city.secondSlideGraphicBalls"
    )
      img.images-group__item(
        src="~/static/img/intro/tool.png"
      )
      img.images-group__item(
        src="~/static/img/intro/swimmer.png"
      )
    div.images__interesting-place.flex.y_center.x_center(
      v-if="city.slide2InterestingPlace" 
      :class="city.slide2InterestingPlaceStyle"
    )
      img(
        :src="require(`~/static/img/intro/${city.city}/slide2-1_${city.city}.png`)"
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
  .registration-link
    margin-left 0
  .images
    padding-left 52px
    flex 1
    position: relative
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
</style>
