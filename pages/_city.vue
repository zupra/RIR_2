<template lang="pug">
.Page
  Header(
    :cityName="city"
  )
  Intro(
    :cityName="city"
  )

  // Картиночки
  ImgGrid
  .wrap
    // Дополнительные модули
    .BR
    AdditionalModules
    .BR
    // Новости
    News
    .BR
  // Форма обратной связи
  Form(
    :cityName="$route.params.city"
    v-prlx="{ reverse: true}"
  )
  //- v-prlx="{ fromBottom: true, speed: 0.2}"
  Footer(
    :cityName="$route.params.city"
  )
  .BR
  .BR
  //- .BR
  //- .BR
</template>

<script>
import Header from '../components/Header'
import Intro from '~/components/Intro'
import ImgGrid from '~/components/ImgGrid.vue'
import AdditionalModules from '~/components/AdditionalModules'
import News from '~/components/News.vue'
import Form from '~/components/Form.vue'
import Footer from '~/components/Footer.vue'
// -

export default {
  validate({ store, params }) {
    return Object.keys(store.state).some((city) => city === params.city)
  },
  components: {
    Header,
    //
    Intro,
    ImgGrid,
    Form,
    Footer,
    AdditionalModules,
    News
  },
  asyncData({ params }) {
    return params
  },
  methods: {}
}
</script>

<style lang="stylus">
.Page
  position: relative;
h2
  margin-bottom .7em
.BR
  height 4rem

.Card
  shadow()
  border-radius 5px
  background #FFF
  transition transform 0.3s
  &:hover
    // transform: translate(0, -6px);
    transform: scale(1.06);
</style>
