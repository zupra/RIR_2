<template lang="pug">
section
  h2.H.text_x5.mb-3 Новости проекта

  client-only
    swiper(
      :options="swiperOption"
    )
      swiper-slide(
        v-for="_,idx in Array(12)"
        :key="idx"
      )

        img(
          :src="`https://picsum.photos/id/${idx+10}/280/160`"
        )
        .date 30 июл. 2020  
        p.mt-2 Приглашаем Вас поделиться мнением и принять участие в «Опросе о работе общественного транспорта в Нижегородской области» …

      .swiper-pagination(
        slot="pagination"
      )


</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        // slidesPerView: 4,
        // spaceBetween: 80,
        // effect: 'fade',

        //
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 50
          },
          820: {
            slidesPerView: 3,
            spaceBetween: 50
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 50
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



.swiper
  &-container
    padding-bottom: 4em;
  &-pagination-bullets
    width: auto //!important


.date
  &:before
    content: '';
    display: inline-block;
    margin-right: .5em;
    width: 1em;
    height: 1em;
    background: url('~static/icon/date.png') no-repeat center;
</style>
