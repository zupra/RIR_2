<template lang="pug">
.Intro
  img.react-logo(src="~/static/img/intro/react.png")
  header.header
    .wrap.flex.x_sb.y_center
      .header__logo-icons
        img.header__logo(src="~/static/img/intro/logo_smart_cities.png")
        img(src="~/static/img/intro/city_logo-zarechnii.png")
      nav
        ul.header__menu.flex
          li.menu-item
            a(href="#").menu-link ГОРОДСКИЕ СЕРВИСЫ
          li.menu-item
            a(href="#").menu-link Новости
          li.menu-item
            a(href="#").menu-link Обратная связь
          li.menu-item
            a(href="#").registration-link Зарегистрироваться
  .wrap.flex.x_sb.slide-1
    .content
      a(href="#").smart-cities-link Умные города Росатома
      h1.intro__city-name Заречный
      .content__text
        p Уважаемые зареченцы!
        p Перед вами портал «Умный город Росатома — Заречный».
        p Это сервисы для взаимодействия с жителей с властью и городскими службами. Сейчас портал работает в пилотном режиме, и нам важно ваше мнение. С вашей помощью количество и качество сервисов будет расти, а их возможности – расширяться!
      .head-of-city.flex.x_start.y_center
        img.head-of-city__photo(src="~/static/img/intro/head-of-city.png")
        div.head-of-city__name
          h3 Олег Климанов
          p глава города Заречный
    .images.flex_1
      .flex.x_sb
        img.upper-left-img(src="~/static/img/intro/atom.png")
        img.upper-right-img(src="~/static/img/intro/balet.png")
      .flex.x_center
        img.middle-center-img(src="~/static/img/intro/hockey.png")
      .flex.x_sb.lower-img-container
        div.lower-left-img
          img(src="~/static/img/intro/los.png")
        img.lower-right-img(src="~/static/img/intro/gerb.png")
  .wrap.flex.x_sb.slide-2
    .content
      h1.intro__city-name Изучай город
      .content__text
        p Сейчас в пилотном режиме для горожан доступны следующие сервисы: решение городских проблем онлайн, учереждения, полиция и депутатские округа
      a(href="#").registration-link Перейти к сервисам
    .images.flex
      img(src="~/static/img/intro/los-with-city.png")
      div.images-group.flex.y_end
        img.image-group__item(src="~/static/img/intro/tool.png")
        img.image-group__item(src="~/static/img/intro/swimmer.png")
        img.image-group__item(src="~/static/img/intro/mother.png")
  .wrap.flex.x_sb.slide-3
    .content
      a(href="#").smart-cities-link Новые сервисы
      h1.intro__city-name Развивай город вместе с нами
      .content__text
        p Запуск портала – первые шаги в цифровой трансформации города. Портал постоянно развивается. Голосуй за новые сервисы, и мы постараемся их подключить в первую очередь!
      a(href="#").registration-link Проголосовать за сервис
    .solve-problems.flex.flex_1.x_center.y_center
      .problems-container
        .solve-problems__item
          .problem-header.flex.y_end
            h3.problem-header-title Городские проблемы
            img(src="~/static/img/intro/city_problems.svg")
          p.problem-text Собирает обращения жителей по решению городских проблем, будь то залатать яму, отремонтировать детскую площадку, убрать свалку
            | или пожаловаться
            | на незаконную стройку.
            | Отслеживайте все этапы решения обнаруженной проблемы городскими
            | службами
        div.shadow-1
        div.shadow-2
        div.shadow-3
  footer.intro__footer
    .wrap.flex.y_center.x_sb
      img(src="~/static/img/intro/los.gif")
      .flex
        div.results__item
          h2 5 000
          p Зарегистрированных пользователей
        div.results__item
          h2 90
          p Организаций и учереждений
        div.results__item
          h2 30
          p Категорий обращений


</template>

<script>
export default {
  components: {},
  data() {
    return {
      swiperOption: {
        // effect: 'fade',
        // loop: true,
        direction: 'vertical',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.react-logo
  position: absolute;
  z-index 2
  top 110px



.slide-1
  display none

.slide-2
  display none

.intro-section
  position: relative;


.header
  padding-bottom: 32px
  width 100%
  padding 1em 1em 0 1em

  &__logo
    width 205px
    height 60px

  &__menu
    list-style-type none

.menu-item
  &:not(first-child)
    margin-left: 41px

.menu-link
  text-transform: uppercase;
  color: #fff
  font-size 14px
  text-decoration none

.registration-link
  background-color #ffffff
  font inherit
  appearance none
  border-radius 5px
  padding .7em 1em
  margin-top .3rem
  cursor pointer
  color $blue_l
  font-size 16px
  font-weight bold
  padding .7rem 2rem
  border 0
  text-decoration none

.content
  margin-top: 66px
  position: relative;
  z-index 3

.content__text
  max-width 556px

  & > p
    font-size: 18px;
    line-height: 30px;

.smart-cities-link
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

.intro__city-name
  margin-top: 16px
  font-weight: bold;
  font-size: 70px;
  line-height: 85px;

.head-of-city
  margin-top: 20px

  &__photo
    circle(96px)

  &__name
    margin-left: 20px

    & > h3
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;

    & > p
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;

.intro__footer
  position absolute
  bottom 0
  width 100%
  z-index 10
  margin-top: 75px
  padding 23px 0 14px 0
  background-color: #107C9F

.results__item
  max-width 210px

  &:not(:first-child)
    margin-left: 38px

  & > h2
    font-weight: 800;
    font-size: 60px;
    line-height: 74px;
    margin-bottom: 0

  & > p
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

.images
  margin-top: 32px

.upper-left-img
  margin-left: -80px
  circle(244px)

.upper-right-img
  margin-right: 30px
  circle(198px)

.middle-center-img
  margin-top: -80px

.lower-img-container
  position relative

.lower-left-img
  position absolute
  top: -25px
  width 307px
  height 303px
  border-radius 50%
  background-color #ADEEB1

.lower-right-img
  top -130px
  right -95px
  position: absolute;
  circle(314px)

.slide-2
  & .content
    margin-top: 158px

  & .content__text
    margin-top: 31px

  & .registration-link
    margin-top: 16px
    display table

  & .images
    max-width 620px
    margin-top: 68px
    margin-bottom: -110px

  & .images-group
    position: relative;
    margin-bottom: 117px;
    margin-left: -114px;

  & .image-group__item:first-child
    z-index 3

  & .image-group__item:nth-child(2)
    z-index 2

  & .image-group__item:not(:first-child)
    margin-left: -57px

.slide-3
  & .content
    margin-top: 76px
    max-width 556px

  & .content__text
    margin-top: 26px

  & .registration-link
    margin-top: 16px
    display table
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

.Intro
  min-height 100vh
  position relative
  background: linear-gradient(156.35deg, #107B9E 0%, #1A9FB5 46.21%, #3EC180 100%), url("~static/img/intro/react.png");
  color #FFF
</style>
