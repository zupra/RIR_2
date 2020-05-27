export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: '~assets/main.styl', lang: 'stylus' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: './plugins/vue-awesome-swiper.js', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    stylus: ['./assets/vars.styl']
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://github.com/nicolasbeauvais/vue-social-sharing
    'vue-social-sharing/nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  /*
   ** Router configuration
   */

  /*
  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop + window.innerHeight,
          behavior: 'smooth'
        })
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  */
  // https://www.npmjs.com/package/vue-scrollto
  // https://vue-scrollto.netlify.app/docs/#nuxt-js

  // https://www.npmjs.com/package/vue2-smooth-scroll

  // https://toor.co/blog/nuxtjs-smooth-scrolling-with-hash-links/
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 100)
          })
        )
      }

      if (to.hash) {
        const el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      // location.href = location.origin

      return { x: 0, y: 0 }
    }
  }
}
