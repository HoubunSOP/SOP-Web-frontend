<template>
  <mainpage>
    <maincolumn>
      <IndexTopswiper />
      <IndexMangaswiper />
      <IndexPostlist />
    </maincolumn>
    <Sidebar>
      <h1>侧边栏</h1>
    </Sidebar>
  </mainpage>
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