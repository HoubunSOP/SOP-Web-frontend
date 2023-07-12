<template>
  <h3 class="text-white mb-2 mt-10 mx-5 py-2.5 bg-[#4453c1] rounded-2xl text-center">
    🌟观星资讯✨
  </h3>
  <div class="ContentContainer">
    <nuxt-link v-for="index in 10" :key="index"
      class="pt-[26px] pb-[15px] px-6 relative rounded-md flex flex-wrap overflow-hidden transition-all hover:bg-slate-100 hover:scale-[1.02] ease-in-out"
      :to="'/post/' + index">
      <p class="aText h-[4.5rem] mr-5 text-sm font-medium line-clamp-3">
        「ごらく部」でまったり日常を送る女子中学生4人組が異世界転生！？人気作「ゆるゆり」のスピンオフ作品！
      </p>
      <div class="w-[142px] h-[88px] rounded-md overflow-hidden relative">
        <div class="h-full relative">
          <img class="w-[100%] h-[100%] absolute top-0 left-0 object-cover"
            src="https://media.comicspace.jp/wp-content/uploads/2022/01/775a9b3f8aa99181e60620106c09bd65.jpeg" alt="">
        </div>
      </div>
      <div class="absolute bottom-2.5">
        <span class="text-sm font-medium tracking-wide text-[#808080]">
          <i class="fa-regular fa-folder-open"></i>
          コミスペ！
        </span>
        <span class="text-sm font-medium tracking-wide text-[#808080]">
          <i class="fa-regular fa-calendar"></i>
          2022.01.11
        </span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.aText {
  width: calc(100% - 162px);
}
</style>