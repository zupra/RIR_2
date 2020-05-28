// const Vue = require('vue')
// const VueScrollTo = require('vue-scrollto')

import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

// Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 700,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
