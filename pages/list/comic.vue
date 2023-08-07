<template>
  <mainpage>
    <maincolumn>
      <div class="px-[22px] pt-[18px] border-b-[2px] border-gray-200 overflow-hidden bg-white box-border ">
        <div class="relative mb-0">
          <h1 class="m-0 flex ">
            <span class="inline-block text-[#242a36] text-base font-bold tracking-wide">
              <i class="fa-duotone fa-books" style="--fa-primary-color: #4453c1; --fa-secondary-color: #4453c1;"></i>
              漫画列表
            </span>
          </h1>
        </div>
      </div>
      <div class="flex flex-wrap margin-[-5px] mt-[10px]">
        <div v-if="comics[0].id != 0"
          class="comic max-w-none mt-0 mx-[5px] mb-[18px] rounded-md list-none transition-all hover:bg-slate-100 hover:scale-[1.02] ease-in-out"
          style="width: calc(100% / 4 - 10px);" v-for="index in comics" :key="index.id">
          <nuxt-link :to="'/comic/' + index.id">
            <figure class="rounded-md m-0 overflow-hidden relative">
              <span class="relative block h-0 w-full pt-[150%] overflow-hidden">
                <nuxt-img alt="manga cover" loading="lazy"
                  class="object-cover rounded-md h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"
                  height="134" :src="index.cover" width="96" />
              </span>
            </figure>
          </nuxt-link>
          <p class=" text-center whitespace-nowrap text-ellipsis text-[10px] h-[15px] font-normal overflow-hidden">
            {{ index.name }}</p>
          <p class="mt-[8px] text-center whitespace-nowrap text-[#808080] text-[10px] font-normal">{{ index.date }}发布</p>
        </div>
        <div v-else
          class="comic max-w-none mt-0 mx-[5px] mb-[18px] rounded-md list-none transition-all hover:bg-slate-100 hover:scale-[1.02] ease-in-out"
          style="width: calc(100% / 4 - 10px);" v-for="index in 10" :key="index">
          <div>
            <figure class="rounded-md m-0 overflow-hidden relative">
              <span class="relative block h-0 w-full pt-[150%] overflow-hidden">
                <div
                  class="flex items-center justify-center h-[90%] w-[90%]  -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 bg-gray-300 rounded-md">
                  <svg class="h-[20%] w-[20%] text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 20 18">
                    <path
                      d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>

              </span>
            </figure>
          </div>
          <div class="h-[15px] bg-gray-200 rounded-full w-20 whitespace-nowrap mx-auto"></div>
          <div class="mt-[8px] h-[8px] bg-gray-200 rounded-full w-10 whitespace-nowrap mx-auto"></div>
        </div>
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
    const { $toast } = useNuxtApp()
    const comics = ref([
      {
        id: 0,
        name: '',
        date: '',
        cover: ''
      }
    ])
    const currentPage = ref(1)

    const route = useRoute()
    let url = `${runtimeConfig.public.apiserver}/comic/list?limit=10&page=${currentPage.value}`
    if (route.query.c != null) {
      url += `&category_id=${route.query.c}`
    }

    useFetch(async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        comics.value = data.message.comics
        totalPages.value = data.message.total_pages
      } catch (error) {
        $toast.error(`/comic/list?limit=10&page=${currentPage.value} 获取失败`)
      }
    })
    const onPageChanged = (page) => {
      currentPage.value = page
    }

    return {
      totalPages,
      comics,
      currentPage,
      onPageChanged
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 725px) {
  .comic {
    width: calc(100% / 3 - 10px) !important;
  }
}
</style>