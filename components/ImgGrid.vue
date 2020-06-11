<template lang="pug">
section.ImgGrid
  .wrap
    .BR
    .center.subText
      h2.H Возможности
      p Платформа «Умный город Росатома» —  единая информационная основа для внедрения цифровых городских сервисов. «Умные» технологии повышают эффективность управления городскими процессами, облегчая жизнь и горожанам, и властям, расширяя возможности обратной связи.
      .center
        img(
          src='~/static/ImgGrid/1.svg' alt="Возможности" class="static-main"
        )
        Lottie(
          class="animate-me no-scale"
          :data="animation_1"
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
        source(
          srcset='~/static/ImgGrid/2.webp',
          type='image/webp'
        )
        img(
          src='~/static/ImgGrid/2.png',
          alt='решение городских проблем'
          class="static-section"
        )
      Lottie(
        class="animate-me no-scale"
        :data="animation_2"
        :height="520"
        :width="500"
      )

    figure
      figcaption
        h2.text_x3.mb-3  Учреждения
        p.subText Получайте информацию обо всех государственных и муниципальных организациях, образовательных и культурных учреждениях: адреса, графики работы, интернет-ресурсы. Все это есть на нашей платформе
        .BR
        .btn Перейти
      img(
        src='~/static/ImgGrid/3.svg'
        alt="Учреждения"
        class="static-section"
      )
      Lottie(
        class="animate-me no-scale"
        :data="animation_3"
         :height="500"
         :width="560"
      )

    figure
      figcaption
        h2.text_x3.mb-3 Полиция
        p.subText Узнайте, за каким полицейским участком закреплен ваш дом, и обращайтесь к своему участковому. В системе удобно видеть границы полицейских участков и находить контакты участковых.
        .BR
        .btn Перейти
      picture
        source(
          srcset='~/static/ImgGrid/4.webp',
          type='image/webp'
        )
        img(
          src='~/static/ImgGrid/4.png',
          alt='Полиция'
          class="static-section"
        )
      Lottie(
        class="animate-me no-scale"
        :data="animation_4"
         :height="520"
         :width="500"
      )


    figure
      figcaption
        h2.text_x3.mb-3 Депутатские округа
        p.subText Узнавайте, к какому депутатскому округу относится ваш дом, и обращайтесь к своему депутату для решения ваших проблем.
        .BR
        .btn Перейти
      picture
        source(
          srcset='~/static/ImgGrid/5.webp',
          type='image/webp'
        )
        img(
          src='~/static/ImgGrid/5.png',
          alt='Депутатские округа'
          class="static-section"
        )
      Lottie(
        class="animate-me no-scale"
        :data="animation_5"
        :height="460"
        :width="460"
      )

</template>

<script>
import Lottie from '~/components/Lottie.vue'
//
import animation_1 from '~/static/ImgGrid/animations-JSON/1.json'
import animation_2 from '~/static/ImgGrid/animations-JSON/2.json'
import animation_3 from '~/static/ImgGrid/animations-JSON/3.json'
import animation_4 from '~/static/ImgGrid/animations-JSON/4.json'
import animation_5 from '~/static/ImgGrid/animations-JSON/5.json'

export default {
  components: {
    Lottie
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
      // rootMargin: '10px 20px 70px 40px',
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
  transform scale(.9)
  animation no-scale 0.8s ease-out forwards

@keyframes no-scale
  from
    transform scale(1)
  to
    transform scale(.9)
.scale
  animation scale 0.8s ease-out forwards

@keyframes scale
  from
    transform scale(.9)
  to
    transform scale(1)

.ImgGrid
  background #FFF
  padding-bottom 1em


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
.static-main
  display none
.static-section
  display none
@media screen and (max-width 1200px)
  .static-main
    display block
    width 100%
  .static-section
    display block
    max-width 377px
  .animate-me
    display none
@media screen and (max-width 1024px)
  .H
    font-size 40px
@media screen and (max-width 757px)
  .btn
    margin-top: 40px
  .BR
    display none
  figure:nth-of-type(even)
    flex-direction column-reverse
  figure:nth-of-type(odd)
    flex-direction column-reverse
  figcaption
    margin 0
    min-width 100%
//@media screen and (max-width 576px)
//  .static-main
//    max-width 550px
@media screen and (max-width 375px)
  //.static-main
  //  max-width 300px
  .static-section
    max-width 280px
</style>
