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
  async mounted () {
    try {
      const response = await this.$api.get('https://sop-api.sakurakoi.top/index/calendar');
      this.lists = response.data.messages;
      console.log(response.data.messages)
    } catch (error) {
      console.error(error);
    }
  },
  data () {
    const lists = [
      {
        description: '街角魔族发售',
        isComplete: false,
        dates: [new Date(2023, 6, 10), new Date(2023, 6, 18)], // Every Friday
        color: 'red',
      },
    ];
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
