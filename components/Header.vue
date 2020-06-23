<template lang="pug">
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
        p.upper.ml-4.rosatom-name(
          :class="{'mobile-menu-rosatom_black': isMobile}"
        ) Умные города
          br
          span(
            :class="{'mobile-menu-rosatom_blue': isMobile}"
          ) Росатома
        div.ml-4(v-if="city.headerCityLogo")
          picture(
            v-if="!isMobile"
          )
            source(
              :srcset="require(`~/static/Header/city-logo_${city.city}.webp`)"
              type='image/webp'
            )
            img.city-logo(
              :src="require(`~/static/Header/city-logo_${city.city}.png`)"
              alt='логотип Города'
              loading="lazy"
            )
          picture(
            v-if="isMobile"
          )
            source(
              media="(max-width: 650px)"
              :srcset="require(`~/static/Header/city-logo-colored-650_${city.city}.webp`)"
              type='image/webp'
            )
            source(
              media="(max-width: 650px)"
              :srcset="require(`~/static/Header/city-logo-colored-650_${city.city}.png`)"
            )
            source(
              :srcset="require(`~/static/Header/city-logo-colored-big_${city.city}.webp`)"
              type='image/webp'
            )
            img.city-logo(
              :src="require(`~/static/Header/city-logo-colored-big_${city.city}.png`)"
              alt='логотип Города'
              loading="lazy"
            )
        .Alter-logo.flex.y_center(
          v-else
          :class="{'mobile-menu-rosatom_black': isMobile, 'mobile-menu-alter-logo-border': isMobile}"
        ) {{ city.cityName }}
      .flex.y_center

        template(
          v-for="item in scrollLinks"
        )
          .scrollTo.header-nav(
            v-scroll-to="item.to"
          ) {{ item.name }}

        .btn_white(
          v-scroll-to="'#Form'"
          :class="{'mobile-menu-hide-this':isMobile}"
        ) Зарегистрироваться
        .header__mobile-menu.flex.x_center.y_center(
          @click="isMobile = !isMobile"
        )
          img(
            v-if="!isMobile"
            src="~/static/Header/mobile-menu-burger.svg"
          )
          img(
            v-if="isMobile"
            src="~/static/Header/mobile-menu-close.svg"
          )
    div.wrap.mobile-menu-hide-this(
      :class="{'mobile-menu-nav':isMobile, 'mobile-menu-show-this': isMobile}"
    )
      div(
        v-for="item in ['Городские сервисы', 'Новости', 'Обратная связь']"
        @click="isMobile = !isMobile"
      )
        .scrollTo.mobile-menu-nav-item.upper(
          v-scroll-to="'#Form'"
        ) {{ item }}
      .btn_white(
        v-scroll-to="'#Form'"
        @click="isMobile = !isMobile"
      ) Зарегистрироваться
      .flex.socialsIcon
        ShareNetwork(
          network="vk"
          url="https://news.vuejs.org/issues/180"
          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
          description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
          quote="The hot reload is so fast it\'s near instant. - Evan You"
        hashtags="vuejs,vite"
        )
          .icon.vk
        ShareNetwork(
          network="facebook"
          url="https://news.vuejs.org/issues/180"
          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
          description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
          quote="The hot reload is so fast it\'s near instant. - Evan You"
        hashtags="vuejs,vite"
        )
          .icon.fb
        .icon.yt
        .icon.inst


</template>

<script>
export default {
  props: {
    cityName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      scrollLinks: [
        {
          id: 1,
          name: 'Городские сервисы',
          to: '#CityServices'
        },
        {
          id: 2,
          name: 'Новости',
          to: '#News'
        },
        {
          id: 3,
          name: 'Обратная связь',
          to: '#Form'
        }
      ],
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
  .mobile
    height 100vh
    background #E5E5E5
  .header__mobile-menu
    display none
  .mobile-menu
    width 100vw
    height 100vh
    background: #E5E5E5;
  .mobile-menu-alter-logo-border
    border-left 1px solid #323232!important
  .mobile-menu-rosatom_black
    color: #323232
  .mobile-menu-rosatom_blue
    color: #005FA6
  .mobile-menu-nav
    margin-top: 47px
  .mobile-menu-nav-item
    margin: 0 auto;
    margin-bottom: 30px
    font-size: 14px;
    line-height: 17px;
    color: #393D3F;
  .mobile-menu-hide-this
    display none
  .mobile-menu-show-this
    display inherit
  .socialsIcon
    position absolute
    bottom 40px
    .icon
      shadow()
      background-position center
      background-repeat no-repeat
    .vk
      background-image url("~static/Footer/socials/vk base.png")
      &:hover
        background: #01468D url("~static/Footer/socials/vk hover.png") center  no-repeat
    .fb
      background-image url("~static/Footer/socials/fb base.png")
      margin-left: 2em
      &:hover
        background: #3366FF url("~static/Footer/socials/fb hover.png") center  no-repeat
    .yt
      background-image url("~static/Footer/socials/yt base.png")
      margin-left: 2em
      &:hover
        background: #FC0D1B url("~static/Footer/socials/yt hover.png") center  no-repeat
    .inst
      background-image url("~static/Footer/socials/inst base.png")
      margin-left: 2em
      &:hover
        background: url("~static/Footer/socials/inst hover.png") center  no-repeat,
          linear-gradient(211.29deg, #5058CA 19.57%, #D62C78 54.97%, #F5CB6E 89.63%)

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
    margin-right: 15px
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
