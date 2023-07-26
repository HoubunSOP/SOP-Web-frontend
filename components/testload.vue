<template>
  <div class="fixed inset-0 flex flex-col justify-center items-center z-[9999] bg-black/50 load-screen"
    :class="{ 'willclose': willclose == true }">
    <div class="text-center">
      <h1 class="text-4xl md:text-9xl font-bold text-white">
        <span v-if="loadnum >= 10">H</span>
        <span v-if="loadnum >= 20">O</span>
        <span v-if="loadnum >= 30">U</span>
        <span v-if="loadnum >= 40">B</span>
        <span v-if="loadnum >= 50">U</span>
        <span v-if="loadnum >= 60">N</span>
        <span v-if="loadnum >= 70">S</span>
        <span v-if="loadnum >= 80">O</span>
        <span v-if="loadnum >= 90">P</span>
      </h1>
      <p class="text-white text-lg md:text-2xl font-bold load-text" :class="{ 'loaded': loadnum > 99 }"
        v-if="loadnum >= 95">芳文观星台
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    loadnum: Number,
    willclose: Boolean
  }
}
</script>
<style scoped>
.load-screen h1 {
  font-family: 'UF Steleto';
}

.load-text {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.load-screen {
  opacity: 1;
  transition: opacity 1s ease-in-out;
}

.willclose {
  opacity: 0 !important;
}

.loaded {
  opacity: 1 !important;
}
</style>