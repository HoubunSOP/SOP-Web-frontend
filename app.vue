<template>
  <div class="body">
    <SeoKit />
    <NuxtLayout>
      <NuxtLoadingIndicator class="!opacity-100 load-rogress" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  htmlAttrs: {
    lang: 'zh-CN',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
    {
      rel: 'stylesheet',
      href: '/font/font-awesome/all.min.css',
    },
    {
      rel: 'stylesheet',
      href: '/font/uchugo/style.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://fastly.jsdelivr.net/npm/@waline/client@2/dist/waline.min.css',
    },
  ],
  script: [
    {
      src: 'https://fastly.jsdelivr.net/npm/@waline/client@2/dist/waline.js',
      type: 'text/javascript',
      body: true,
      defer: true,
    },
  ],
})
</script>
<style scoped>
.load-rogress {
  background-color: #098bf5;
  box-shadow:
    0 0 10px #098bf5,
    0 0 5px #098bf5;
}
</style>
