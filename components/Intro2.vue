<template lang="pug">
section.Intro(:class="city.colorThemeClasses.section")
  header.Intro__header
    .wrap.flex.x_sb
      .intro__header-left.flex.y_center
        img(src="~static/icon/LOGO.png")
        p.upper.ml-4.intro__header-title Умные города
          br
          | Росатома
        img.ml-2(:src="require(`~/static/img/intro/${city.headerCityLogo}`)")
      nav.intro__header-right.flex.y_center
        template(
          v-for="item in ['ГОРОДСКИЕ СЕРВИСЫ', 'Новости', 'Обратная связь']"
        )
          a.upper.nav-item(
            v-scroll-to="'#Form'"
            src="#"
          ) {{ item }}
        .registration-link Зарегистрироваться
  .Intro__content
    client-only
      swiper.swiper(
        :options="swiperOption"
      )
        swiper-slide
          .wrap.slide1.flex
            .content.flex_col.x_center
              div
                a(href="#").smart-cities-link Умные города Росатома
              h2.Intro__content-city-name {{ city.cityName }}
              p.Intro__content-hello-text {{ city.helloText }}
              p.Intro__content-hello-text {{ city.helloTextMain }}
              .Intro__content-head-of-city.flex.x_start.y_center
                img.head-of-city__photo(:src="require(`~/static/img/intro/${city.headOfCityPhoto}`)")
                .head-of-city__name
                  h3 {{ city.headOfCityName }}
                  p {{ city.headOfCityOccupation }}
            .images.flex
              div.flex.y_center
                div.left-image.flex.x_center.y_center(:class="city.colorThemeClasses.leftCircleImage")
                  img(:src="require(`~/static/img/intro/${city.firstSlideLeftBigCircleImage}`)")
              div.flex_col.x_sa
                div.right-image.flex.x_center.y_center(:class="city.colorThemeClasses.rightCircleImage")
                  img(:src="require(`~/static/img/intro/${city.secondUpperImage}`)")
                div.bottom-image.flex.x_center.y_center(:class="city.colorThemeClasses.bottomCircleImage")
                  img(:src="require(`~/static/img/intro/${city.thirdLowerImage}`)")
        swiper-slide
          .wrap.slide2.flex
            .content.flex_col.x_center
              h2.Intro__content-explore-title(v-if="city.slogan") {{ city.slogan }}
              h2.Intro__content-explore-title(v-if="city.slogan2") {{ city.slogan2 }}
              h2.Intro__content-explore-title(v-else) Изучай город
              p.Intro__content-explore-text {{ city.exploreText }}
              div.flex
                .registration-link Перейти к сервисам
            .images.flex.y_end.x_sa(:class="city.slide2PositionOptions")
              img(:src="require(`~/static/img/intro/${city.secondSlideBigImage}`)"
                :class="city.contur")
              div.images__group.flex(v-if="city.secondSlideGraphicBalls")
                img.images-group__item(src="~/static/img/intro/tool.png")
                img.images-group__item(src="~/static/img/intro/swimmer.png")
              div.images__interesting-place.flex.y_center.x_center(v-if="city.slide2InterestingPlace" :class="city.slide2InterestingPlaceStyle")
                img(:src="require(`~/static/img/intro/${city.slide2InterestingPlace}`)")
        swiper-slide
          .wrap.flex.x_sb.slide3
            .content.flex_col.x_center
              div
                a(href="#").smart-cities-link Новые сервисы
              h1.Intro__content-develop-title Развивай город вместе с нами
              p.Intro__content-develop-text Запуск портала – первые шаги в цифровой трансформации города. Портал постоянно развивается. Голосуй за новые сервисы, и мы постараемся их подключить в первую очередь!
              div.link
                a(href="#").registration-link Проголосовать за сервис
            .solve-problems.flex.flex_1.x_center.y_center
              .problems-container
                .solve-problems__item
                  .problem-header.flex.y_end
                    h3.problem-header-title Городские проблемы
                    img(src="~/static/img/intro/city_problems.svg")
                  p.problem-text Собирает обращения жителей по решению городских проблем, будь то залатать яму, отремонтировать детскую площадку, убрать свалку или пожаловаться на незаконную стройку. Отслеживайте все этапы решения обнаруженной проблемы городскими службами
                .shadow-1
                .shadow-2
                .shadow-3
        .swiper-pagination(
          slot="pagination"
        )
  footer.Intro__footer(:class="city.colorThemeClasses.footer")
    .wrap.flex.y_center.x_sb
      img(:src="require(`~/static/img/intro/${city.footerGif}`)")
      .flex
        .Intro__footer-achievment
          h2.achievment-number {{ city.howManyUsers }}
          p.achievment-title Зарегистрированных пользователей
        .Intro__footer-achievment
          h2.achievment-number {{ city.howManyCompanies }}
          p.achievment-title Организаций и учереждений
        .Intro__footer-achievment
          h2.achievment-number {{ city.howManyCategories }}
          p.achievment-title Категорий обращений
