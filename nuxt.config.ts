// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    site: {

    url: 'https://www.fwgxt.top',

    name: '芳文观星台',

    description: '专注于芳文相关内容!',

    defaultLocale: 'zh', // not needed if you have @nuxtjs/i18n installed

    },
  devtools: { enabled: true },
  modules: [
    'nuxt-typed-router',
    '@nuxt/image',
    '@samk-dev/nuxt-vcalendar',
    '@nuxtjs/partytown',
  ],
  css: ['~/assets/css/main.css', '~/assets/css/post.css'],

  plugins: [
    { src: '~/plugins/scroll.client.ts', ssr: false },
    { src: '~/plugins/medium-zoom.client.ts', ssr: false },
    { src: '~/plugins/toast.client.ts', ssr: false },
  ],

  app: {
    //pageTransition: { name: 'page', mode: 'out-in' },
    //layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  runtimeConfig: {
    // Private config that is only available on the server
    apiSecret: '123',
    // Config within public will be also exposed to the client
    public: {
      apiserver:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:8000'
          : 'https://api.fwgxt.top/api',
      //siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',

      siteName: '芳文观星台',

      siteDescription: '专注于芳文相关内容!',

      language: 'zh-CN', // prefer more explicit language codes like `en-AU` over `en`
    },
  },
  extends: ['nuxt-seo-kit'],
  extensions: ['.vue'],
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    // vue-toastification - old commonjs module
    transpile: ['vue-toastification'],
  },
})
