<template lang="pug">
  //:class="{mobile: isMobile}"
    //:class="setBackground && `${city.colorThemeClasses.formColor} setBackground`"
  header.topNav(
    :class="[{mobile: isMobile}, setBackground && `${city.colorThemeClasses.formColor} setBackground`]"
  )
    .wrap.flex.x_sb
      .flex.y_center
        picture(
          v-if="!isMobile"
        )
          source(
            srcset='~static/Header/LOGO.webp',
            type='image/webp'
          )
          img.header-logo(
            src='~static/Header/LOGO.png',
            loading="lazy"
            alt='логотип РИР'
          )
        picture(
          v-if="isMobile"
        )
          source(
            srcset='~static/Header/LOGO_mobile-menu.webp',
            type='image/webp'
          )
          img.header-logo(
            src='~static/Header/LOGO_mobile-menu.png',
            loading="lazy"
            alt='логотип РИР'
          )
        p.upper.ml-4.rosatom-name Умные города
          br
          | Росатома
        div.ml-4(v-if="city.headerCityLogo")
          picture
            source(
              :srcset="require(`~/static/Header/city-logo_${city.city}.webp`)"
              type='image/webp'
            )
            img.city-logo(
              :src="require(`~/static/Header/city-logo_${city.city}.png`)"
              alt='логотип Города'
              loading="lazy"
            )
        .Alter-logo.flex.y_center(
          v-else
        ) {{ city.cityName }}
      .flex.y_center

        template(
          v-for="item in ['Городские сервисы', 'Новости', 'Обратная связь']"
        )
          .scrollTo.header-nav(
            v-scroll-to="'#Form'"
          ) {{ item }}

        .btn_white(
          v-scroll-to="'#Form'"
        ) Зарегистрироваться
        .header__mobile-menu.flex.x_center.y_center
          input.checkbox1.visuallyHidden(
            type="checkbox"
            id="mobile-menu-btn"
          )
          label(
            for="mobile-menu-btn"
            @click="isMobile = !isMobile"
          )
            .hamburger.hamburger1
              span.bar.bar1
              span.bar.bar2
              span.bar.bar3
              span.bar.bar4
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
      setBackground: false,
      isMobile: false
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
      scrollY > 10 ? (this.setBackground = true) : (this.setBackground = false)
    })
  }
}
</script>

<style lang="stylus" scoped>
  .header__mobile-menu
    display none
  .mobile-menu
    width 100vw
    height 100vh
    background: #E5E5E5;

.Alter-logo
  height 2.5em
  border-left 1px solid rgba(#FFF, .7)
  text-transform uppercase
  margin-left 1.5em;
  padding-left 1.5em;
.mobile
  height 100vh
  background #E5E5E5

.topNav
  padding 18px 0 18px 0
  position fixed
  z-index 100
  top 0
  // right 0
  width 100%
  color: #FFF
  &.setBackground
    transition background .3s
    // shadow()
    box-shadow: 0 2px 4px -1px rgba(#000,.2), 0 4px 5px 0 rgba(#000,.14), 0 1px 10px 0 rgba(#000,.12);
    // background linear-gradient(270deg, #1DA2B1 0%, #1A9FB5 46.21%, #1280A1 100%)

.scrollTo
  text-transform uppercase
  font-weight bold
  cursor pointer
  margin-right : 41px
@media screen and (max-width 1200px)
  .scrollTo
    font-size 14px
    margin-right: 26px
@media screen and (max-width 1000px)
  .header-nav
    display none
  .header__mobile-menu
    display flex
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);
    circle(56px)
    border-radius 50%
    background-color #fff
    margin-left 30px

  .visuallyHidden
    position absolute
    overflow hidden
    clip rect(0 0 0 0)
    height 1px
    width 1px
    margin -1px
    padding 0
    border 0

  .hamburger
    cursor pointer
    margin 0 auto
    width 30px
    height 30px
    position relative

  .hamburger .bar
    padding 0
    width 30px
    height 4px
    background-color #2D71F7
    display block
    border-radius 4px
    transition all 0.4s ease-in-out
    position absolute

  .bar1
    top 0

  .bar2, .bar3
    top 13.5px

  .bar3
    right 0

  .bar4
    bottom 0

  .checkbox1:checked + label > .hamburger1 > .bar1
    transform rotate(45deg)
    transform-origin 5%
    width 41px

  .checkbox1:checked + label > .hamburger1 > .bar2
    transform: translateX(-40px)
    background-color: transparent

  .checkbox1:checked + label > .hamburger1 > .bar3
    transform: translateX(40px)
    background-color: transparent

  .checkbox1:checked + label > .hamburger1 > .bar4
    transform-origin: 5%
    transform: rotate(-45deg)
    width: 41px
@media screen and (max-width 768px)
  .header__mobile-menu
    margin-left: 5px
@media screen and (max-width 700px)
  .btn_white
    display none
@media screen and (max-width 650px)
  .Alter-logo
    font-size: 14px
    margin-left: .3em
    padding-left: .3em
  .header-logo
    width 45px
    height 45px
  .rosatom-name
    font-size 11px
  .header__mobile-menu
    margin-left: 0
@media screen and (max-width 400px)
  .rosatom-name
    margin-left: 5px
  .header__mobile-menu
    circle(50px)
</style>
