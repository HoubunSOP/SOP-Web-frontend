<template>
  <mainpage>
    <maincolumn>
      <div class="p-6 overflow-hidden box-border relative">
        <div class="flex flex-col md:flex-row ">
          <div class="info order-last md:order-first md:mr-4">
            <div class="mb-2 mt-2 md:mt-0">
              <h1 class="mb-[3px] text-lg m-0">
                <span class="font-bold text-[#242a36]">まちカドまぞく</span>
              </h1>
            </div>
            <p class="mb-2.5 m-0 text-sm tracking-wide">
              <a class="inline-block h-7 leading-7 py-0 px-3 bg-[#F2F2F2] rounded-2xl text-[#606060] text-xs mr-2"
                href="/author/1703">
                <i class="fa-regular fa-user"></i>
                伊藤いづも
              </a>
              <a class="inline-block h-7 leading-7 py-0 px-3 bg-[#F2F2F2] rounded-2xl text-[#606060] text-xs"
                href="/author/1703">
                <i class="fa-regular fa-star"></i>
                MangaTimeKiraraCarat
              </a>
            </p>
            <ul class="m-0 p-0 flex flex-wrap">
              <li class="mt-[10px] mr-[8px] p-0">
                <a class="px-[8px] py-[5px] text-gray-700 text-xs border border-gray-300 rounded-sm block"
                  href="/title?tags=%E3%81%BE%E3%81%A1%E3%82%AB%E3%83%89%E3%81%BE%E3%81%9E%E3%81%8F">#まちカドまぞく</a>
              </li>
            </ul>
            <p class="mt-2 text-xs font-medium">発刊：2015.11.27 〜</p>
            <div class="border-t-2 border-solid border-gray-300 py-6 mt-6">
              <h2 class="mb-3.5">
                <span class="font-bold text-base text-[#242a36] tracking-wide">あらすじストーリー紹介</span>
              </h2>
              <div id="post-content">
                <p>15歳のある朝、封印されし魔族の力に目覚めた吉田優子の任務は、ご町内に住む「魔法少女」を倒すこと!?
                  ツノと尻尾は生えたけど、力は普通の女の子以下な優子が「月4万円生活の呪い」解除めざして奮闘する、逆転マジカルヒロイン4コマ!</p>
              </div>
            </div>
          </div>
          <div class="w-[174px] order-first mx-auto md:ml-auto md:mb-auto md:mx-0 md:order-last md:self-end h-[245px] ">
            <img class="h-[245px] w-[174px]"
              src="https://d2ylnsrvo8rdzz.cloudfront.net/v2.0/images/books/4832272519.324.450.resize.jpg" alt="">
          </div>
        </div>

      </div>
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

<style scoped>
@import '@/assets/css/post.css';

@media screen and (min-width: 768px) {
  .info {
    width: calc(100% - 180px);
  }
}
</style>