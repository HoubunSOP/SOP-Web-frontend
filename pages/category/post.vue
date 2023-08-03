<template>
  <mainpage>
    <maincolumn>
      <div class="px-[22px] pt-[18px] border-b-[2px] border-gray-200 overflow-hidden bg-white box-border ">
        <div class="relative mb-0">
          <h1 class="m-0 flex ">
            <span class="inline-block text-[#242a36] text-base font-bold tracking-wide">
              <i class="fa-duotone fa-list-tree" style="--fa-primary-color: #4453c1; --fa-secondary-color: #4453c1;"></i>
              文章分类
            </span>
          </h1>
        </div>
      </div>
      <div class="pt-2">
        <ul class="list-none">
          <li>
            <a class="mb-0 flex rounded-full transition-all ease-in-out text-zinc-950 py-2 px-3 items-center justify-between hover:bg-[#f5f5f5]"
              href="/">
              <span class="level-start">
                <span class="flex items-center justify-between">
                  アニメ
                </span>
              </span>
              <span class="level-end">
                <span class="bg-[#f5f5f5] flex items-center justify-between text-xs h-8 px-3">
                  1
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </maincolumn>
    <Sidebar />
  </mainpage>
</template>
<script>
export default {}
</script>

<style></style>
