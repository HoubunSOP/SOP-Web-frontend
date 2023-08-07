<template>
  <ClientOnly>
    <VCalendar class="!w-full m-3" :attributes="attributes" />
  </ClientOnly>
</template>

<script>
export default {
  props: {
    visibility: { type: String, default: 'focus' },
    hideIndicators: Boolean,
  },
  setup () {
    const runtimeConfig = useRuntimeConfig()
    const { $toast } = useNuxtApp()
    const lists = ref([])

    useFetch(async () => {
      try {
        const response = await fetch(runtimeConfig.public.apiserver + '/index/calendar')
        const data = await response.json()

        lists.value = data.message
      } catch (error) {
        $toast.error(`/index/calendar 获取失败`)
      }
    })

    return {
      lists
    }
  },
  data () {
    const lists = [];
    return {
      incId: lists.length,
      lists,
    };
  },
  computed: {
    attributes () {
      const currentDate = new Date();
      const additionalAttribute = {
        highlight: true,
        dates: currentDate,
      };

      return [
        // Additional attribute
        additionalAttribute,

        // Attributes for todos
        ...this.lists.map(list => ({
          dates: list.dates,
          dot: {
            color: list.color,
            class: list.isComplete ? 'opacity-75' : '',
          },
          popover: {
            label: list.description,
            visibility: this.visibility,
            hideIndicator: this.hideIndicators,
          },
        })),
      ];
    },
  },
};
</script>
