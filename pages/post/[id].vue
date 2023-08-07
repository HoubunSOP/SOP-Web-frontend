<template>
  <mainpage>
    <maincolumn>
      <article>
        <header class="px-[36px] pt-8 pb-6 relative">
          <div class="mb-5 text-xs font-medium text-[#ababac] overflow-hidden">
            <span v-for="name in post.categories" :key="name">
              <i class="fa-regular fa-folder-open"></i>
              <span v-if="post.post_id != 0">{{ name }}</span>
              <div v-else class="h-2.5 bg-gray-200 rounded-full w-20 animate-pulse inline-block ml-2"></div>
            </span>
            <span class="pl-2">
              <i class="fa-regular fa-calendar"></i>
              <span v-if="post.post_id != 0">{{ post.post_date }}</span>
              <div v-else class="h-2.5 bg-gray-200 rounded-full w-20 animate-pulse inline-block ml-2"></div>
            </span>
          </div>
          <h1 class="text-2xl mb-4">
            <span v-if="post.post_id != 0">{{ post.post_name }}</span>
            <div v-else class="h-5 bg-gray-200 rounded-full w-40 animate-pulse inline-block"></div>
          </h1>
          <div class="mb-6 text-center bg-[#F5F5F5] max-w-[100%] h-40 md:h-60 rounded-md  top-0 left-0 object-cover"
            v-if="post.post_cover">
            <nuxt-img v-if="post.post_id != 0" loading="lazy" :src="post.post_cover" alt="" />
            <div v-else class="flex items-center justify-center w-full h-40 md:h-60 bg-gray-300 rounded animate-pulse">
              <svg class="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 20 18">
                <path
                  d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
        </header>
        <div id="post-content">
          <div v-if="post.post_id != 0" id="single_content" v-html="post.post_content"></div>
          <div v-else v-for="index in 3" :key="index" class="space-y-2.5 animate-pulse max-w-lg mt-4">
            <div class="flex items-center w-full space-x-2">
              <div class="h-2.5 bg-gray-200 rounded-full w-32"></div>
              <div class="h-2.5 bg-gray-300 rounded-full w-24"></div>
              <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
            </div>
            <div class="flex items-center w-full space-x-2 max-w-[480px]">
              <div class="h-2.5 bg-gray-200 rounded-full w-full"></div>
              <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
              <div class="h-2.5 bg-gray-300 rounded-full w-24"></div>
            </div>
            <div class="flex items-center w-full space-x-2 max-w-[400px]">
              <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
              <div class="h-2.5 bg-gray-200 rounded-full w-80"></div>
              <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
            </div>
            <div class="flex items-center w-full space-x-2 max-w-[480px]">
              <div class="h-2.5 bg-gray-200 rounded-full w-full"></div>
              <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
              <div class="h-2.5 bg-gray-300 rounded-full w-24"></div>
            </div>
            <div class="flex items-center w-full space-x-2 max-w-[440px]">
              <div class="h-2.5 bg-gray-300 rounded-full w-32"></div>
              <div class="h-2.5 bg-gray-300 rounded-full w-24"></div>
              <div class="h-2.5 bg-gray-200 rounded-full w-full"></div>
            </div>
            <div class="flex items-center w-full space-x-2 max-w-[360px]">
              <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
              <div class="h-2.5 bg-gray-200 rounded-full w-80"></div>
              <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </article>
      <Comment />
    </maincolumn>
    <Sidebar />
  </mainpage>
</template>

<script>
export default {
  scrollToTop: true,
  setup () {
    const runtimeConfig = useRuntimeConfig()
    const { $toast } = useNuxtApp()
    const post = ref({
      "post_id": 0,
      "post_name": "",
      "post_date": "",
      "post_cover": "https://cdn.staticaly.com/gh/misaka10843/cache/main/now_printing.webp",
      "categories": ["未分类"],
      "post_content": ""
    })
    const route = useRoute()

    useFetch(async () => {
      try {
        const response = await fetch(`${runtimeConfig.public.apiserver}/post/${route.params.id}`)
        const data = await response.json()
        post.value = data.message
      } catch (error) {
        $toast.error(`/post/${route.params.id} 获取失败`)
      }
    })


    return {
      post,
    }
  },
}
</script>

<style scoped>
@import '@/assets/css/post.css';
</style>