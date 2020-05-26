<template lang="pug">
section
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

        //- :src="`https://picsum.photos/id/${idx+10}/280/160`"
        img(
          src="https://via.placeholder.com/360x170"
        )
        .date.my-2 {{It.date}}
        p.OVERFLOW {{It.text}}

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
const DATA = [
  {
    id: 1,
    title: 'Росатом передает «Умный город» 10 атомградам',
    text:
      'Администрации 10 «атомных» городов безвозмездно получат цифровой программный комплекс «Умный город Росатома» от АО «Русатом Инфраструктурные решения» – отраслевого интегратора по цифровизации городской среды. В этот список вошли Железногорск (Красноярский край), Заречный (Пензенская область), Глазов (Удмуртская республика), Северск (Томская область), Новоуральск, Лесной, Заречный (Свердловская область), Озерск, Снежинск, Трехгорный (Челябинская область).',
    date: '07.04.2020',
    link: ''
  },
  {
    id: 2,
    title:
      'Росатом организует хакатон для создания цифровых сервисов в атомных городах',
    text:
      '18 мая стартовал сбор заявок на участие в онлайн-хакатоне «Цифровой форсаж атомных городов». Мероприятие проводит компания «Русатом Инфраструктурные решения» – интегратор решений Госкорпорации «Росатом» по направлению «Умный город» при поддержке Минстроя России, Инновационного центра «Сколково», Ассоциации ЗАТО атомной промышленности, а также компании «Аффинум». ',
    date: '19.05.2020',
    link: ''
  },
  {
    id: 3,
    title:
      '«Русатом Инфраструктурные решения» займется цифровой трансформацией Южно-Сахалинска',
    text:
      'Администрация Южно-Сахалинска по результатам конкурса подписала с компанией «Русатом Инфраструктурные решения» («РИР», входит в Госкорпорацию «Росатом») договор на оказание услуг по комплексной подготовке муниципалитета к цифровой трансформации. При этом предполагается опираться на процессный подход, связанный с созданием, развитием и оптимизацией информационной системы управления муниципалитетом, выстроенной на основе универсальной интеграционной платформы обмена данными. ',
    date: '18.05.2020',
    link: ''
  }
]

export default {
  data() {
    return {
      newsList: DATA,
      swiperOption: {
        // slidesPerView: 4,
        // spaceBetween: 80,
        // effect: 'fade',

        //
        loop: true,
        autoplay: {
          delay: 2500
          // disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
          // dynamicBullets: true
        },

        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 50
          },
          820: {
            slidesPerView: 2,
            spaceBetween: 50
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          }
          // 320: {
          //   slidesPerView: 1,
          //   spaceBetween: 10
          // }
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>


.OVERFLOW
  height 136px
  overflow hidden


.swiper
  &-container
    padding-bottom: 4em;
  &-button-next, &-button-prev
    // position: absolute;
    outline 0
    bottom: 0
    top auto
   &-button-prev
     left 3em
   &-button-next
     right 3em

.date
  &:before
    content: '';
    display: inline-block;
    margin-right: .5em;
    width: 1em;
    height: 1em;
    background: url('~static/icon/date.png') no-repeat center;
</style>
