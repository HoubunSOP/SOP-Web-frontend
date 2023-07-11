<template>
  <div class="body">
    <SeoKit />
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  htmlAttrs: {
    lang: 'zh-CN'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    }
  ]
})
</script>