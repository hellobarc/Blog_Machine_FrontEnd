export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  head: {
    title: 'Blog Site',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto'}
    ],
    css: [
      '~/assets/css/style_light.css'
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/customstyle.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/bootstrap-vue',
    '@/plugins/caraousel_slider',
    { src: '~/plugins/vue-scroll-indicator', ssr: false },
//    { src: '~/plugins/tinymce', ssr: false, mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth-next'
  ],
  axios: {
    baseURL: process.env.URL, // Used as fallback if no runtime config is provided
    proxy: true,
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.URL
    }
  },
  proxy: {
    '/laravel': {
      target: '/',
      pathRewrite: { '^/laravel': '/' }
    }
  },
  auth: {
    strategies: {
      'laravelJWT': {
        provider: 'laravel/jwt',
        url: 'api/v1/auth/',
        endpoints: {
          login: { url: 'login', method: 'post' },
          logout: { url: 'logout', method: 'post' },
          user: { url: 'user', method: 'get' }
        },
        token: {
          property: 'access_token',
          maxAge: 60 * 60
        },
        refreshToken: {
          maxAge: 20160 * 60
        },
      },
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
