<template lang="pug">
section.ImgGrid

  .wrap
    .BR
    .center.subText
      h2.H Возможности
      p Платформа «Умный город Росатома» —  единая информационная основа для внедрения цифровых городских сервисов. «Умные» технологии повышают эффективность управления городскими процессами, облегчая жизнь и горожанам, и властям, расширяя возможности обратной связи.

      img(src='~/static/gifs/1.gif')

      h2.H Базовые модули
      p Базовая платформа «Умный город» —  единая информационная основа для внедрения цифровых городских сервисов. Базовая версия включает в себя: модули решения городских проблем онлайн, учреждения, полиция и депутатские округа



    figure
      figcaption
        h2.text_x3.mb-3 Решение городских
          br 
          | проблем онлайн
        p.subText Оставляйте заявки по решению городских проблем: залатать яму, отремонтировать детскую площадку, убрать свалку или пожаловаться на незаконную стройку. Отслеживайте статус обращений онлайн. 
        .BR
        .btn Перейти
      .picture
        img(src='~/static/gifs/1.gif')

    figure
      figcaption
        h2.text_x3.mb-3  Учреждения
        p.subText Получайте информацию обо всех государственных и муниципальных организациях, образовательных и культурных учреждениях: адреса, графики работы, интернет-ресурсы. Все это есть на нашей платформе
        .BR
        .btn Перейти
      .picture
        img(src='~/static/gifs/2.gif')

    figure
      figcaption
        h2.text_x3.mb-3 Полиция
        p.subText Узнайте, за каким полицейским участком закреплен ваш дом, и обращайтесь к своему участковому. В системе удобно видеть границы полицейских участков и находить контакты участковых. 
        .BR
        .btn Перейти
      .picture
        img(src='~/static/gifs/1.gif')

    figure
      figcaption
        h2.text_x3.mb-3 Депутатские округа
        p.subText Узнавайте, к какому депутатскому округу относится ваш дом, и обращайтесь к своему депутату для решения ваших проблем.
        .BR
        .btn Перейти
      .picture
        img(src='~/static/gifs/2.gif')




</template>

<script>
const DATA = [
  {
    id: 1,
    title: '',
    text: ''
  }
]

export default {
  data() {
    return {
      list: DATA
    }
  }
}
</script>

<style lang="stylus" scoped>
.ImgGrid
  background #FFF


.H
  font-size 60px


.center
  max-width: 750px;
  margin: 0 auto;

// .picture
//   circle(300px)
//   background #CCC

figure
  margin 4vh 0
  display flex
  flex-wrap wrap
  justify-content center
  align-items center

  @media (min-width: 600px)
    &:nth-of-type(even)
      flex-direction row-reverse


figcaption
  //align-self center
  margin 1em
  flex 1
  min-width 200px
</style>
