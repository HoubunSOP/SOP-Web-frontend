<template>
  <div class="pb-1 pt-5 px-5 my-4">
    <span class="text-lg text-white -ml-1.5 py-1 px-2.5 bg-[#4453c1] rounded">
      未来发售的单行本🔭
    </span>
  </div>
  <swiper slidesPerView="auto" :spaceBetween="10" :freeMode="'true'" :mousewheel="'true'" :scrollbar="{
    el: '.swiper-scrollbar',
    draggable: true,
    snapOnRelease: false,
    dragSize: 'auto',
  }" :modules="modules" class="MangaSwiper select-none rounded-md">
    <swiper-slide v-for="index in 10" :key="index">
      <div class="SwiperCard hover:opacity-80 transition-opacity ease-in-out">
        <div class="rounded-tl-md absolute w-12 h-5 text-center text-white bg-black/[0.5]">
          7/26 </div>
        <div>
          <nuxt-link :to="'/comic/' + index">
            <img alt="" width="1055" height="1500" class="rounded-md max-w-full !h-auto"
              src="https://s2.loli.net/2023/02/05/MCwSJxVNW8zrF12.jpg">
            <img class="rounded-md block my-1.5 mx-auto" src="https://houbunsha.co.jp/img/mv_img/label_4.gif">
          </nuxt-link>
          <p>
          </p>
          <div class="text-sm text-center">
            恋爱小行星5 </div>
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
    return {
      modules: [Scrollbar],
    };
  },
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