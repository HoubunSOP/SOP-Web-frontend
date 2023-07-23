<template>
  <h3 class="text-white mb-2 mt-10 mx-5 py-2.5 bg-[#4453c1] rounded-2xl text-center">
    🌟观星资讯✨
  </h3>
  <div class="ContentContainer">
    <nuxt-link v-for="index in 10" :key="index"
      class="pt-[26px] pb-[15px] px-6 relative rounded-md flex flex-wrap overflow-hidden transition-all hover:bg-slate-100 hover:scale-[1.02] ease-in-out"
      :to="'/post/' + index">
      <p class="aText overflow-hidden h-[3.8rem] mr-5 text-sm font-medium line-clamp-3">
        「ごらく部」でまったり日常を送る女子中学生4人組が異世界転生！？人気作「ゆるゆり」のスピンオフ作品！{{ testnum }}
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
          <i class="fa-regular fa-folder-open"></i>
          コミスペ！
        </span>
        <span class="text-xs md:text-sm font-medium tracking-wide text-[#808080]">
          <i class="fa-regular fa-calendar"></i>
          2022.01.11
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
      // 其他请求参数
    };
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