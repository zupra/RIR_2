<template lang="pug">

header.topNav(
  :class="{setBackground:setBackground}"
)
  .wrap.flex.x_sb
    .flex.y_center
      img(
        src="~static/icon/LOGO.png"
      )
      p.upper.ml-4 Умные города
        br
        | Росатома
      
      // cityLogo || cityName 
      img.ml-4(
        v-if="city.headerCityLogo"
        :src="require(`~/static/img/intro/${city.city}/city-logo_${city.city}.png`)"
      )
      .Alter-logo.flex.y_center(
        v-else
      ) {{ city.cityName }}
    
    
    .flex.y_center

      template(
        v-for="item in ['Городские сервисы', 'Новости', 'Обратная связь']"
      )
        .scrollTo(
          v-scroll-to="'#Form'"
        ) {{ item }}

      .btn_white(
        v-scroll-to="'#Form'"
      ) Зарегистрироваться


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
  data() {
    return {
      setBackground: false
    }
  },
  computed: {
    city() {
      return this.$store.state[this.cityName]
    }
  },
  mounted() {
    window.addEventListener('scroll', (event) => {
      const scrollY = Math.round(window.scrollY)
      // console.log(scrollY)
      scrollY > 10 ? (this.setBackground = true) : (this.setBackground = false)
    })
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>

.Alter-logo
  height 2.5em
  border-left 1px solid rgba(#FFF, .7)
  text-transform uppercase
  margin-left 1.5em;
  padding-left 1.5em;


.topNav
  padding 18px 0 18px 0
  position fixed
  z-index 100
  top 0
  // right 0
  width 100%
  color: #FFF
  &.setBackground
    // transition background .3s
    background linear-gradient(270deg, #1DA2B1 0%, #1A9FB5 46.21%, #1280A1 100%)

.scrollTo
  text-transform uppercase
  font-weight bold
  cursor pointer
  margin-right : 41px
</style>
