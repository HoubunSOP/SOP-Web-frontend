<template>
  <div class="flex justify-between mt-5">
    <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)"
      class="px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-300">
      <i class="fa-solid fa-caret-left"></i>
    </button>
    <div class="flex">
      <button v-for="page in pages" :key="page" @click="changePage(page)"
        :class="[page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700', 'mx-1 px-2 py-1 rounded-lg hover:bg-gray-300']">
        {{ page }}
      </button>
    </div>
    <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)"
      class="px-2 py-1 rounded-lg bg-gray-200 hover:bg-gray-300">
      <i class="fa-solid fa-caret-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages: function () {
      const startPage = Math.max(1, this.currentPage - 2);
      const endPage = Math.min(this.totalPages, this.currentPage + 2);
      let pages = [];

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (startPage > 1) {
        pages.unshift('...');
        pages.unshift(1);
      }

      if (endPage < this.totalPages) {
        pages.push('...');
        pages.push(this.totalPages);
      }

      return pages;
    },
  },
  methods: {
    changePage: function (page) {
      if (typeof page === 'number') {
        this.$emit('page-changed', page);
      }
    },
  },
};
</script>