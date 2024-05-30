// eslint-disable-next-line camelcase
const { SITE_KEY } = process.env
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  targer: 'server',
  serverMiddleware: {
    '/api': `~/api`,
  },
  server:{
    port: 3001,
  },
  eslint: {
    fix: true,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    link: [
      {
        rel: 'preload',
        href: `/fonts/MyriadPro-Bold.woff`,
        type: 'font/woff',
        as: 'font',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: `/fonts/MyriadPro-Light.woff`,
        type: 'font/woff',
        as: 'font',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: `/fonts/MyriadPro-Regular.woff`,
        type: 'font/woff',
        as: 'font',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        href: `/fonts/MyriadPro-Semibold.woff`,
        type: 'font/woff',
        as: 'font',
        crossorigin: 'anonymous',
      },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
    title: ' ',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: "yandex-verification", content: "e853e633f92526f0" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'krasula' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
  },
  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 'first',
    viewer: true,
    cssPath: '~/assets/css/tailwind.css',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./swiper/swiper-bundle.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/swiper-slider.js', mode: 'client' },
    { src: '~/plugins/v-mask.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-logger',
    '@nuxtjs/recaptcha',
    '@nuxtjs/gtm',
  ],
  recaptcha: {
    hideBadge: true,
    siteKey: SITE_KEY || '123',
    version: 2,
    size: 'invisible',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
