<template>
  <div class="ContentContainer">
    <nuxt-link v-for="index in 4" :key="index"
      class="pt-[26px] pb-[15px] px-6 relative rounded-xl flex flex-wrap overflow-hidden transition-all hover:bg-slate-100 hover:scale-[1.02] ease-in-out"
      :to="'/post/' + index">
      <p class="aText overflow-hidden h-[3.8rem] mr-5 text-sm font-medium line-clamp-3">
        「ごらく部」でまったり日常を送る女子中学生4人組が異世界転生！？人気作「ゆるゆり」のスピンオフ作品！
      </p>
      <div
        class="justify-self-end ml-auto w-[70px] h-[65px] md:w-[100px] md:h-[65px] rounded-md overflow-hidden relative">
        <div class="h-full relative">
          <nuxt-img loading="lazy" class="w-[100%] h-[100%] absolute top-0 left-0 object-cover"
            src="https://media.comicspace.jp/wp-content/uploads/2022/01/775a9b3f8aa99181e60620106c09bd65.jpeg"
            alt="post cover" />
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.aText {
  width: calc(100% - 122px);
}
</style>