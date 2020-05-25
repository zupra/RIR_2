<template lang="pug">
  section
    h2.H  Базовые модули
    .baseModules.mt-5
      .Card.p-3.bg_1
        .flex.x_sb
          h3 Городские
            br
            | проблемы
          .icon
            img(src="~/static/icon/base-modules/city_problems.svg")
        .mt-3 Собирает обращения жителей по решению городских проблем, будь то залатать яму, отремонтировать детскую площадку, убрать свалку или пожаловаться на незаконную стройку. Отслеживайте все этапы решения обнаруженной проблемы городскими службами
      .Card.p-3.bg_2
          .flex.x_sb
            h3 Полиция
            .icon
              img(src="~/static/icon/base-modules/police.svg")
          .mt-3 Показывает границы полицейских участков и контакты участковых. Узнайте, за каким полицейским участком закреплен ваш дом, и обращайтесь к своему участковому.
      .Card.p-3.bg_3
          .flex.x_sb
            h3 Депутатские
              br
              | округа
            .icon
              img(src="~/static/icon/base-modules/deputy.svg")
          .mt-3 Визуализирует границы депутатских округов с контактами депутатов. Депутаты могут отслеживать, с какими проблемами обращаются жители его округа, и участвовать в их быстром решении
      .Card.p-3.bg_4
          .flex.x_sb
            h3 Учреждения
            .icon
              img(src="~/static/icon/base-modules/institutions.svg")
          .mt-3 Предоставляет информацию обо всех государственных и муниципальных организациях, образовательных и культурных учреждениях: адреса, графики работы, интернет-ресурсы. Все это есть на нашей платформе
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.icon
  background-color: #CDCDCD
.baseModules
  color #FFF
  display grid
  grid-gap 2em
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))
.bg_1
  background linear-gradient(52.38deg, #2D71F7 0%, #72CDFF 96.19%)
  &:hover .icon
    transition all .3s linear
    background-color #6bC3FF
.bg_2
  background linear-gradient(219.74deg, #0266B0 0%, #01468D 85.91%)
  &:hover .icon
    transition all .3s linear
    background-color #0261AB
.bg_3
  background linear-gradient(52.38deg, #54C167 0%, #72CDFF 96.19%)
  &:hover .icon
    transition all .3s linear
    background-color #6ECCEB
.bg_4
  background linear-gradient(52.38deg, #2D71F7 0%, #CE94F8 96.19%)
  &:hover .icon
    transition all .3s linear
    background-color #BB90F8
</style>
