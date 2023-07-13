<template>
  <div id="waline" />
</template>

<script>
export default {
  mounted () {
    console.log(this.$route.path)
    /* eslint-disable-next-line no-undef */
    Waline.init({
      el: '#waline',
      path: this.$route.path,
      lang: 'zh',
      emoji: [
        '//unpkg.com/@waline/emojis@1.1.0/bilibili',
        'https://unpkg.com/@waline/emojis@1.1.0/tw-emoji',

      ],
      requiredMeta: ['nick', 'mail'],
      serverURL: 'https://comment.fwgxt.top'
    })
  }
}
</script>

<style></style>