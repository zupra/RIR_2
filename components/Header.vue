<template lang="pug">
header.Intro__header
  .wrap.flex.x_sb
    .intro__header-left.flex.y_center
      img(src="~static/icon/LOGO.png")
      p.upper.ml-4.intro__header-title Умные города
        br
        | Росатома
      img.ml-2(v-if="city.headerCityLogo"
        :src="require(`~/static/img/intro/${city.city}/city-logo_${city.city}.png`)")
      div(v-else).ml-4.flex.y_center.alternative-header-logo
        p.upper {{ city.cityName }}
    nav.intro__header-right.flex.y_center
      template(
        v-for="item in ['ГОРОДСКИЕ СЕРВИСЫ', 'Новости', 'Обратная связь']"
      )
        a.upper.nav-item(
          v-scroll-to="'#Form'"
          src="#"
        ) {{ item }}
      .registration-link Зарегистрироваться
</template>

<script>
export default {
  name: 'Header',
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
.alternative-header-logo
  height 100%
  border-left 1px solid #ffffff
  padding-left: 26px
.registration-link
  margin-left: 46px
  background #FFF
  color $blue_l
  border-radius 5px
  cursor pointer
  font-weight bold
  padding 1rem 2rem
  text-decoration none
.smart-cities-link
  display table
  z-index 100
  cursor: pointer;
  color: #ffffff
  text-decoration: none;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  padding: 8px 19px;
  background-color: #005CA9
  border-radius: 5px;
.Intro__header
  padding 18px 0 18px 0
  position fixed
  z-index 100
  top 0
  right 0
  width 100%
  color: #ffffff
  background linear-gradient(270deg, #1DA2B1 0%, #1A9FB5 46.21%, #1280A1 100%)
  &-title
    font-size 18px
    font-weight 400
  & .nav-item:not(:first-child)
    margin-left: 41px
</style>
