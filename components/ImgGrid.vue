<template lang="pug">
section.ImgGrid

  .wrap
    .BR
    .center.subText
      h2.H Возможности
      p Платформа «Умный город Росатома» —  единая информационная основа для внедрения цифровых городских сервисов. «Умные» технологии повышают эффективность управления городскими процессами, облегчая жизнь и горожанам, и властям, расширяя возможности обратной связи.


      .center
        //- img(src='~/static/gifs/1.gif' class="animate-me no-scale")
        vue-lottie(
          loop
          autoplay
          :data="animation_1"
          renderer="html"
          :height="506"
          :width="900"
        )
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


      picture
        img(src='~/static/gifs/2.gif' class="animate-me no-scale")
        //-
          vue-lottie(
            loop
            autoplay
            :data="animation_2"
            :height="482"
            :width="450"
          )

        //-
          Lottie(
            style="width:600px"
            renderer="canvas"
            :animationData="animation_2"
          )
          

    figure
      figcaption
        h2.text_x3.mb-3  Учреждения
        p.subText Получайте информацию обо всех государственных и муниципальных организациях, образовательных и культурных учреждениях: адреса, графики работы, интернет-ресурсы. Все это есть на нашей платформе
        .BR
        .btn Перейти
      picture
        //- img(src='~/static/gifs/3.gif' class="animate-me no-scale")
        vue-lottie(
          loop
          autoplay
          :data="animation_3"
          :height="600"
          :width="600"
        )

    figure
      figcaption
        h2.text_x3.mb-3 Полиция
        p.subText Узнайте, за каким полицейским участком закреплен ваш дом, и обращайтесь к своему участковому. В системе удобно видеть границы полицейских участков и находить контакты участковых.
        .BR
        .btn Перейти
      picture
        img(src='~/static/gifs/4.gif' class="animate-me no-scale")
        //- 
        Lottie(
          style="width:800px"
          renderer="canvas"
          :animationData="animation_4"
        )

    figure
      figcaption
        h2.text_x3.mb-3 Депутатские округа
        p.subText Узнавайте, к какому депутатскому округу относится ваш дом, и обращайтесь к своему депутату для решения ваших проблем.
        .BR
        .btn Перейти
      picture
        img(src='~/static/gifs/5.gif' class="animate-me no-scale")
        //- 
          vue-lottie(
            loop
            autoplay
            :data="animation_5"
            :width="800"
          )
</template>

<script>
// import Lottie from 'vue-lottie-web'

//
import vueLottie from '~/components/vue-lottie.vue'
import animation_1 from '~/static/animations/JSON/1.json'
import animation_2 from '~/static/animations/JSON/2.json'
import animation_3 from '~/static/animations/JSON/3.json'
import animation_4 from '~/static/animations/JSON/4.json'
import animation_5 from '~/static/animations/JSON/5.json'

export default {
  components: {
    // Lottie,
    vueLottie
  },
  data() {
    return {
      animation_1,
      animation_2,
      animation_3,
      animation_4,
      animation_5
    }
  },
  mounted() {
    const images = document.querySelectorAll('.animate-me')

    const config = {
      rootMargin: '10px 20px 70px 40px',
      threshold: [0, 0.25, 0.75, 1]
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.75) {
          entry.target.classList.replace('no-scale', 'scale')
        } else {
          entry.target.classList.replace('scale', 'no-scale')
        }
      })
    }, config)

    images.forEach((image) => {
      observer.observe(image)
    })
  }
}
</script>

<style lang="stylus" scoped>

.no-scale
  transform scale(1)
  animation no-scale 0.8s ease-out forwards

@keyframes no-scale
  from
    transform scale(1.1)
  to
    transform scale(1)
.scale
  animation scale 0.8s ease-out forwards

@keyframes scale
  from
    transform scale(1)
  to
    transform scale(1.1)

.ImgGrid
  background #FFF


.H
  font-size 60px
.center
  max-width: 750px;
  margin: 0 auto;


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
  min-width 300px
</style>
