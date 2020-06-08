<template lang="pug">
section.Intro(:class="city.colorThemeClasses.section")

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
        swiper-slide
          .wrap.slide2.flex
            .content.flex_col.x_center
              h2.Intro__content-explore-title(v-if="city.slogan") {{ city.slogan }}
              h2.Intro__content-explore-title(v-if="city.slogan2") {{ city.slogan2 }}
              h2.Intro__content-explore-title(v-else) Изучай город
              p.Intro__content-explore-text Сейчас в пилотном режиме для горожан доступны следующие сервисы: решение городских проблем онлайн, учереждения, полиция и депутатские округа
              div.flex
                .registration-link Перейти к сервисам
            .images.flex.y_end.x_sa(:class="city.slide2PositionOptions")
              img.slide2-main-img(:src="require(`~/static/img/intro/${city.city}/slide2_${city.city}.png`)"
                :class="city.contur")
              div.images__group.flex(v-if="city.secondSlideGraphicBalls")
                img.images-group__item(src="~/static/img/intro/tool.png")
                img.images-group__item(src="~/static/img/intro/swimmer.png")
              div.images__interesting-place.flex.y_center.x_center(v-if="city.slide2InterestingPlace" :class="city.slide2InterestingPlaceStyle")
                img(:src="require(`~/static/img/intro/${city.city}/slide2-1_${city.city}.png`)")
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
      img(:src="require(`~/static/img/intro/${city.city}/messenger_${city.city}.gif`)")
      .flex
        .Intro__footer-achievment
          //- h2.achievment-number {{ city.howManyUsers }}
          animated-number.achievment-number(
            v-observe-visibility="{callback:cb_howManyUsers, intersection:{threshold:0.7,}}"
            :value="val_1"
            :duration="2500"
            :round="1"
          )
          p.achievment-title Зарегистрированных пользователей
        .Intro__footer-achievment
          //- h2.achievment-number {{ city.howManyCompanies }}
          animated-number.achievment-number(
            v-observe-visibility="{callback:cb_howManyCompanies, intersection:{threshold:0.7,}}"
            :value="val_2"
            :duration="3000"
            :delay="1000"
            :round="1"
          )
          p.achievment-title Организаций и учереждений
        .Intro__footer-achievment
          //- h2.achievment-number {{ city.howManyCategories }}
          animated-number.achievment-number(
            v-observe-visibility="{callback:cb_howManyCategories, intersection:{threshold:0.7,}}"
            :value="val_3"
            :duration="3000"
            :delay="2000"
            :round="1"
            easing="easeOutCirc"
          )
          p.achievment-title Категорий обращений
</template>

<script>
import AnimatedNumber from 'animated-number-vue'
export default {
  components: {
    AnimatedNumber
  },
  props: {
    cityName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      val_1: 1,
      val_2: 1,
      val_3: 1,
      //
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
  },
  methods: {
    cb_howManyUsers(isVisible, entry) {
      this.val_1 = this.city.howManyUsers
      if (!entry.isIntersecting) this.val_1 = 1
    },
    cb_howManyCompanies(isVisible, entry) {
      this.val_2 = this.city.howManyCompanies
      if (!entry.isIntersecting) this.val_2 = 1
    },
    cb_howManyCategories(isVisible, entry) {
      this.val_3 = this.city.howManyCategories
      if (!entry.isIntersecting) this.val_3 = 1
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-slide:not(.swiper-slide-active){
  opacity: 0 !important;
}

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
  &__content
    flex 1
    overflow-y hidden
    & .swiper-container
      height 100%
      padding-top 70px
    & .swiper-slide-active
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
        background-color #E6EDFF
        top: 46px;
        right: 35px;
    & .slide3
      height 100%
      & .link
        margin-top: 16px
      & .content
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
        top: 0
        left: 0
        z-index 4
        background: linear-gradient(219.75deg, #0266B0 0%, #01468D 85.89%);
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);
      & .shadow-2
        position absolute
        top: 0
        left: 0
        width: 100%;
        height: 100%;
        z-index 3
        border-radius: 5px;
        background: linear-gradient(52.4deg, #2D71F7 0%, #CE94F8 96.19%);
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);
      & .shadow-3
        position absolute
        top: 0
        left: 0
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
@-webkit-keyframes shakeLeft
    100%
      transform translate(8px, 8px)
@-webkit-keyframes shakeRight
  100%
    transform translate(6px, 6px)
@-webkit-keyframes shakeBottom
  100%
    transform translateY(4px)
.swiper-slide-active
  position: relative!important;
  z-index 100
.swiper-slide-active .shadow-1
  transform translate(21px, 21px)
  transition all .8s ease-out
.swiper-slide-active .shadow-2
  transform translate(42px, 42px)
  transition all .8s ease-out
.swiper-slide-active .shadow-3
  transform translate(63px, 63px)
  transition all .8s ease-out
.swiper-slide-active  .slide2-main-img
  opacity: 1
  transform: translateX(10px);
  transition all 1.2s ease-out
  animation: showImage 1.2s ease-out
@-webkit-keyframes showImage
  0%
    opacity 0
  25%
    opacity .25
  50%
    opacity .5
  75%
    opacity .75
  100%
    opacity 1
</style>
