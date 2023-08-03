<template>
  <div class="flex gap-10 flex-col  w-full md:w-2/6 mt-4 md:mt-0 px-4">

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
        <SidebarcompsRecPost />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>