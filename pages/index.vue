<template lang="pug">
.Page
  Intro2
  // Intro

  // Картиночки
  ImgGrid

  .wrap
    // Дополнительные модули
    AdditionalModules
    .BR
    // Новости
    News
    .BR
  // Форма обратной связи
  Form
  // Подвал
  Footer
</template>

<script>
//

import ImgGrid from '~/components/ImgGrid.vue'
import Intro from '~/components/Intro.vue'
import Intro2 from '~/components/Intro2.vue'
import Form from '~/components/Form.vue'
import Footer from '~/components/Footer.vue'
import AdditionalModules from '~/components/AdditionalModules.vue'
import News from '~/components/News.vue'

export default {
  components: {
    Intro2,
    Intro,
    ImgGrid,
    Form,
    Footer,
    AdditionalModules,
    News
  }
}
</script>

<style lang="stylus">



.subIntro
  line-height 1
  h2
    font-size 80px
  .num
    font-size 160px
    color: #1A3670;
    font-weight 800
  .num_bg
    background url("~static/icon/group.png") no-repeat 160px center
h2
  margin-bottom .7em
.BR
  height 4rem


.Card
  shadow()
  border-radius 5px
  transition 0.3s
  background #FFF
  &:hover
    transform: translate(0, -6px);
</style>
