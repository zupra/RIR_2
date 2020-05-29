<template lang="pug">
section#Form.Form.flex.y_center(:class="city.colorThemeClasses.formColor")
  div.form__cover
    .wrap.flex.x_sb.y_center
      .Form_wrap
          h2 Обратная связь
          p.subText.mb-4 Мы рады новым идеям И предложениям по улучшению сервисов.
            | Чем больше неравнодушных жителей, тем активней будет развиваться
            | наш «Умный город Росатома – Глазов»
          label Имя и фамилия
            input
          .flex.my-3
            label.flex_1 Место работы
              input
            | &emsp; &nbsp;
            label.flex_1 Эл. почта или телефон
              input
          label Комментарий
            textarea
          button.mt-5 Отправить

      .feedbackform__image
        img(src="~/static/img/feedback.png")

</template>

<script>
export default {
  computed: {
    city() {
      return this.$store.getters.GET_CITY;
    }
  }
}
</script>

<style lang="stylus" scoped>
.form__cover
  width 100%
.Form
  color #FFF
  min-height 100vh
  &_wrap
    width 555px
  h2
    font-size: 42px;
    line-height: 50px;
$focus = orange
input, select, textarea, button
  // RESET
  line-height 1
  outline 0
  box-shadow none
  font inherit
  appearance none
  // ADD
  border-radius 5px
  padding .7em 1em
  margin-top .3rem
label, select, button
  cursor pointer
button
  color $blue_l
  font-weight bold
  padding  .7rem 2rem

  border 0


input, textarea, select
  width 100%
  border 1px solid transparent
  // color $color
  &:focus
    border-color $focus

textarea
  min-height 6em
  resize vertical
  overflow auto

label
  display block
  font-weight bold

select
  background #FFF url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='12'><polygon points='0,0 12,0 6,12' fill='gainsboro'/></svg>") right no-repeat
.form-wrap
  widht 100%!important

@media screen and (max-width: 1080px)
  .feedbackform__image
    display none
</style>
