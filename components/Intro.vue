<template lang="pug">
.Intro
  //- HEADER
  .wrap.flex.x_sb.y_center
    .flex.y_center.my-3
      img(
        src="~static/icon/LOGO.png"
      )
      .upper.ml-3 Умные города
        br
        | Росатома
      img(:src="require(`~/static/img/intro/${pageVars.header.cityLogoSrc}.png`)")
    .flex.y_center
      .upper.bold(
        v-for="It in ['ГОРОДСКИЕ СЕРВИСЫ', 'Новости', 'Обратная связь']"
      ) {{It}}
        | &emsp; &emsp;
      .registration-link Зарегистрироваться

  client-only
    swiper.swiper(
      :options="swiperOption"
    )
      swiper-slide
        .wrap.flex.slide-1
          .content
            a(href="#").smart-cities-link Умные города Росатома
            h1.intro__city-name {{ pageVars.content.cityTitle }}
            .content__text
              p {{ pageVars.content.text1 }}
              p {{ pageVars.content.text2 }}
            .head-of-city.flex.x_start.y_center
              img.head-of-city__photo(:src="require(`~/static/img/intro/${pageVars.content.headOfCityPhoto}.png`)")
              .head-of-city__name
                h3 {{ pageVars.content.headOfCityName }}
                p {{ pageVars.content.headOfCityOccupation }}
          .images
            .flex
              div.left-image.flex.x_center.y_center
                img(:src="require(`~/static/img/intro/${pageVars.images.bigCircle}.png`)")
              div.right-images
                div.upper-right-img.flex.x_center.y_center
                  img(:src="require(`~/static/img/intro/${pageVars.images.rightUpCircle}.png`)")
                div.lower-right-img.flex.x_center.y_center
                  img(:src="require(`~/static/img/intro/${pageVars.images.rightBottomCircle}.png`)")
      swiper-slide
        .wrap.flex.x_sb.slide-2
          .content
            h1.intro__city-name(v-if="pageVars.content.slogan") {{ pageVars.content.slogan }}
            h1.intro__city-name(v-else) Изучай город
            .content__text
              p {{ pageVars.content.exploreCityText }}
            a(href="#").registration-link Перейти к сервисам
          .images.flex
            img(src="~/static/img/intro/los-with-city.png")
            .images-group.flex.y_end
              img.image-group__item(src="~/static/img/intro/tool.png")
              img.image-group__item(src="~/static/img/intro/swimmer.png")
              img.image-group__item(src="~/static/img/intro/mother.png")
      swiper-slide
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
                p.problem-text Собирает обращения жителей по решению городских проблем, будь то залатать яму, отремонтировать детскую площадку, убрать свалку или пожаловаться на незаконную стройку. Отслеживайте все этапы решения обнаруженной проблемы городскими службами
              .shadow-1
              .shadow-2
              .shadow-3


      .swiper-pagination(
        slot="pagination"
      )
  .footer(style="display: none")
    .wrap.flex.y_center.x_sb
      img(:src="require(`~/static/img/intro/${pageVars.footer.gifSrc}.gif`)")
      .flex
        .footer_item
          h2 {{ pageVars.footer.howManyUsers }}
          p Зарегистрированных пользователей
        .footer_item
          h2 {{ pageVars.footer.howManyCompanies }}
          p Организаций и учереждений
        .footer_item
          h2 {{ pageVars.footer.howManyCategories }}
          p Категорий обращений


</template>

