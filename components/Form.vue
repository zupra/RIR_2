<template lang="pug">

#Form.Form.flex
  .Form_wrap
    h2.center Присоединиться 
      br
      | к проекту «Умные города 
      br
      | Росатома»

    p.subText.center.mb-4 Мы рады новым партнерам. Наша платформа позволяет интегрировать ваши готовые цифровые решения. Хотите участвовать — напишите нам.  

    label Имя и фамилия
      input


    .flex.my-2
      label.flex_1 Ваш город
        input
      | &emsp; &nbsp;
      label.flex_1 Эл. почта или телефон
        input

    label Комментарий
      textarea

    button.mt-3 Отправить

</template>

<script>
export default {}
</script>

<style lang="stylus">

.Form
  // background: #13264D url("~static/img/bg_footer.png") no-repeat center/cover;
  color #FFF
  min-height 100vh
  padding 2em 0
  &_wrap
    width 555px
    margin auto


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
</style>
