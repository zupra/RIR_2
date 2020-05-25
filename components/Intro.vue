<template lang="pug">
.Intro
  .wrap.Grid


</template>

<style lang="stylus" scoped>



.Intro
  // background: #13264D url("~static/img/bg_footer.png") no-repeat center/cover;

  // min-height 100vh

  background: linear-gradient(156.35deg, #107B9E 0%, #1A9FB5 46.21%, #3EC180 100%);
  color #FFF
  padding 1em

  a
    color #FFF
    text-decoration none

.Grid
  min-height 100vh
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 160px 1fr;


h1
  font-size 60px

ol
  counter-reset: counter_li;

li
  height 5em
  font-weight bold
  font-size 1.2em


  list-style none
  padding-left 108px
  position relative


  &:before
    position absolute
    left 8px
    // content ''
    color $blue_l
    counter-increment: counter_li;
    content: "0" counter(counter_li);
    font-weight 800
    font-size 1.4rem

    circle(3em)
    line-height 3em
    text-align center

    background #FFF
</style>
