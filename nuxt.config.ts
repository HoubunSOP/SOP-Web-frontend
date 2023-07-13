// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-typed-router'],
  css: ['~/assets/css/main.css'],
  
  runtimeConfig: {
    // Private config that is only available on the server
    apiSecret: '123',
    // Config within public will be also exposed to the client
    public: {
      apiserver: 'http://192.168.21.128:8000',
      //siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',

      siteName: '芳文观星台',

      siteDescription: 'Welcome to my awesome site!',

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
})
