<template>
  <testload v-if="loading" :loadnum="num" :willclose="willclose" />
  <div class="body">
    <SeoKit />
    <NuxtLayout>
      <NuxtLoadingIndicator class="!opacity-100 load-rogress" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const num = ref(0)
const loading = ref(true)
const isMounted = ref(false)
const willclose = ref(false)

const increaseNum = () => {
  if (num.value < 99) {
    if (isMounted.value) {
      num.value += 1
    } else {
      num.value += 0.1
    }
    setTimeout(increaseNum, 10)
  } else {
    setTimeout(() => {
      willclose.value = true
      num.value = 100
    }, 2000)
    setTimeout(() => {
      loading.value = false
      num.value = 100
    }, 3000)
  }
}

increaseNum()
onMounted(() => {
  isMounted.value = true
})



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
      href: 'https://cdn.staticaly.com/gh/HoubunSOP/font-awesome-6/main/css/all.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@waline/client@2/dist/waline.min.css'
    }
  ],
  script: [
    {
      src: 'https://fastly.jsdelivr.net/npm/@waline/client@2/dist/waline.js',
      type: 'text/javascript',
      pbody: true,
      defer: true
    }
  ]
})
</script>
<style scoped>
@font-face {
  font-family: 'UF Steleto';
  src: url('https://cdn.staticaly.com/gh/HoubunSOP/uchugo-fonts/master/dist/UFSteleto.woff') format('woff');
}

.load-rogress {
  background-color: #098bf5;
  box-shadow: 0 0 10px #098bf5, 0 0 5px #098bf5;
}
</style>