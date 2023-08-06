<template>
  <mainpage>
    <maincolumn>
      <article>
        <header class="px-[36px] pt-8 pb-6 relative">
          <div class="mb-5 text-xs font-medium text-[#ababac] overflow-hidden">
            <span v-for="name in post.categories" :key="name">
              <i class="fa-regular fa-folder-open"></i>
              {{ name }}
            </span>
            <span class="pl-2">
              <i class="fa-regular fa-calendar"></i>
              {{ post.post_date }}
            </span>
          </div>
          <h1 class="text-2xl mb-4">
            {{ post.post_name }}
          </h1>
          <div class="mb-6 text-center bg-[#F5F5F5] max-w-[100%] h-auto rounded-md" v-if="post.post_cover">
            <nuxt-img loading="lazy" :src="post.post_cover" alt="" />
          </div>
        </header>
        <div id="post-content">
          <div id="single_content" v-html="post.post_content"></div>
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
      const response = await fetch(`${runtimeConfig.public.apiserver}/post/${route.params.id}`)
      const data = await response.json()

      post.value = data.message
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