<template>
  <h3 class="text-white mb-2 mt-10 mx-5 py-2.5 bg-[#4453c1] rounded-2xl text-center">
    <i class="fa-duotone fa-stars" style="--fa-primary-color: #fcd53f; --fa-secondary-color: #fcd53f;"></i>
    观星资讯
    <i class="fa-duotone fa-moon-stars" style="--fa-primary-color: #fcd53f; --fa-secondary-color: #fcd53f;"></i>
  </h3>
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
        <nuxt-link :to="{ path: '/list/post', query: { c: index.category_id } }"
          class="text-xs md:text-sm font-medium tracking-wide text-[#808080]">
          <i class="fa-duotone fa-list-tree"></i>
          {{ index.category_name }}
        </nuxt-link>
        <span class="text-xs md:text-sm font-medium tracking-wide text-[#808080] pl-2">
          <i class="fa-duotone fa-calendar-week"></i>
          {{ index.date }}
        </span>
      </div>
    </nuxt-link>
  </div>
  <compsPagination :current-page="currentPage" :total-pages="totalPages" @page-changed="onPageChanged" />
</template>

<script>
export default {
  setup () {
    const runtimeConfig = useRuntimeConfig()
    const totalPages = ref(1)
    const articles = ref([{
      "id": 0,
      "title": "",
      "date": "",
      "cover": "",
      "category_id": "",
      "category_name": ""
    }])
    const currentPage = ref(1)
    const { data: count } = useFetch(async () => {
      const response = await fetch(runtimeConfig.public.apiserver + '/post/list?limit=10&page=' + currentPage.value)
      const data = await response.json()
      articles.value = data.message.articles
      totalPages.value = data.message.total_pages
    })
    return {
      totalPages,
      articles,
      currentPage,
      count
    }
  },
  data () {
    return {
      currentPage: 1,
    };
  },
  methods: {
    onPageChanged (page) {
      this.currentPage = page;
    },
  },
}
</script>

<style scoped>
.aText {
  width: calc(100% - 162px);
}
</style>