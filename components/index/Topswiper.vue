<template>
  <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :slides-per-view="'auto'" :centeredSlides="true" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }" :pagination="{
  type: 'progressbar',
}" :modules="modules" class="TopSwiper">
    <swiper-slide class="transition-opacity ease-in-out" v-for="index in json" :key="index.id">

      <div v-if="index.id != 0" class="caption-wrap">
        <div class="caption">
          {{ index.title }}
        </div>
      </div>
      <div v-else
        class="flex items-center justify-center w-full h-full animate-pulse bg-gray-300 rounded dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="currentColor" viewBox="0 0 20 18">
          <path
            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup () {
    const runtimeConfig = useRuntimeConfig()
    const { $toast } = useNuxtApp()
    const json = ref([{
      "id": 0,
      "title": "",
      "cover": ""
    },])

    useFetch(async () => {
      try {
        const response = await fetch(`${runtimeConfig.public.apiserver}/index/get_top_swiper`)
        const data = await response.json()

        json.value = data.message
      } catch (error) {
        $toast.error(`/index/get_top_swiper 获取失败`)
      }
    })

    return {
      json,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style>
.TopSwiper {
  width: 100%;
  height: 280px;
  border-radius: 8px !important;
}

.swiper-wrapper {
  width: 240px;
}



.TopSwiper .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: rgb(158, 158, 158);
  width: 560px;
  height: 280px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px !important;
  transition: opacity 0.5s ease;
  opacity: 50%;
}

.TopSwiper .swiper-slide img {
  display: block;
  width: 420px;
  height: 210px;
  object-fit: cover;
}

.TopSwiper .caption-wrap>.caption {
  padding: 5px 10px;
  word-wrap: break-word;
  line-height: 15px;
  padding: 0px 0px 0px 0px !important;
  margin: 0px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.TopSwiper .caption-wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  background: black;
  color: #ffffff;
  opacity: 0.7;
  margin: 0;
  display: block;
  width: 100%;
  line-height: 1.4em;
}

.TopSwiper .caption-wrap {
  line-height: 0px !important;
  height: 40px !important;
  border-radius: 0 0 9px 9px !important;
  font-size: 0.8em !important;
}

.TopSwiper::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);
  left: 0;
}

.TopSwiper::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent);
  right: 0;
}

.TopSwiper .swiper-slide-active {
  opacity: 100%;
}

@media (max-width: 535px) {
  .swiper-wrapper {
    width: 100%;
  }

  .swiper-slide {
    width: 100%;
  }
}
</style>