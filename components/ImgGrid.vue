<template lang="pug">
section.ImgGrid
  figure
    figcaption
      h2.text_x3.mb-3  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      p.subText Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cum voluptate, dolorem sapiente consequuntur molestias ipsa at. Dolores esse laboriosam quibusdam vitae quasi explicabo, voluptatum perspiciatis, dolorum odit eveniet eum.
      .BR
      .btn Перейти
    .picture
      img(src='~/static/gifs/1.gif')


  figure
    figcaption
      h2.text_x3.mb-3  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      p.subText Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cum voluptate, dolorem sapiente consequuntur molestias ipsa at. Dolores esse laboriosam quibusdam vitae quasi explicabo, voluptatum perspiciatis, dolorum odit eveniet eum.
      .BR
      .btn Перейти
    .picture
      img(src='~/static/gifs/2.gif')



  figure
    figcaption
      h2.text_x3.mb-3  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      p.subText Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cum voluptate, dolorem sapiente consequuntur molestias ipsa at. Dolores esse laboriosam quibusdam vitae quasi explicabo, voluptatum perspiciatis, dolorum odit eveniet eum.
      .BR
      .btn Перейти
    .picture
      img(src='~/static/gifs/1.gif')


  figure
    figcaption
      h2.text_x3.mb-3  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      p.subText Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cum voluptate, dolorem sapiente consequuntur molestias ipsa at. Dolores esse laboriosam quibusdam vitae quasi explicabo, voluptatum perspiciatis, dolorum odit eveniet eum.
      .BR
      .btn Перейти
    .picture
      img(src='~/static/gifs/2.gif')





  figure
    figcaption
      h2.text_x3.mb-3  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      p.subText Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cum voluptate, dolorem sapiente consequuntur molestias ipsa at. Dolores esse laboriosam quibusdam vitae quasi explicabo, voluptatum perspiciatis, dolorum odit eveniet eum.
      .BR
      .btn Перейти
    .picture
      img(src='~/static/gifs/1.gif')


  figure
    figcaption
      h2.text_x3.mb-3  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      p.subText Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cum voluptate, dolorem sapiente consequuntur molestias ipsa at. Dolores esse laboriosam quibusdam vitae quasi explicabo, voluptatum perspiciatis, dolorum odit eveniet eum.
      .BR
      .btn Перейти
    .picture
      img(src='~/static/gifs/2.gif')


</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
// .ImgGrid


.picture
  // circle(300px)
  // background #CCC

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
