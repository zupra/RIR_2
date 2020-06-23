<template lang="pug">
.Footer.wrap
  .flex_wr.x_sb
    div
      h3.text_x1.mb_2 При поддержке
      br
      // TODO !!!
      .my-3.flex.y_center
        img(
          :src="require(`~/static/Footer/${city.city}/footer-gerb_${city.city}.png`)"
        )
        img.ml-4(
          v-if="city.footerCityLogo"
          :src="require(`~/static/Footer/${city.city}/footer-city-logo_${city.city}.png`)"
        )
        img.ml-4(
          v-else
          src='~static/Footer/footer_1.svg'
        )
      br
      .flex.y_center
        img.rir-logo(
          v-if="city.footerCityLogo"
          src='~static/Footer/footer_1.svg'
        )
        img(src='~static/Footer/footer_2.svg')
    div.bold

      .text_x2(
        @click="showModal_aboutProject = true"
      ) О проекте
      .text_x2.my-3(
        @click="showModal_userAgreement = true"
      ) Пользовательское
        br
        | соглашение
      .text_x2.mb-3(
        @click="showModal_privacyPolicy = true"
      ) Политика
        br
        |  конфиденциальности


    div
      h2 Поделиться в соцсетях
      .flex.socialsIcon
        ShareNetwork(
          network="vk"
          url="https://news.vuejs.org/issues/180"
          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
          description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
          quote="The hot reload is so fast it\'s near instant. - Evan You"
          hashtags="vuejs,vite"
        )
          .icon.vk
        ShareNetwork(
          network="facebook"
          url="https://news.vuejs.org/issues/180"
          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
          description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
          quote="The hot reload is so fast it\'s near instant. - Evan You"
          hashtags="vuejs,vite"
        )
          .icon.fb
        .icon.yt
        .icon.inst

      .BR
      .btn Сообщить о проблеме



  Modal(:show.sync="showModal_aboutProject", mod="XL")
    TXT_about_project

  Modal(:show.sync="showModal_userAgreement", mod="XL")
    h2(
      slot='title'
      v-text="`Соглашение о пользовании информационными системами и ресурсами города (наименование ${city.city})`"
    ) 
    TXT_user_agreement(
      :cityName="cityName"
    )


  Modal(:show.sync="showModal_privacyPolicy", mod="XL")
    h2(
      slot='title'
    ) Политика конфиденциальности персональных данных
    TXT_privacy_policy(
      :cityName="cityName"
    )


</template>

<script>
import Modal from '~/components/Modal/Modal.vue'
import TXT_about_project from '~/components/Modal/TXT_about_project.vue'
import TXT_user_agreement from '~/components/Modal/TXT_user_agreement.vue'
import TXT_privacy_policy from '~/components/Modal/TXT_privacy_policy.vue'

export default {
  components: {
    Modal,
    TXT_about_project,
    TXT_user_agreement,
    TXT_privacy_policy
  },
  props: {
    cityName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showModal_aboutProject: false,
      showModal_userAgreement: false,
      showModal_privacyPolicy: false
    }
  },
  computed: {
    city() {
      return this.$store.state[this.cityName]
    }
  }
}
</script>

<style lang="stylus">
.Footer
  padding 4em 1em 2em
  color: $header;
.rir-logo
  margin-right: 2em
.socialsIcon
  .icon
    shadow()
    // background-color #FFF
    background-position center
    background-repeat no-repeat
  .vk
    background-image url("~static/Footer/socials/vk base.png")
    &:hover
      background: #01468D url("~static/Footer/socials/vk hover.png") center  no-repeat
  .fb
    background-image url("~static/Footer/socials/fb base.png")
    margin-left: 2em
    &:hover
      background: #3366FF url("~static/Footer/socials/fb hover.png") center  no-repeat
  .yt
    background-image url("~static/Footer/socials/yt base.png")
    margin-left: 2em
    &:hover
      background: #FC0D1B url("~static/Footer/socials/yt hover.png") center  no-repeat
  .inst
    background-image url("~static/Footer/socials/inst base.png")
    margin-left: 2em
    &:hover
      background: url("~static/Footer/socials/inst hover.png") center  no-repeat,
        linear-gradient(211.29deg, #5058CA 19.57%, #D62C78 54.97%, #F5CB6E 89.63%)

@media screen and (max-width 375px)
  .fb, .yt, .inst
    margin-left: 1em!important
  .rir-logo
    margin-right: 0.5em
</style>
