<template>
  <mainpage>
    <maincolumn>
      <div class="px-[22px] pt-[18px] border-b-[2px] border-gray-200 overflow-hidden bg-white box-border ">
        <div class="relative mb-0">
          <h1 class="m-0 flex ">
            <span class="inline-block text-[#242a36] text-base font-bold tracking-wide">
              <i class="fa-duotone fa-list-tree" style="--fa-primary-color: #4453c1; --fa-secondary-color: #4453c1;"></i>
              漫画分类
            </span>
          </h1>
        </div>
      </div>
      <div class="pt-2">
        <ul class="list-none">
          <li v-if="category[0].id != 0" v-for="index in category" :key="index.id">
            <nuxt-link
              class="mb-0 flex rounded-full transition-all ease-in-out text-zinc-950 py-2 px-3 items-center justify-between hover:bg-[#f5f5f5]"
              :to="`/list/comic?c=` + index.id">
              <span class="level-start">
                <span class="flex items-center justify-between">
                  {{ index.name }}
                </span>
              </span>
              <span class="level-end">
                <span class="bg-[#f5f5f5] flex items-center justify-between text-xs h-8 px-3">
                  {{ index.article_count }}
                </span>
              </span>
            </nuxt-link>
          </li>
          <li v-else v-for="index in 5" :key="index">
            <div
              class="mb-0 flex rounded-full transition-all ease-in-out py-2 px-3 items-center justify-between hover:bg-[#f5f5f5]">
              <div class="h-5 bg-gray-200 rounded-full w-full animate-pulse"></div>
            </div>
          </li>
        </ul>
      </div>
    </maincolumn>
    <Sidebar />
  </mainpage>
</template>
<script>
export default {
  setup () {
    const runtimeConfig = useRuntimeConfig();
    const { $toast } = useNuxtApp()
    const category = ref([{
      id: 0,
      name: "未分类",
      article_count: "0",
    }]);
    useFetch(async () => {
      try {
        const response = await fetch(`${runtimeConfig.public.apiserver}/category/list?type=漫画`);
        const data = await response.json();

        category.value = data.message;
      } catch (error) {
        $toast.error(`/category/list?type=漫画 获取失败`)
      }
    })
    return {
      category
    };
  }
}
</script>

<style></style>
