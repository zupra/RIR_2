<template lang="pug">
div#CityServices
  h2.H.text_x4 Дополнительные модули
  p.subText.mb-4 Платформа «Умный город Росатома» позволяет объединить все муниципальные сервисы.
    | Поключайте дополнительные модули или интегрируйте ваши готовые решения с возможностью их
    | адаптации на платформе.
  .additionalModules
    .Card.p-4(
      :class="`bg_${item.id}`"
      v-for="item in modules"
      :key="item.id"
    )
      .flex.x_sb
        h3.H {{ item.title }}
        .icon
          component(
            :is="`Picture${item.id}`"
          )
      .flex.Tag-container
        .Tag(
          v-if="item.audience.locals"
        ) Жителям
        .ml-2.Tag.green(
          v-if="item.audience.tourists"
        ) Туристам
        .ml-2.Tag.purple(
          v-if="item.audience.businessmens"
        ) Предпринимателям
      p.my-3 {{ item.description }}
</template>

<script>
import Picture1 from './Picture1'
import Picture2 from './Picture2'
import Picture3 from './Picture3'
import Picture4 from './Picture4'
import Picture5 from './Picture5'
import Picture6 from './Picture6'
export default {
  components: { Picture6, Picture5, Picture4, Picture3, Picture2, Picture1 },
  data() {
    return {
      modules: [
        {
          id: 1,
          title: 'Общественный транспорт',
          audience: {
            locals: true,
            tourists: true,
            businessmens: false
          },
          description:
            'Узнавайте, когда приедет нужный автобус в режиме реального времени. Планируйте свои поездки по городу'
        },
        {
          id: 2,
          title: 'Уборка улиц',
          audience: {
            locals: true,
            tourists: true,
            businessmens: false
          },
          description:
            'Узнайте заранее график уборки улиц, выбирайте маршрут объезда и удобное место парковки, чтобы не помешать спецтехнике.'
        },
        {
          id: 3,
          title: 'Оплата услуг',
          audience: {
            locals: true,
            tourists: false,
            businessmens: false
          },
          description:
            'Оплачивайте спортивные абонементы, школьное питание и другие городские услуги в одном месте.'
        },
        {
          id: 4,
          title: 'Достопримечательности',
          audience: {
            locals: true,
            tourists: true,
            businessmens: false
          },
          description:
            'Достопримечательности, туристические места, культурные объекты и график их работы. Планируйте свой досуг.'
        },
        {
          id: 5,
          title: 'Поликлиники и больницы',
          audience: {
            locals: true,
            tourists: false,
            businessmens: false
          },
          description:
            'Найдите ближайшую клинику, узнайте график её работы и запишитесь на приём, не выходя из дома.'
        },
        {
          id: 6,
          title: 'Площади в аренду',
          audience: {
            locals: true,
            tourists: false,
            businessmens: true
          },
          description:
            'Поможет предпринимателям узнать, где в городе выгодно арендовать подходящее помещение.'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

$green = #0AC06D;
$purple = #CE94F8;


.subText
  max-width 750px

.Tag
  font-size 14px
  color: #FFF;
  border-radius: 5px;
  font-weight: 800;
  display: inline-block;

  background: $blue_l;
  padding .3em .7em
  margin-bottom 1em

  &.green
    background $green

  &.purple
    background $purple


.additionalModules
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr) ) ;

.icon
  background #F7F7F7
@media screen and (max-width 768px)
  .H
    font-size: 16px
    line-height: 22px
    align-self center
  .Tag-container
    margin-top: 5px
@media screen and (max-width 375px)
  .subText
    font-size: 16px
    line-height: 22px
  .additionalModules
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))
  .Tag-container
    margin-top: 10px
  .Card
    padding 1em
</style>
