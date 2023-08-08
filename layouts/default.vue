<template>
  <testload v-if="loading" :loadnum="num" :willclose="willclose" />
  <div class="flex flex-col transition-all ease-in-out">
    <nav
      class="sticky top-0 z-[100] w-full backdrop-blur-md flex-none transition-colors duration-500 lg:z-50 lg:border-b bg-[#3752abb3] shadow-lg rounded-b-lg md:rounded-none z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <nuxt-link to="/" class="flex-shrink-0">
              <nuxt-img loading="lazy" class="h-8 w-auto" src="/logo.svg" alt="Logo" />
            </nuxt-link>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <nuxt-link v-for="navPage in navPages" :key="navPage.name" :to="navPage.path"
                  class="text-white hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium">{{ navPage.name
                  }}</nuxt-link>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button @click="isMobileMenuOpen = !isMobileMenuOpen" type="button"
              class="bg-[#3752aba1] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-[#3752abe8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#3752ab] focus:ring-white"
              aria-controls="mobile-menu" :aria-expanded="isMobileMenuOpen.toString()">
              <span class="sr-only">打开菜单</span>
              <!--
                Heroicon name:bars

                Menu open: "hidden", Menu closed: "block"
              -->
              <svg :class="{ 'hidden': isMobileMenuOpen, 'block': !isMobileMenuOpen }" class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!--
                Heroicon name: x

                Menu open: "block", Menu closed: "hidden"
              -->
              <svg :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }" class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }" class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <nuxt-link v-for="navPage in navPages" :key="navPage.name" :to="navPage.path"
            class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{ navPage.name
            }}</nuxt-link>
        </div>
      </div>
    </nav>

    <!-- Page content -->
    <div class="flex-grow" data-scroll>
      <slot />
    </div>
    <ToTop />
  </div>
  <TheFooter />
</template>

<script>
export default {
  setup (_, context) {
    const num = ref(0)
    const loading = ref(false)
    const isMounted = ref(false)
    const willclose = ref(false)
    const isLoaded = useCookie('isLoaded')
    if (isLoaded.value === null) {
      isLoaded.value = false;
    }
    if (!isLoaded.value) {
      loading.value = true
    }
    const increaseNum = () => {
      if (num.value < 99) {
        if (isMounted.value) {
          num.value += 1
        } else {
          num.value += 0.1
        }
        setTimeout(increaseNum, 10)
      } else {
        setTimeout(() => {
          willclose.value = true
          num.value = 100
        }, 2000)
        setTimeout(() => {
          loading.value = false
          isLoaded.value = true
          num.value = 100
        }, 3000)
      }
    }

    increaseNum()
    onMounted(() => {
      isMounted.value = true
    })
    return {
      num,
      loading,
      willclose
    }
  },
  mounted () {
    // 检查标记，如果不存在，则将其设置为 true 并显示组件
    const hasShownComponent = localStorage.getItem('hasShownComponent');
    if (!hasShownComponent) {
      localStorage.setItem('hasShownComponent', 'true');
      this.showComponent = true;
    }
  },
  data () {
    return {
      isMobileMenuOpen: false,
      isProfileOpen: true,
      showComponent: false,
      navPages: [
        {
          name: "文章列表",
          path: "/list/post"
        }, {
          name: "文章分类",
          path: "/category/post"
        }, {
          name: "漫画列表",
          path: "/list/comic"
        }, {
          name: "漫画分类",
          path: "/category/comic"
        },
      ]
    }
  },
}
</script>
