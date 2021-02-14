export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'myTODO',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: ''
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          
          register: { url: 'http://api.uatdrive.com:1010/users/signup', method: 'post', propertyName: 'token' },
          login: { url: 'http://api.uatdrive.com:1010/users/login', method: 'post' },
          user: { url: 'http://api.uatdrive.com:1010/todos', method: 'get', propertyName: 'data' },
          create: { url: 'http://api.uatdrive.com:1010/todos', method: 'post' },
        }
      }
    }
  }

}
