<template>
  <h3 class="text-white mb-2 mt-10 mx-5 py-2.5 bg-[#4453c1] rounded-2xl text-center">
    <i class="fa-duotone fa-stars" style="--fa-primary-color: #fcd53f; --fa-secondary-color: #fcd53f;"></i>
    观星资讯
    <i class="fa-duotone fa-moon-stars" style="--fa-primary-color: #fcd53f; --fa-secondary-color: #fcd53f;"></i>
  </h3>
  <div class="ContentContainer">
    <nuxt-link v-for="index in articles.articles" :key="index.id"
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
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      totalPages: 10,
      testnum: 1,
      articles: [],
    };
  },
  async mounted () {
    try {
      const response = await this.$api.get('https://sop-api.sakurakoi.top/post/list?limit=10&page=1');
      this.articles = response.data.messages;
      console.log(response.data.messages)
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    onPageChanged (page) {
      this.currentPage = page;
      // 更新您的 API 请求参数
      // 例如：this.fetchData(this.currentPage);
      this.testnum = this.testnum + 1;
    },
  },
}
</script>

<style scoped>
.aText {
  width: calc(100% - 162px);
}
</style>