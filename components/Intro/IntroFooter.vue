<template lang="pug">
footer.Intro__footer(:class="city.colorThemeClasses.footer")
  .wrap.flex.y_center.x_sb
    Lottie.messenger(
      :data="require(`~/static/Intro/${city.city}/messenger_${city.city}.json`)"
      :width="320"
    )
    picture
      source(
        :srcset="require(`~/static/Intro/${city.city}/messenger_${city.city}.webp`)"
        type='image/webp'
      )
      img.messenger-adaptive(
        :srcset="require(`~/static/Intro/${city.city}/messenger_${city.city}.png`)"
      )
    .flex.achievment
      .Intro__footer-achievment
        //- h2.achievment-number {{ city.howManyUsers }}
        animated-number.achievment-number(
          v-observe-visibility="{callback:cb_howManyUsers, intersection:{threshold:0.7,}}"
          :value="val_1"
          :duration="2500"
          :round="1"
        )
        p.achievment-title Зарегистрированных пользователей
      .Intro__footer-achievment
        //- h2.achievment-number {{ city.howManyCompanies }}
        animated-number.achievment-number(
          v-observe-visibility="{callback:cb_howManyCompanies, intersection:{threshold:0.7,}}"
          :value="val_2"
          :duration="3000"
          :delay="1000"
          :round="1"
        )
        p.achievment-title Организаций
        p.achievment-title и учереждений
      .Intro__footer-achievment
        //- h2.achievment-number {{ city.howManyCategories }}
        animated-number.achievment-number(
          v-observe-visibility="{callback:cb_howManyCategories, intersection:{threshold:0.7,}}"
          :value="val_3"
          :duration="3000"
          :delay="2000"
          :round="1"
          easing="easeOutCirc"
        )
        p.achievment-title Категорий
        p.achievment-title обращений
</template>

<script>
import AnimatedNumber from 'animated-number-vue'
import Lottie from '~/components/Lottie.vue'
export default {
  name: 'IntroFooter',
  components: {
    AnimatedNumber,
    Lottie
  },
  props: {
    cityName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      val_1: 1,
      val_2: 1,
      val_3: 1
    }
  },
  computed: {
    city() {
      return this.$store.state[this.cityName]
    }
  },
  methods: {
    cb_howManyUsers(isVisible, entry) {
      this.val_1 = this.city.howManyUsers
      if (!entry.isIntersecting) this.val_1 = 1
    },
    cb_howManyCompanies(isVisible, entry) {
      this.val_2 = this.city.howManyCompanies
      if (!entry.isIntersecting) this.val_2 = 1
    },
    cb_howManyCategories(isVisible, entry) {
      this.val_3 = this.city.howManyCategories
      if (!entry.isIntersecting) this.val_3 = 1
    }
  }
}
</script>

<style lang="stylus" scoped>
.Intro__footer
  padding 23px 0 14px 0
.Intro__footer-achievment
  width 250px
.achievment-number
  font-weight 800
  font-size 60px
  line-height 74px
  margin-bottom 0
.achievment-title
  font-weight bold
  font-size 20px
  line-height 24px
.messenger
  width 320px
.messenger-adaptive
  display none
@media screen and (max-width: 1200px)
  .achievment-number
    font-size: 50px
@media screen and (max-width: 1100px)
  .messenger
    width 293px
  .Intro__footer-achievment
    width 200px
  .achievment-title
    font-size: 16px
@media screen and (max-width: 1000px)
  .messenger
    width 220px
    margin-right: 20px
@media screen and (max-width: 900px)
  .messenger
    display none
  .messenger-adaptive
    display block
    width 220px
@media screen and (max-width: 860px)
  .Intro__footer-achievment
    width 170px
@media screen and (max-width: 768px)
  .Intro__footer
    overflow-x scroll
  .messenger-adaptive
    width 152px
    margin-right: 31px
  .achievment
    flex 1
    justify-content space-between
  .Intro__footer-achievment
    width 153px
  .achievment-number
    font-size: 40px;
    line-height: 49px;
  .achievment-title
    font-size: 14px
    line-height: 17px
@media screen and (max-width 680px)
  .messenger-adaptive
    display none
</style>