</template>

<script>
export default {
  name: 'Intro2',
  data() {
    return {
      // headerLinks: ['ГОРОДСКИЕ СЕРВИСЫ', 'Новости', 'Обратная связь'],
      swiperOption: {
        // effect: 'fade',
        loop: true,
        mousewheel: true,
        direction: 'vertical',
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
  created() {
    console.log(this.$store.getters.GET_CITY);
  },
  computed: {
    city() {
      return this.$store.getters.GET_CITY;
    }
  },
}
</script>

<style lang="stylus" scoped>
/*Заречный*/
.section-color-theme_zarechnii
  background: url("~static/img/intro/react.png") 0 center no-repeat, linear-gradient(156.35deg,
  #107B9E 0%, #1A9FB5 46.21%, #3EC180 100%)
.footer-color-theme_zarechnii
  background-color: #107C9F
.left-circle-image-color-theme_zarechnii
  background-color: #F7F7F7
.right-circle-image-color-theme_zarechnii
  background-color: #0BBBEF
.bottom-circle-image-color-theme_zarechnii
  background-color: #FFD35F
.los-contur
  -webkit-filter: drop-shadow(3px 5px 5px #000);
  filter: drop-shadow(10px 15px 0px #51BBB7);
/*Саров*/
.section-color-theme_sarov
  background: url("~static/img/intro/react.png") 0 center no-repeat, linear-gradient(153.62deg,
  #4F21B4 0.82%, #6567DF 52.47%, #9489E0 100%)!important;
.footer-color-theme_sarov
  background: #4E4084;
.left-circle-image-color-theme_sarov
  background-color: #F7F7F7
.right-circle-image-color-theme_sarov
  background-color: #6B31ED
.bottom-circle-image-color-theme_sarov
  background-color: #6759D1
/*Лесной*/
.section-color-theme_lesnoi
  background: url("~static/img/intro/react.png") 0 center no-repeat, linear-gradient(158.16deg,
  #558E4C 3.22%, #EBF0CE 116.48%)!important
.footer-color-theme_lesnoi
  background: #558E4C;
.left-circle-image-color-theme_lesnoi
  background-color: #EBF0CE
.right-circle-image-color-theme_lesnoi
  background-color: #4392A7
.bottom-circle-image-color-theme_lesnoi
  background-color: #D05C38
.slide2-contur_lesnoi
  -webkit-filter: drop-shadow(3px 5px 5px #EBF0CE);
  filter: drop-shadow(10px 15px 0px #EBF0CE);
.slide2-position-options_lesnoi
  align-items center!important
/*Глазов*/
.section-color-theme_glazov
  background: url("~static/img/intro/react.png") 0 center no-repeat, linear-gradient(336.17deg,
  #9EDCF5 0%, #80BFFF 100%)!important;
.footer-color-theme_glazov
  background: #3F96D8;
.left-circle-image-color-theme_glazov
  background-color: #F7F7F7
.right-circle-image-color-theme_glazov
  background-color: #3F96D8
.bottom-circle-image-color-theme_glazov
  background-color: #FFEA7D
.slide2-position-options_glazov
  align-items center!important
/*Зеленогорск*/
.section-color-theme_zelenogorsk
  background: url("~static/img/intro/react.png") 0 center no-repeat, linear-gradient(156.35deg,
  #21547B 0%, #3DC7CF 0.01%, #B2C963 100%)!important;
.footer-color-theme_zelenogorsk
  background: #21547B;
.left-circle-image-color-theme_zelenogorsk
  background-color: #F7F7F7
.right-circle-image-color-theme_zelenogorsk
  background-color: #21547B
.bottom-circle-image-color-theme_zelenogorsk
  background-color: #3D90CF
.slide2-interesting-place
  background: #E6EDFF;
  border: 3px solid #C9F05E;
/*Новоуральск*/
.section-color-theme_novouralsk
  background: url("~static/img/intro/react.png") 0 center no-repeat, linear-gradient(158.16deg,
  #3023AE 3.22%, #53A0FD 116.48%)!important;
.footer-color-theme_novouralsk
  background: #3023AE;
.left-circle-image-color-theme_novouralsk
  background-color: #F7F7F7
.right-circle-image-color-theme_novouralsk
  background-color: #3023AE
.bottom-circle-image-color-theme_novouralsk
  background-color: #01B4B0
/*Озерск*/
.section-color-theme_ozersk
  background: url("~static/img/intro/react.png") 0 center no-repeat, linear-gradient(157.99deg,
  #0B4FFE 3.22%, #53A0FD 116.48%)!important;
.footer-color-theme_ozersk
  background: #0B4FFE;
.left-circle-image-color-theme_ozersk
  background-color: #F7F7F7
.right-circle-image-color-theme_ozersk
  background-color: #0B4FFE
.bottom-circle-image-color-theme_ozersk
  background-color: #FFEA7D
/*Северск*/
.section-color-theme_seversk
  background: url("~static/img/intro/react.png") 0 center no-repeat, linear-gradient(156.35deg,
  #107B9E 0%, #1A9FB5 46.21%, #3EC180 100%)!important;
.footer-color-theme_seversk
  background: #005CA9;
.left-circle-image-color-theme_seversk
  background-color: #00579C
.right-circle-image-color-theme_seversk
  background-color: #5B18F7
.bottom-circle-image-color-theme_seversk
  background-color: #0BD7BB
/*Заречный свердловская обл.*/
.section-color-theme_zarechnii-sverdl
  background: url("~static/img/intro/react.png") 0 center no-repeat, linear-gradient(156.35deg,
  #107B9E 0%, #1A9FB5 46.21%, #3EC180 100%)!important;
.footer-color-theme_zarechnii-sverdl
  background: #005CA9;
.left-circle-image-color-theme_zarechnii-sverdl
  background-color: #FEFEFE
.right-circle-image-color-theme_zarechnii-sverdl
  background-color: #005CA9
.bottom-circle-image-color-theme_zarechnii-sverdl
  background-color: #FFEA7D
/*Снежинск*/
.section-color-theme_snezhinsk
  background: url("~static/img/intro/react.png") 0 center no-repeat, linear-gradient(156.35deg,
  #005CA9 0%, #3D90CF 100%)!important;
.footer-color-theme_snezhinsk
  background: #005CA9;
.left-circle-image-color-theme_snezhinsk
  background-color: #FFFFFF
.right-circle-image-color-theme_snezhinsk
  background-color: #005CA9
.bottom-circle-image-color-theme_snezhinsk
  background-color: #FEFEFE
/*Железногорск*/
.section-color-theme_zheleznogorsk
  background: url("~static/img/intro/react.png") 0 center no-repeat, linear-gradient(156.35deg,
  #005CA9 0%, #3D90CF 100%)!important;
.footer-color-theme_zheleznogorsk
  background: #005CA9;
.left-circle-image-color-theme_zheleznogorsk
  background-color: #FFFFFF
.right-circle-image-color-theme_zheleznogorsk
  background-color: #005CA9
.bottom-circle-image-color-theme_zheleznogorsk
  background-color: #FFFFFF
/*Трехгорный*/
.section-color-theme_trehgornii
  background: url("~static/img/intro/react.png") 0 center no-repeat, linear-gradient(156.35deg,
  #5CA647 0%, #5CA647 0.01%, #61A849 30.33%, #A0DA59 100%)!important;
.footer-color-theme_trehgornii
  background: #767A7A;
.left-circle-image-color-theme_trehgornii
  background-color: #EFF4F8
.right-circle-image-color-theme_trehgornii
  background-color: #006AB4
.bottom-circle-image-color-theme_trehgornii
  background-color: #EFF4F8

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

.Intro
  display flex
  flex-direction column
  height 100vh
  color: #ffffff
  background: url("~static/img/intro/react.png") 0 center no-repeat, linear-gradient(156.35deg, #107B9E 0%, #1A9FB5 46.21%, #3EC180 100%)
  &__header
    padding-top 18px
    &-title
      font-size 18px
      font-weight 400
    & .nav-item:not(:first-child)
      margin-left: 41px
  &__content
    flex 1
    overflow-y hidden
    & .swiper-container
      height 100%
    &  .swiper-slide-active
      height 100%!important
    & .slide1
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
      & .right-image
        circle(214px)
      & .bottom-image
        circle(250px)
    & .slide2
      height 100%
      & .content
        max-width 467px
      & .Intro__content-explore-title
        font-weight: bold;
        font-size: 70px;
        line-height: 85px;
        margin-bottom: 0
      & .Intro__content-explore-text
        margin-top: 27px
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 22px
      & .registration-link
        margin-left 0
      & .images
        padding-left: 52px
        flex: 1
        position: relative;
      & .images__group
        position: absolute;
        bottom: 80px
        right 0
      & .images__group-item
        z-index 3
      & .images-group__item:last-child
        margin-left: -55px
        z-index 1
      & .images__interesting-place
        position: absolute;
        width 210px;
        height 210px;
        border-radius 50%
        top: 46px;
        right: 35px;
    & .slide3
      height 100%
      & .link
        margin-top: 16px
      & .content
        margin-top: 76px
        max-width 556px
      & .Intro__content-develop-title
        margin-top: 34px
        font-weight: bold;
        font-size: 70px;
        line-height: 67px;
      & .Intro__content-develop-text
        margin-top: 26px
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 15px
      & .registration-link
        margin-left: 0
      & .problems-container
        position relative
      & .solve-problems__item
        position: relative;
        z-index 11
        max-width 280px
        padding: 21px 21px 53px 21px
        background: linear-gradient(52.4deg, #2D71F7 0%, #72CDFF 96.19%);
        border-radius 5px
      & .shadow-1
        position absolute
        width: 100%;
        height: 100%;
        border-radius: 5px;
        top: 21px
        left: 21px
        z-index 4
        background: linear-gradient(219.75deg, #0266B0 0%, #01468D 85.89%);
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);
      & .shadow-2
        position absolute
        top: 42px
        left: 42px
        width: 100%;
        height: 100%;
        z-index 3
        border-radius: 5px;
        background: linear-gradient(52.4deg, #2D71F7 0%, #CE94F8 96.19%);
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);
      & .shadow-3
        position absolute
        top: 63px
        left: 63px
        width: 100%;
        height: 100%;
        z-index 2
        background: linear-gradient(52.4deg, #54C167 0%, #72CDFF 96.19%);
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);
        border-radius: 5px;
      & .problem-text
        margin-top: 18px
        font-size: 14px;
        line-height: 20px;
  &__footer
    padding 23px 0 14px 0
    & .Intro__footer-achievment
      max-width 250px
      & .achievment-number
        font-weight 800
        font-size 60px
        line-height 74px
        margin-bottom: 0
      & .achievment-title
        font-weight bold
        font-size 20px
        line-height 24px
</style>