<script>
export default {
  components: {},
  data() {
    return {
      pageVars: {
        header: {
          cityLogoSrc: 'zarechnii/city_logo-zarechnii'
        },
        content: {
          cityTitle: 'Заречный',
          text1: 'Уважаемые зареченцы!',
          text2:
            'Перед вами портал «Умный город Росатома — Заречный». Это сервисы для взаимодействия с жителей с властью и городскими службами. Сейчас портал работает в пилотном режиме, и нам важно ваше мнение. С вашей помощью количество и качество сервисов будет расти, а их возможности – расширяться!',
          headOfCityName: 'Олег Климанов',
          headOfCityOccupation: 'глава города Заречный',
          headOfCityPhoto: 'zarechnii/head-of-city',
          slogan: 'Открой для себя',
          exploreCityText: 'Сейчас в пилотном режиме для горожан доступны следующие сервисы: решение городских проблем онлайн, учереждения, полиция и депутатские округа'
        },
        images: {
          bigCircle: 'zarechnii/zarechnii-big-circle-logo',
          rightUpCircle: 'zarechnii/zarechnii-react',
          rightBottomCircle: 'zarechnii/zarechnii-hockey',
        },
        footer: {
          gifSrc: 'zarechnii/Zarechny',
          howManyUsers: '5 000',
          howManyCompanies: '90',
          howManyCategories: '30'
        }
      },
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
  }
}
</script>

<style lang="stylus" scoped>

// >>>>>>>>>  BASE  >>>>>>>>>
.swiper
  height calc(100vh - 200px)
// .Grid
//   display: grid;
//   grid-template-rows: 1fr 1fr 1fr;

.registration-link
  // appearance none
  background #FFF
  color $blue_l
  border-radius 5px
  cursor pointer
  font-weight bold
  padding 1rem 2rem
  text-decoration none

.Intro
  min-height 100vh
  background: url("~static/img/intro/react.png") 0 center no-repeat, linear-gradient(156.35deg, #107B9E 0%, #1A9FB5 46.21%, #3EC180 100%)
  color #FFF

.footer
  position absolute
  bottom 0
  width 100%
  z-index 10
  padding 23px 0 14px 0
  background-color: #107C9F
  &_item
    max-width 210px
    & + &
      margin-left: 38px
  h2
    font-weight: 800;
    font-size: 60px;
    line-height: 74px;
    margin-bottom: 0
  p
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
// >>>>>>>>>>>>>>>>>>


.content
  margin-top: 66px
  position: relative;
  z-index 3
  &__text
    max-width 556px
    p
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
    h3
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
    p
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;










.slide-1
  & .images
    margin-left: 52px
    position relative
  & .left-image
    circle(366px)
    margin-top 100px
    background-color: #F7F7F7
  & .upper-right-img
    circle(214px)
    background-color #0BBBEF;
  & .lower-right-img
    position: absolute;
    bottom: -20px;
    right: -130px;
    circle(250px)
    background-color #FFD35F;


.slide-2
  .content
    margin-top: 158px
  .content__text
    margin-top: 31px
  .registration-link
    margin-top: 16px
    display table
  .images
    max-width 620px
    margin-top: 68px
    margin-bottom: -110px
  .images-group
    position: relative;
    margin-bottom: 117px;
    margin-left: -114px;
  .image-group__item:first-child
    z-index 3
  .image-group__item:nth-child(2)
    z-index 2
  .image-group__item:not(:first-child)
    margin-left: -57px



.slide-3
  .content
    margin-top: 76px
    max-width 556px
  .content__text
    margin-top: 26px
  .registration-link
    margin-top: 16px
    display table
  .problems-container
    position relative
  .solve-problems__item
    position: relative;
    z-index 11
    max-width 280px
    padding: 21px 21px 53px 21px
    background: linear-gradient(52.4deg, #2D71F7 0%, #72CDFF 96.19%);
    border-radius 5px
  .shadow-1
    position absolute
    width: 100%;
    height: 100%;
    border-radius: 5px;
    top: 21px
    left: 21px
    z-index 4
    background: linear-gradient(219.75deg, #0266B0 0%, #01468D 85.89%);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);
  .shadow-2
    position absolute
    top: 42px
    left: 42px
    width: 100%;
    height: 100%;
    z-index 3
    border-radius: 5px;
    background: linear-gradient(52.4deg, #2D71F7 0%, #CE94F8 96.19%);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);
  .shadow-3
    position absolute
    top: 63px
    left: 63px
    width: 100%;
    height: 100%;
    z-index 2
    background: linear-gradient(52.4deg, #54C167 0%, #72CDFF 96.19%);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
  .problem-text
    margin-top: 18px
    font-size: 14px;
    line-height: 20px;
</style>
