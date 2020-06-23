<template lang="pug">
section#News
  h2.H.text_x5.mb-3 Новости проекта

  client-only
    swiper(
      ref="mySwiper"
      :options="swiperOption"
    )
      swiper-slide(
        v-for="It in newsList"
        :key="It.id"
      )


        img(
          :src="It.img"
        )
        .date.my-2 {{It.date}}

        .grid
          .H.TITLE {{It.title}}
          v-clamp(
            :autoresize="true"
            :max-lines="6"
            max-height="6em"
          ) {{It.text}}

      .swiper-pagination(
        slot="pagination"
      )

      .swiper-button-prev(
          slot="button-prev"
        )
      .swiper-button-next(
        slot="button-next"
      )


</template>

<script>
// TODO какого глобально не работает
import VClamp from 'vue-clamp'

const DATA = [
  {
    id: 1,
    title: 'Росатом передает «Умный город» 10 атомградам',
    text:
      'Администрации 10 «атомных» городов безвозмездно получат цифровой программный комплекс «Умный город Росатома» от АО «Русатом Инфраструктурные решения» – отраслевого интегратора по цифровизации городской среды. В этот список вошли Железногорск (Красноярский край), Заречный (Пензенская область), Глазов (Удмуртская республика), Северск (Томская область), Новоуральск, Лесной, Заречный (Свердловская область), Озерск, Снежинск, Трехгорный (Челябинская область).',
    date: '07.04.2020',
    link: '',
    img: 'https://picsum.photos/id/214/360/170'
  },
  {
    id: 2,
    title:
      'Росатом организует хакатон для создания цифровых сервисов в атомных городах',
    text:
      '18 мая стартовал сбор заявок на участие в онлайн-хакатоне «Цифровой форсаж атомных городов». Мероприятие проводит компания «Русатом Инфраструктурные решения» – интегратор решений Госкорпорации «Росатом» по направлению «Умный город» при поддержке Минстроя России, Инновационного центра «Сколково», Ассоциации ЗАТО атомной промышленности, а также компании «Аффинум». ',
    date: '19.05.2020',
    link: '',
    img: 'https://picsum.photos/id/192/360/170'
  },
  {
    id: 3,
    title:
      '«Русатом Инфраструктурные решения» займется цифровой трансформацией Южно-Сахалинска',
    text:
      'Администрация Южно-Сахалинска по результатам конкурса подписала с компанией «Русатом Инфраструктурные решения» («РИР», входит в Госкорпорацию «Росатом») договор на оказание услуг по комплексной подготовке муниципалитета к цифровой трансформации. При этом предполагается опираться на процессный подход, связанный с созданием, развитием и оптимизацией информационной системы управления муниципалитетом, выстроенной на основе универсальной интеграционной платформы обмена данными. ',
    date: '18.05.2020',
    link: '',
    img: 'https://picsum.photos/id/162/360/170'
  },
  {
    id: 4,
    title: 'Цифровые сервисы Росатома помогут развитию Томской области',
    text:
      'Ожидаемые результаты работы платформы – ускорение технологического развития и цифровой трансформации области, развитие предпринимательства и новых направлений бизнеса, вовлечение жителей в решение вопросов улучшения городской среды, повышение инвестиционной привлекательности региона, развитие внутреннего туризма. ',
    date: '24.03.2020',
    link: '',
    img: 'https://picsum.photos/id/348/360/170'
  }
]

export default {
  components: {
    VClamp
  },
  data() {
    return {
      newsList: DATA,
      swiperOption: {
        loop: true,
        // autoplay: {
        //   delay: 2500
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 60
          },
          820: {
            slidesPerView: 2,
            spaceBetween: 50
          },
          760: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          375: {
            slidesPerView: 1
          }
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>



.grid
  display: grid;
  // grid-gap: 10px;
  // grid-template-columns: 1fr 1fr;
  grid-template-rows: 3.2em 6em;


.TITLE
  line-height 1


.swiper
  &-container
    padding-bottom: 4em;



  // &-button-next, &-button-prev
  //   // position: absolute;
  //   outline 0
  //   bottom: 0
  //   top auto
  //  &-button-prev
  //    left 3em
  //  &-button-next
  //    right 3em


  &-button-next, &-button-prev
    outline 0
    top 1em;
    height 180px
    width 100px
    cursor none
    &:hover
      &:after
        box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px rgba(0,0,0,.14), 0 1px 14px rgba(0,0,0,.12);
    &:after
      cursor pointer
      content: '';
      circle(50px);
      background #FFF
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18), 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);

  &-button-prev
    left 0
    background: linear-gradient(90deg, rgba(#FFF, 0.5) 0%, rgba(#FFF, 0.0001) 99%);
    &:after
      background: #FFF url('~static/News/L.png') no-repeat center;
  &-button-next
    right: 0
    background: linear-gradient(90deg, rgba(#FFF, 0.0001) 0%, rgba(#FFF, 0.5) 99%);
    &:after
      background: #FFF url('~static/News/R.png') no-repeat center;


.date
  &:before
    content: '';
    display: inline-block;
    margin-right: .5em;
    width: 1em;
    height: 1em;
    background: url('~static/News/date.png') no-repeat center;
@media screen and (max-width 760px)
  .swiper-slide
    max-width 457px!important
  h2.H
    font-size: 42px
    line-height: 50px
@media screen and (max-width 375px)
  .swiper-slide
    img
      max-width 320px!important
  .swiper-button-prev, .swiper-button-next
    display none
</style>
