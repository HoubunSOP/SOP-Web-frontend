<template>
  <div class="pb-1 pt-5 px-5 my-4">
    <span class="text-lg text-white -ml-1.5 py-1 px-2.5 bg-[#4453c1] rounded">
      未来发售的单行本
      <i class="fa-duotone fa-telescope"></i>
    </span>
  </div>
  <swiper slidesPerView="auto" :spaceBetween="10" :scrollbar="{
    el: '.swiper-scrollbar',
    draggable: true,
    snapOnRelease: false,
    dragSize: 'auto',
  }" :modules="modules" class="MangaSwiper select-none rounded-md">
    <swiper-slide v-for="index in comics" :key="index.id">
      <div class="SwiperCard hover:opacity-80 transition-opacity ease-in-out">
        <div class="rounded-tl-md absolute w-12 h-5 text-center text-white bg-black/[0.5]">
          {{ trTime(index.date) }} </div>
        <div>
          <nuxt-link v-if="index.id != 0" :to="'/comic/' + index.id">
            <nuxt-img loading="lazy" alt="manga cover" width="1055" height="1500" class="rounded-md max-w-full !h-auto"
              :src="index.cover" />
            <nuxt-img class="rounded-md block my-1.5 mx-auto" :src="getImageSrc(index.mz)" alt="mv_img" />
          </nuxt-link>
          <div v-else
            class="w-[120px] h-[170px] flex items-center justify-center bg-gray-300 rounded dark:bg-gray-700 animate-pulse">
            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" viewBox="0 0 20 18">
              <path
                d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <p>
          </p>
          <div class="text-sm text-center">
            {{ index.name }} </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <div class="swiper-scrollbar !h-2.5 my-2"></div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup () {
    const runtimeConfig = useRuntimeConfig()
    const { $toast } = useNuxtApp()
    const comics = ref([{
      "id": 0,
      "name": "",
      "date": "",
      "cover": "https://cdn.staticaly.com/gh/misaka10843/cache/main/now_printing.webp"
    }])

    useFetch(async () => {
      try {
        const response = await fetch(`${runtimeConfig.public.apiserver}/index/get_manga_list`)
        const data = await response.json()

        comics.value = data.message
      } catch (error) {
        $toast.error(`/index/get_manga_list 获取失败`)
      }
    })

    return {
      comics,
      modules: [Scrollbar],
    };
  },
  methods: {
    trTime (time) {
      return time.slice(5).replace(/-/g, "/")
    },
    getImageSrc (mz) {
      if (mz === "MangaTimeKiraraForward") {
        return "https://houbunsha.co.jp/img/mv_img/label_6.gif"
      }
      return "https://houbunsha.co.jp/img/mv_img/label_4.gif"
    }
  }
};
</script>
<style scoped>
.MangaSwiper .swiper-slide {
  width: 120px;
  border-radius: 8px !important;
}

.swiper-scrollbar {
  position: relative;
}
</style>