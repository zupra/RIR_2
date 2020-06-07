<template lang="pug">
.Page
  Intro(
    :cityName="$route.params.city"
  )

  // Картиночки
  FKNLottie(data="https://assets2.lottiefiles.com/datafiles/WFKIUGAVvLl1azi/data.json")
  ImgGrid
  .wrap
    // Дополнительные модули
    AdditionalModules
    .BR
    // Новости
    News
    .BR
    // Форма обратной связи
  Form(
    :cityName="$route.params.city"
  )
  Footer(v-prlx="{ preserveInitialPosition: false, limit: { min: -600, max: 200 }}"
    :cityName="$route.params.city"
  )
</template>

<script>
import Intro from '~/components/Intro.vue'
//
import ImgGrid from '~/components/ImgGrid.vue'
import AdditionalModules from '~/components/AdditionalModules.vue'
import News from '~/components/News.vue'
import Form from '~/components/Form.vue'
import Footer from '~/components/Footer.vue'
import FKNLottie from "../components/FKNLottie";

export default {
  validate({ store, params }) {
    return Object.keys(store.state).some((city) => city === params.city)
  },
  components: {
    FKNLottie,
    Intro,
    ImgGrid,
    Form,
    Footer,
    AdditionalModules,
    News
  },
  asyncData({ params }) {
    // console.log(params)
    return params
  }
}
</script>

<style lang="stylus">

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
