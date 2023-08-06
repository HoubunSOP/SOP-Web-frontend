<template>
  <mainpage>
    <maincolumn>
      <div class="p-6 overflow-hidden box-border relative">
        <div class="flex flex-col md:flex-row ">
          <div class="info order-last md:order-first md:mr-4">
            <div class="mb-2 mt-2 md:mt-0">
              <h1 class="mb-[3px] text-lg m-0">
                <span class="font-bold text-[#242a36]">{{ comic.comic_name }}</span>
              </h1>
            </div>
            <p class="mb-2.5 m-0 text-sm tracking-wide">
              <a class="inline-block h-7 leading-7 py-0 px-3 bg-[#F2F2F2] rounded-2xl text-[#606060] text-xs mr-2">
                <i class="fa-regular fa-user"></i>
                {{ author }}
              </a>
              <a class="inline-block h-7 leading-7 py-0 px-3 bg-[#F2F2F2] rounded-2xl text-[#606060] text-xs">
                <i class="fa-regular fa-star"></i>
                {{ comic.comic_magazine }}
              </a>
            </p>
            <!--
              <ul class="m-0 p-0 flex flex-wrap">
              <li class="mt-[10px] mr-[8px] p-0">
                <a class="px-[8px] py-[5px] text-gray-700 text-xs border border-gray-300 block rounded-md"
                  href="/title?tags=%E3%81%BE%E3%81%A1%E3%82%AB%E3%83%89%E3%81%BE%E3%81%9E%E3%81%8F">#まちカドまぞく</a>
              </li>
            </ul>
            -->
            <p class="mt-2 text-xs font-medium">发售日：{{ comic.comic_date }}</p>
            <div class="border-t-2 border-solid border-gray-300 py-6 mt-6">
              <h2 class="mb-3.5">
                <span class="font-bold text-base text-[#242a36] tracking-wide">漫画简介</span>
              </h2>
              <div id="post-content" v-html="comic.comic_intro">
              </div>
            </div>
            <div class="border-t-2 border-solid border-gray-300 py-6 mt-6">
              <h2 class="mb-3.5">
                <span class="font-bold text-base text-[#242a36] tracking-wide">漫画详情</span>
              </h2>
              <div class="py-3 flex">
                <div class="ListTerm min-w-[6em] text-[#808080] text-sm font-normal">作者</div>
                <div class="m-0 flex-1 text-[#242a36] text-sm font-medium">
                  <p class="text-[#0189EC] mr-4 inline-block">{{ comic.comic_author }}</p>
                </div>
              </div>
              <div class="py-3 flex border-t border-gray-200">
                <div class="ListTerm min-w-[6em] text-[#808080] text-sm font-normal">发售日</div>
                <div class="m-0 flex-1 text-[#242a36] text-sm font-medium">
                  <p class="text-[#0189EC] mr-4 inline-block">{{ comic.comic_date }}</p>
                </div>
              </div>
              <div class="py-3 flex border-t border-gray-200">
                <div class="ListTerm min-w-[6em] text-[#808080] text-sm font-normal">连载刊物</div>
                <div class="m-0 flex-1 text-[#242a36] text-sm font-medium">
                  <p class="text-[#0189EC] mr-4 inline-block">{{ comic.comic_magazine }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[174px] order-first mx-auto md:ml-auto md:mb-auto md:mx-0 md:order-last md:self-end h-[245px] ">
            <nuxt-img loading="lazy" class="h-[245px] w-[174px] rounded-xl"
              src="https://d2ylnsrvo8rdzz.cloudfront.net/v2.0/images/books/4832272519.324.450.resize.jpg"
              alt="comic image" />
          </div>
        </div>
        <Comment />
      </div>
    </maincolumn>
    <Sidebar />
  </mainpage>
</template>

<script>
export default {
  scrollToTop: true,
  async setup () {
    const runtimeConfig = useRuntimeConfig();
    const comic = ref({
      comic_id: 0,
      comic_name: "暂无",
      comic_date: "未知",
      comic_cover: "https://cdn.staticaly.com/gh/misaka10843/cache/main/now_printing.webp",
      categories: ["未分类"],
      comic_intro: "无",
      comic_magazine: "未知",
      comic_author: "未知"
    });
    const route = useRoute();

    const response = await fetch(`${runtimeConfig.public.apiserver}/comic/${route.params.id}`);
    const data = await response.json();

    comic.value = data.message;

    return {
      comic
    };
  }
};
</script>

<style scoped>
@import '@/assets/css/post.css';

@media screen and (min-width: 768px) {
  .info {
    width: calc(100% - 180px);
  }
}

.ListTerm::after {
  content: '\FF1A';
  display: inline;
}
</style>