<template>
  <div class="relative flex flex-col md:flex-row md:justify-between mx-auto w-6/6 lg:w-5/6 xl:w-4/6 gap-10 top-8">
    <div class="w-full md:w-4/5 bg-white bg-opacity-75 rounded-lg p-4">
      <IndexTopswiper />
      <IndexMangaswiper />
      <IndexPostlist />
    </div>
    <div class="w-full md:w-2/5 bg-white bg-opacity-75 rounded-lg mt-4 md:mt-0 p-4">
      <h1>侧边栏</h1>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: '芳文观星台',
  description: '专注于芳文相关内容!',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '专注于芳文相关内容!',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})


</script>

<style></style>