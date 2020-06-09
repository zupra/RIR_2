<template lang="pug">
footer.Intro__footer(:class="city.colorThemeClasses.footer")
  .wrap.flex.y_center.x_sb
    img(:src="require(`~/static/img/intro/${city.city}/messenger_${city.city}.gif`)")
    .flex
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
        p.achievment-title Организаций и учереждений
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
        p.achievment-title Категорий обращений
</template>

<script>
import AnimatedNumber from 'animated-number-vue'
    export default {
        name: "IntroFooter",
      data() {
          return {
            val_1: 1,
            val_2: 1,
            val_3: 1,
          }
      },
      components: {
        AnimatedNumber
      },
      props: {
        cityName: {
          type: String,
          required: true
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
  max-width 250px
.achievment-number
  font-weight 800
  font-size 60px
  line-height 74px
  margin-bottom 0
.achievment-title
  font-weight bold
  font-size 20px
  line-height 24px
</style>
