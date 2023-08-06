<template>
  <mainpage>
    <maincolumn>
      <div class="px-[22px] pt-[18px] border-b-[2px] border-gray-200 overflow-hidden bg-white box-border ">
        <div class="relative mb-0">
          <h1 class="m-0 flex ">
            <span class="inline-block text-[#242a36] text-base font-bold tracking-wide">
              <i class="fa-duotone fa-list" style="--fa-primary-color: #4453c1; --fa-secondary-color: #4453c1;"></i>
              文章列表
            </span>
          </h1>
        </div>
      </div>
      <div class="ContentContainer">
        <nuxt-link v-for="index in articles" :key="index.id"
          class="pt-[26px] pb-[15px] px-6 relative rounded-md flex flex-wrap overflow-hidden transition-all hover:bg-slate-100 hover:scale-[1.02] ease-in-out"
          :to="'/post/' + index.id">
          <p class="aText overflow-hidden h-[3.8rem] mr-5 text-sm font-medium line-clamp-3">
            {{ index.title }}
          </p>
          <div
            class="justify-self-end ml-auto w-[120px] h-[72px] md:w-[142px] md:h-[88px] rounded-md overflow-hidden relative">
            <div class="h-full relative">
              <nuxt-img loading="lazy" class="w-[100%] h-[100%] absolute top-0 left-0 object-cover"
                src="https://media.comicspace.jp/wp-content/uploads/2022/01/775a9b3f8aa99181e60620106c09bd65.jpeg"
                alt="post cover" />
            </div>
          </div>
          <div class="absolute bottom-2.5">
            <span class="text-xs md:text-sm font-medium tracking-wide text-[#808080]">
              <i class="fa-duotone fa-list-tree"></i>
              コミスペ！
            </span>
            <span class="text-xs md:text-sm font-medium tracking-wide text-[#808080]">
              <i class="fa-duotone fa-calendar-week"></i>
              {{ index.date }}
            </span>
          </div>
        </nuxt-link>
      </div>
      <compsPagination :current-page="currentPage" :total-pages="totalPages" @page-changed="onPageChanged" />
    </maincolumn>
    <Sidebar />
  </mainpage>
</template>

<script>
export default {
  setup () {
    const runtimeConfig = useRuntimeConfig()
    const totalPages = ref(1)
    const articles = ref([
      {
        id: 0,
        title: '',
        date: '',
        cover: ''
      }
    ])
    const currentPage = ref(1)

    const route = useRoute()
    let url = `${runtimeConfig.public.apiserver}/post/list?limit=10&page=${currentPage.value}`
    if (route.query.c != null) {
      url += `&category_id=${route.query.c}`
    }

    useFetch(async () => {
      const response = await fetch(url)
      const data = await response.json()
      articles.value = data.message.articles
      totalPages.value = data.message.total_pages
    })

    const onPageChanged = (page) => {
      currentPage.value = page
    }

    return {
      totalPages,
      articles,
      currentPage,
      onPageChanged
    }
  },
  data () {
    return {
      currentPage: 1
    }
  }
}
</script>

<style>
.aText {
  width: calc(100% - 162px);
}
</style>