<template>
  <div class="fixed inset-0 flex flex-col justify-center items-center z-[9999] bg-black/50 load-screen"
    :class="{ 'willclose': willclose == true }">
    <div class="text-center">
      <h1 class="text-4xl md:text-9xl font-bold text-white">
        <span v-if="loadnum >= 13">B</span>
        <span v-if="loadnum >= 25">O</span>
        <span v-if="loadnum >= 37">N</span>
        <span v-if="loadnum >= 49">V</span>
        <span v-if="loadnum >= 61">E</span>
        <span v-if="loadnum >= 73">N</span>
        <span v-if="loadnum >= 85">O</span>
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