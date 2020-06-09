<template lang="pug">
.Page
  //Header(
  //  :cityName="city"
  //)
  //Intro(
  //  :cityName="city"
  //)
  // Картиночки
  //ImgGrid
  .wrap
    // Дополнительные модули
    AdditionalModules
    .BR
    // Новости
    //News
    .BR
    // Форма обратной связи
  //Form(
  //  :cityName="$route.params.city"
  //)
  //Footer(
  //  :cityName="$route.params.city"
  //  v-prlx="{ preserveInitialPosition: false, limit: { min: -600, max: 200 }}"
  //)
</template>

<script>
import Intro from '~/components/Intro.vue'
import ImgGrid from '~/components/ImgGrid.vue'
import AdditionalModules from '~/components/AdditionalModules'
import News from '~/components/News.vue'
import Form from '~/components/Form.vue'
import Footer from '~/components/Footer.vue'
// -
import Bodymovin from '~/components/Bodymovin'
import Header from "../components/Header";

export default {
  validate({ store, params }) {
    return Object.keys(store.state).some((city) => city === params.city)
  },
  components: {
    Header,
    Bodymovin,
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
  }
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
  transition 0.3s
  background #FFF
  &:hover
    transform: translate(0, -6px);
</style>
