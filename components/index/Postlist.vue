<template>
  <h3
    class="text-white mb-2 mt-10 mx-5 py-2.5 bg-[#4453c1] rounded-2xl text-center"
  >
    <i
      class="fa-duotone fa-stars"
      style="--fa-primary-color: #fcd53f; --fa-secondary-color: #fcd53f"
    ></i>
    观星资讯
    <i
      class="fa-duotone fa-moon-stars"
      style="--fa-primary-color: #fcd53f; --fa-secondary-color: #fcd53f"
    ></i>
  </h3>
  <div class="ContentContainer">
    <nuxt-link
      v-if="articles[0].id != 0"
      v-for="index in articles"
      :key="index.id"
      class="pt-[26px] pb-[15px] px-6 relative rounded-md flex flex-wrap overflow-hidden transition-all hover:bg-slate-100 hover:scale-[1.02] ease-in-out"
      :to="'/post/' + index.id"
    >
      <p
        class="aText overflow-hidden h-[3.8rem] mr-5 text-sm font-medium line-clamp-3"
      >
        {{ index.title }}
      </p>
      <div
        class="justify-self-end ml-auto w-[120px] h-[72px] md:w-[142px] md:h-[88px] rounded-md overflow-hidden relative"
      >
        <div class="h-full relative">
          <nuxt-img
            loading="lazy"
            class="w-[100%] h-[100%] absolute top-0 left-0 object-cover"
            :src="index.cover"
            alt="post cover"
          />
        </div>
      </div>
      <div class="absolute bottom-2.5">
        <nuxt-link
          :to="{ path: '/list/post', query: { c: index.category_id } }"
          class="text-xs md:text-sm font-medium tracking-wide text-[#808080]"
        >
          <i class="fa-duotone fa-list-tree"></i>
          {{ index.category_name }}
        </nuxt-link>
        <span
          class="text-xs md:text-sm font-medium tracking-wide text-[#808080] pl-2"
        >
          <i class="fa-duotone fa-calendar-week"></i>
          {{ index.date }}
        </span>
      </div>
    </nuxt-link>
    <div
      v-else
      class="pt-[26px] pb-[15px] px-6 relative flex flex-wrap animate-pulse"
    >
      <div class="bg-gray-200 rounded-full w-40 md:w-80 mb-4 h-4"></div>
      <div
        class="justify-self-end ml-auto w-[120px] h-[72px] md:w-[142px] md:h-[88px] rounded-md relative"
      >
        <div class="h-full relative">
          <div
            class="absolute flex items-center justify-center w-[120px] h-[72px] md:w-[142px] md:h-[88px] bg-gray-300 rounded sm:w-96"
          >
            <svg
              class="w-8 h-8 text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path
                d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="bg-gray-200 rounded-full w-40 bottom-2.5 h-2 absolute"></div>
    </div>
  </div>
  <compsPagination
    :current-page="currentPage"
    :total-pages="totalPages"
    @page-changed="onPageChanged"
  />
</template>

<script>
export default {
  setup() {
    const runtimeConfig = useRuntimeConfig()
    const { $toast } = useNuxtApp()
    const totalPages = ref(1)
    const articles = ref([
      {
        id: 0,
        title: '',
        date: '',
        cover: '',
        category_id: '',
        category_name: '',
      },
    ])
    const currentPage = ref(1)

    useFetch(async () => {
      try {
        const response = await fetch(
          `${runtimeConfig.public.apiserver}/post/list?limit=10&page=${currentPage.value}`,
        )
        const data = await response.json()
        articles.value = data.message.articles
        totalPages.value = data.message.total_pages
      } catch (error) {
        $toast.error(`/post/list?limit=10&page=${currentPage.value} 获取失败`)
      }
    })

    return {
      totalPages,
      articles,
      currentPage,
    }
  },
  data() {
    return {
      currentPage: 1,
    }
  },
  methods: {
    onPageChanged(page) {
      this.currentPage = page
    },
  },
}
</script>

<style scoped>
.aText {
  width: calc(100% - 162px);
}
</style>
