<template>
  <mainpage>
    <maincolumn>
      <article>
        <header class="px-[36px] pt-8 pb-6 relative">
          <div class="mb-5 text-xs font-medium text-[#ababac] overflow-hidden">
            <p class="float-left">2022.01.11</p>
          </div>
          <h1 class="text-2xl mb-4">
            「ごらく部」でまったり日常を送る女子中学生4人組が異世界転生！？人気作「ゆるゆり」のスピンオフ作品！
          </h1>
        </header>
      </article>
    </maincolumn>
    <Sidebar>
      <h1>侧边栏</h1>
    </Sidebar>
  </mainpage>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  data () {
    return {
      id: null
    }
  },
  mounted () {
    const route = useRoute()
    this.id = route.params.id
  }
}
</script>

<style></style>