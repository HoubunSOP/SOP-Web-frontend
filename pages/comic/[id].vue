<template>
  <mainpage>
    <maincolumn>
      <div class="p-6 overflow-hidden box-border relative">
        <div class="flex flex-col md:flex-row ">
          <div class="info order-last md:order-first md:mr-4">
            <div class="mb-2 mt-2 md:mt-0">
              <h1 class="mb-[3px] text-lg m-0">
                <span v-if="comic.comic_id != 0" class="font-bold text-[#242a36]">{{ comic.comic_name }}</span>
                <div v-else class="h-5 bg-gray-200 rounded-full w-48 animate-pulse"></div>
              </h1>
            </div>
            <p class="mb-2.5 m-0 text-sm tracking-wide">
              <a class="inline-block h-7 leading-7 py-0 px-3 bg-[#F2F2F2] rounded-2xl text-[#606060] text-xs mr-2">
                <i class="fa-regular fa-user"></i>
                <span v-if="comic.comic_id != 0">{{ comic.comic_author }}</span>
                <div v-else class="h-2.5 bg-gray-200 rounded-full w-20 animate-pulse inline-block"></div>
              </a>
              <a class="inline-block h-7 leading-7 py-0 px-3 bg-[#F2F2F2] rounded-2xl text-[#606060] text-xs">
                <i class="fa-regular fa-star"></i>
                <span v-if="comic.comic_id != 0">{{ comic.comic_magazine }}</span>
                <div v-else class="h-2.5 bg-gray-200 rounded-full w-20 animate-pulse inline-block"></div>
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
            <p class="mt-2 text-xs font-medium">
              发售日：
              <span v-if="comic.comic_id != 0">{{ comic.comic_date }}</span>
              <div v-else class="h-2.5 bg-gray-200 rounded-full w-20 animate-pulse inline-block"></div>
            </p>
            <div class="border-t-2 border-solid border-gray-300 py-6 mt-6">
              <h2 class="mb-3.5">
                <span class="font-bold text-base text-[#242a36] tracking-wide">漫画简介</span>
              </h2>
              <div v-if="comic.comic_id != 0" id="post-content" v-html="comic.comic_intro">
              </div>
              <div v-else class="space-y-2.5 animate-pulse max-w-lg">
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
            <div class="border-t-2 border-solid border-gray-300 py-6 mt-6">
              <h2 class="mb-3.5">
                <span class="font-bold text-base text-[#242a36] tracking-wide">漫画详情</span>
              </h2>
              <div class="py-3 flex">
                <div class="ListTerm min-w-[6em] text-[#808080] text-sm font-normal">作者</div>
                <div class="m-0 flex-1 text-[#242a36] text-sm font-medium">
                  <p v-if="comic.comic_id != 0" class="text-[#0189EC] mr-4 inline-block">{{ comic.comic_author }}
                  </p>
                  <div v-else class="h-2.5 bg-gray-200 rounded-full w-48 animate-pulse"></div>
                </div>
              </div>
              <div class="py-3 flex border-t border-gray-200">
                <div class="ListTerm min-w-[6em] text-[#808080] text-sm font-normal">发售日</div>
                <div class="m-0 flex-1 text-[#242a36] text-sm font-medium">
                  <p v-if="comic.comic_id != 0" class="text-[#0189EC] mr-4 inline-block">{{ comic.comic_date }}</p>
                  <div v-else class="h-2.5 bg-gray-200 rounded-full w-48 animate-pulse"></div>
                </div>
              </div>
              <div class="py-3 flex border-t border-gray-200">
                <div class="ListTerm min-w-[6em] text-[#808080] text-sm font-normal">连载刊物</div>
                <div class="m-0 flex-1 text-[#242a36] text-sm font-medium">
                  <p v-if="comic.comic_id != 0" class="text-[#0189EC] mr-4 inline-block">{{ comic.comic_magazine
                  }}
                  </p>
                  <div v-else class="h-2.5 bg-gray-200 rounded-full w-48 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-[174px] order-first mx-auto md:ml-auto md:mb-auto md:mx-0 md:order-last md:self-end h-[245px] ">
            <nuxt-img v-if="comic.comic_id != 0" loading="lazy" class="h-[245px] w-[174px] rounded-xl"
              :src="comic.comic_cover" alt="comic image" />
            <div v-else class="flex items-center justify-center w-full h-full bg-gray-300 rounded animate-pulse">
              <svg class="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 20 18">
                <path
                  d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
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
  setup () {
    useSeoMeta({title:"loading"})
    const runtimeConfig = useRuntimeConfig();
    const { $toast } = useNuxtApp()
    const comic = ref({
      comic_id: 0,
      comic_name: "暂无",
      comic_date: "未知",
      comic_cover: "/img/now_printing.webp",
      categories: ["未分类"],
      comic_intro: "无",
      comic_magazine: "未知",
      comic_author: "未知"
    });
    const route = useRoute();
    useFetch(async () => {
      try {
        const response = await fetch(`${runtimeConfig.public.apiserver}/comic/${route.params.id}`);
        const data = await response.json();
        if (data.status === "error") {
          $toast.error(`/post/${route.params.id} 获取失败:${data.message}`)
          await navigateTo('/')
        }
        comic.value = data.message;
        useSeoMeta({title:comic.value.comic_name})
      } catch (error) {
        $toast.error(`/comic/${route.params.id} 获取失败`)
      }
    })
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