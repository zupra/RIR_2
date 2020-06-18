<template lang="pug">
section.ImgGrid
  .wrap
    .BR
    .center.subText
      h2.H Возможности
      p Платформа «Умный город Росатома» —  единая информационная основа для внедрения цифровых городских сервисов. «Умные» технологии повышают эффективность управления городскими процессами, облегчая жизнь и горожанам, и властям, расширяя возможности обратной связи.
      .center

        img.static-main.animate-me.no-scale(
          src='~/static/ImgGrid/1.svg'
          alt="Возможности"
          loading="lazy"
        )
        Lottie(
          class="animate-me static-main-animation no-scale"
          :data="animation_1"
          :height="506"
        )
      h2.H Базовые модули
      p Базовая платформа «Умный город» —  единая информационная основа для внедрения цифровых городских сервисов. Базовая версия включает в себя: модули решения городских проблем онлайн, учреждения, полиция и депутатские округа
    figure
      figcaption.figcaption
        h2.text_x3.mb-3 Решение городских
          br
          | проблем онлайн
        p.subText Оставляйте заявки по решению городских проблем: залатать яму, отремонтировать детскую площадку, убрать свалку или пожаловаться на незаконную стройку. Отслеживайте статус обращений онлайн.
        .BR
        .btn Перейти
      picture(loading="lazy")
        source(
          srcset='~/static/ImgGrid/2.webp',
          loading="lazy"
          type='image/webp'
        )
        img(
          src='~/static/ImgGrid/2.png',
          alt='решение городских проблем'
          loading="lazy"
          class="static-section animate-me no-scale"
        )

    figure
      figcaption.figcaption
        h2.text_x3.mb-3.img-grid-figure-title  Учреждения
        p.subText Получайте информацию обо всех государственных и муниципальных организациях, образовательных и культурных учреждениях: адреса, графики работы, интернет-ресурсы. Все это есть на нашей платформе
        .BR
        .btn Перейти
      picture
        img(
          src='~/static/ImgGrid/3.svg'
          alt="Учреждения"
          loading="lazy"
          class="static-section animate-me no-scale"
        )

    figure
      figcaption.figcaption
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
          loading="lazy"
          class="static-section animate-me no-scale"
        )

    figure
      figcaption.figcaption
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
          loading="lazy"
          class="static-section animate-me no-scale"
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
.figcaption
  max-width: 400px;
.static-main
  display none
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
  justify-content space-evenly //center
  align-items center
figure:nth-of-type(even)
  flex-direction row
figure:nth-of-type(odd)
  flex-direction row-reverse

figcaption
  margin 1em

img
  width 100%
  display inline-block

.btn
  padding 1em 4em

.static-section
  max-width 452px
@media screen and (max-width 1024px)
  .H
    font-size 40px
@media screen and (max-width 900px)
  .static-main-animation
    display none
  .static-main
    display block
    width 100%
  .static-section
    display block
    max-width 377px
@media screen and (max-width 757px)
  .ImgGrid
    padding-top: 40px
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
@media screen and (max-width 375px)
  .img-grid-figure-title
    margin-bottom: 12px
  .btn
    width 100%
    text-align center
    margin-top: 12px
  .static-section
    max-width 280px
  .H
    font-size: 30px
    line-height: 36px
    margin-bottom: 12px
</style>
