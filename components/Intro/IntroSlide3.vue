<template lang="pug">
.wrap.flex.x_sb.slide3
  .content.flex_col.x_center
    div
      a.btn_blue Новые сервисы
    h1.Intro__content-develop-title Развивай город вместе с нами
    p.Intro__content-develop-text Запуск портала – первые шаги в цифровой трансформации города. Портал постоянно развивается. Голосуй за новые сервисы, и мы постараемся их подключить в первую очередь!

    .mt-3
      .btn_white Проголосовать за сервис

  .solve-problems.flex.flex_1.x_center.y_center
    .problems-container
      .solve-problems__item
        .problem-header.flex.y_end
          h3.problem-header-title Городские проблемы
          img(
            src="~/static/Intro/city_problems.svg"
          )
        p.problem-text Собирает обращения жителей по решению городских проблем, будь то залатать яму, отремонтировать детскую площадку, убрать свалку или пожаловаться на незаконную стройку. Отслеживайте все этапы решения обнаруженной проблемы городскими службами
      .shadow-1
      .shadow-2
      .shadow-3
</template>

<script>
export default {
  name: 'IntroSlide3',
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
.slide3
  height 100%

  .content
    max-width 556px
  .Intro__content-develop-title
    margin-top: 34px
    font-weight: bold;
    font-size: 70px;
    line-height: 67px;
  .Intro__content-develop-text
    margin-top: 26px
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 15px

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
    top: 0
    left: 0
    z-index 4
    background: linear-gradient(219.75deg, #0266B0 0%, #01468D 85.89%);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);
  .shadow-2
    position absolute
    top: 0
    left: 0
    width: 100%;
    height: 100%;
    z-index 3
    border-radius: 5px;
    background: linear-gradient(52.4deg, #2D71F7 0%, #CE94F8 96.19%);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);
  .shadow-3
    position absolute
    top: 0
    left: 0
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
@media screen and (max-width 1200px)
  .slide3
    .solve-problems
      margin-right: 63px
@media screen and (max-width: 900px)
  .slide3
    .Intro__content-develop-text
      max-width 267px
    .Intro__content-develop-title
      max-width 365px
      font-size: 40px
      line-height 95.4%
@media screen and (max-width: 680px)
  .slide3
    .solve-problems
      display none
    .Intro__content-develop-title
      font-size: 34px
      line-height: 40px
      margin-top: 0
    .Intro__content-develop-text
      margin-top: 0
      font-size: 14px
      line-height: 19px
</style>
