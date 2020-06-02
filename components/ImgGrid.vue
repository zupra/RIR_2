<template lang="pug">
section.ImgGrid

  .wrap
    .BR
    .center.subText
      h2.H Возможности
      p Платформа «Умный город Росатома» —  единая информационная основа для внедрения цифровых городских сервисов. «Умные» технологии повышают эффективность управления городскими процессами, облегчая жизнь и горожанам, и властям, расширяя возможности обратной связи.
        img(src='~/static/gifs/1.gif' class="animate-me no-scale")
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
        img(src='~/static/gifs/2.gif' class="animate-me no-scale")

    figure
      figcaption
        h2.text_x3.mb-3  Учреждения
        p.subText Получайте информацию обо всех государственных и муниципальных организациях, образовательных и культурных учреждениях: адреса, графики работы, интернет-ресурсы. Все это есть на нашей платформе
        .BR
        .btn Перейти
      .picture
        img(src='~/static/gifs/3.gif' class="animate-me no-scale")

    figure
      figcaption
        h2.text_x3.mb-3 Полиция
        p.subText Узнайте, за каким полицейским участком закреплен ваш дом, и обращайтесь к своему участковому. В системе удобно видеть границы полицейских участков и находить контакты участковых.
        .BR
        .btn Перейти
      .picture
        img(src='~/static/gifs/4.gif' class="animate-me no-scale")

    figure
      figcaption
        h2.text_x3.mb-3 Депутатские округа
        p.subText Узнавайте, к какому депутатскому округу относится ваш дом, и обращайтесь к своему депутату для решения ваших проблем.
        .BR
        .btn Перейти
      .picture
        img(src='~/static/gifs/5.gif' class="animate-me no-scale")
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
  mounted() {
    const images = document.querySelectorAll('.animate-me');

    const config = {
      rootMargin: '10px 20px 70px 40px',
      threshold: [0, 0.25, 0.75, 1]
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.75) {
          entry.target.classList.replace('no-scale', 'scale');
        } else {
          entry.target.classList.replace('scale', 'no-scale');
        }
      });
    }, config);

    images.forEach(image => {
      observer.observe(image);
    });
  },
  data() {
    return {
      list: DATA
    }
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
