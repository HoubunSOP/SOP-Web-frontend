<template>
  <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :slides-per-view="'auto'" :centeredSlides="true" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }" :pagination="{
  type: 'progressbar',
}" :modules="modules" class="TopSwiper">
    <swiper-slide class="opacity-50 transition-opacity ease-in-out" v-for="index in 10" :key="index">Slide {{ index }}
      <div class="caption-wrap">
        <div class="caption">
          「摇曳露营△」特设情报页
        </div>
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
    return {
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