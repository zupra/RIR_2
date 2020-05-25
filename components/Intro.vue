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
  .wrap
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
  footer.intro__footer
    .wrap.flex.y_center.x_sb
      img(src="~/static/img/intro/animals.png")
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

<style lang="stylus" scoped>
.intro-section
  position: relative;
.react-logo
  position: absolute;
  z-index 2
  top 110px
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
  padding  .7rem 2rem
  border 0
  text-decoration none
.content
  margin-top: 32px
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
  margin-top: 72px
  padding 51px 0 38px 0
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
.Intro
  min-height 100vh
  position relative
  background: linear-gradient(156.35deg, #107B9E 0%, #1A9FB5 46.21%, #3EC180 100%);
  color #FFF
.Grid
  min-height 100vh
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 160px 1fr;


h1
  font-size 60px

ol
  counter-reset: counter_li;

/*li*/
/*  height 5em*/
/*  font-weight bold*/
/*  font-size 1.2em*/


  list-style none
  padding-left 108px
  position relative


  &:before
    position absolute
    left 8px
    // content ''
    color $blue_l
    counter-increment: counter_li;
    content: "0" counter(counter_li);
    font-weight 800
    font-size 1.4rem

    circle(3em)
    line-height 3em
    text-align center

    background #FFF
</style>
