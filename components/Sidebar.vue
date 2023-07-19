<template>
  <div class="flex gap-10 flex-col  w-full md:w-2/5 mt-4 md:mt-0 px-4">

    <div class="bg-white bg-opacity-75 rounded-lg">
      <div class="flex items-center justify-center pt-4">
        <span class="text-center font-bold text-[#242a36]">发售日历</span>
      </div>
      <div class="flex items-center justify-center">
        <SidebarcompsCalendar />
      </div>
    </div>
    <div class="bg-white bg-opacity-75 rounded-lg">

      <div class="flex items-center justify-center pt-4">
        <span class="text-center font-bold text-[#242a36]">推荐文章</span>
      </div>
      <div class="flex items-center justify-center">
        <div class="ContentContainer">
          <nuxt-link v-for="index in 4" :key="index"
            class="pt-[26px] pb-[15px] px-6 relative rounded-md flex flex-wrap overflow-hidden transition-all hover:bg-slate-100 hover:scale-[1.02] ease-in-out"
            :to="'/post/' + index">
            <p class="aText overflow-hidden h-[3.8rem] mr-5 text-sm font-medium line-clamp-3">
              「ごらく部」でまったり日常を送る女子中学生4人組が異世界転生！？人気作「ゆるゆり」のスピンオフ作品！
            </p>
            <div
              class="justify-self-end ml-auto w-[120px] h-[72px] md:w-[142px] md:h-[88px] rounded-md overflow-hidden relative">
              <div class="h-full relative">
                <img class="w-[100%] h-[100%] absolute top-0 left-0 object-cover"
                  src="https://media.comicspace.jp/wp-content/uploads/2022/01/775a9b3f8aa99181e60620106c09bd65.jpeg"
                  alt="">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>