<template lang="pug">
section.ImgGrid
  figure(
    v-for="_,idx in Array(6)"
    :key="idx"
  )
    figcaption
      h3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cum voluptate, dolorem sapiente consequuntur molestias ipsa at. Dolores esse laboriosam quibusdam vitae quasi explicabo, voluptatum perspiciatis, dolorum odit eveniet eum.
    .picture


</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
// .ImgGrid


.picture
  circle(300px)
  background #CCC

figure
  margin 4vh 0
  display flex
  flex-wrap wrap
  justify-content center
  align-items center

  @media (min-width: 600px)
    &:nth-of-type(even)
      flex-direction row-reverse


figcaption
  //align-self center
  margin 1em
  flex 1
  min-width 200px
</style>
