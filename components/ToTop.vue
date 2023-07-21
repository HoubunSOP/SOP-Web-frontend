<template>
  <p class="backToTop">
    <a class="scroll-to-top" @click="scrollToTop" v-show="showButton">
      <picture>
        <source type="image/webp" srcset="https://hoshitele-anime.com/dist/img/common/btn_backToTop.webp">
        <img src="https://hoshitele-anime.com/dist/img/common/btn_backToTop.png" alt="PAGE TOP" width="60px">
      </picture>
    </a>
  </p>
</template>

<script>
export default {
  data () {
    return {
      scrollTop: 0,
      showButton: false
    };
  },
  mounted () {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy () {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll () {
      this.scrollTop = window.scrollY;
      this.showButton = this.scrollTop > 200;
    },
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
.backToTop {
  right: 20px;
  bottom: 20px;
  position: fixed;

}

.scroll-to-top {
  display: inline-block;
  text-decoration: none;
  position: relative;
}

.backToTop a::before {
  background-image: url(https://hoshitele-anime.com/assets/rocket_anim.webp);
}

.backToTop a::before {
  content: "";
  width: 60px;
  height: 260px;
  position: absolute;
  top: 0;
  left: 0;
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 0;
}

.backToTop a:hover::before {
  opacity: 1;
}

.backToTop a:hover {
  -webkit-animation: purupuru .1s infinite;
  animation: purupuru .1s infinite;
}

@keyframes purupuru {
  0% {
    -webkit-transform: translate(0px, 0px) rotateZ(0deg);
    transform: translate(0px, 0px) rotateZ(0deg);
  }

  25% {
    -webkit-transform: translate(2px, 2px) rotateZ(1deg);
    transform: translate(2px, 2px) rotateZ(1deg);
  }

  50% {
    -webkit-transform: translate(0px, 2px) rotateZ(0deg);
    transform: translate(0px, 2px) rotateZ(0deg);
  }

  75% {
    -webkit-transform: translate(2px, 0px) rotateZ(-1deg);
    transform: translate(2px, 0px) rotateZ(-1deg);
  }

  100% {
    -webkit-transform: translate(0px, 0px) rotateZ(0deg);
    transform: translate(0px, 0px) rotateZ(0deg);
  }
}
</style>