<script setup>
import { ref, onMounted } from 'vue';
import { gsap, Expo, Elastic } from 'gsap';
import { storeToRefs } from 'pinia';
import { useFirstTimeStore } from '../stores/firstTime';

const banner = ref(null);
const title = ref(null);
const block1 = ref(null);
const block2 = ref(null);
const titleItem = ref([]);

const titleText = ref(['い', 'ら', 'っ', 'し', 'ゃ', 'い', 'ま', 'せ']);

const firstTimeStore = useFirstTimeStore(); //單純資料不可解構，不然會解除資料綁定
const { isFirstTime } = storeToRefs(firstTimeStore);
const { changeFirstTimeHandler } = useFirstTimeStore(); //function可以解構

// 判斷是否第一次訪問網頁，以利後續決定要如何載入動畫
const changeFirstTime = () => {
  changeFirstTimeHandler();
};

onMounted(() => {
  if (isFirstTime.value) {
    gsap.to(banner.value, {
      duration: 1.5,
      delay: 1.6,
      opacity: 1,
      ease: Expo.easeIn,
    });
    gsap.to(block1.value, {
      duration: 1.5,
      delay: 1.8,
      opacity: 1,
      ease: Expo.easeIn,
    });
    gsap.to(block2.value, {
      duration: 1.5,
      delay: 2,
      opacity: 1,
      ease: Expo.easeIn,
    });
    gsap.from(titleItem.value, {
      duration: 3,
      delay: 4.4,
      y: '500',
      ease: Elastic.easeOut.config(2, 0.4),
      stagger: { each: 0.2 },
    });
    changeFirstTime();
  } else {
    gsap.to(banner.value, {
      duration: 1.5,
      delay: 0,
      opacity: 1,
      ease: Expo.easeIn,
    });
    gsap.to(block1.value, {
      duration: 1.5,
      delay: 0,
      opacity: 1,
      ease: Expo.easeIn,
    });
    gsap.to(block2.value, {
      duration: 1.5,
      delay: 0,
      opacity: 1,
      ease: Expo.easeIn,
    });
    gsap.from(titleItem.value, {
      duration: 3,
      delay: 0,
      y: '500',

      ease: Elastic.easeOut.config(2, 0.4),
      stagger: { each: 0.2 },
    });
  }
});
</script>
<template>
  <div class="banner" ref="banner">
    <div class="bannerImg bg-cover"></div>
    <div class="blocks">
      <div class="block-1" ref="block1">隱</div>
      <div class="block-2" ref="block2">月</div>
    </div>
    <div class="title" ref="title">
      <div ref="titleItem" v-for="item of titleText" :key="item">{{ item }}</div>
      &nbsp;
    </div>
  </div>
</template>
<style scoped>
.banner {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0px;
  display: flex;
  justify-content: center;
  z-index: 2;
  opacity: 0;
}
.bannerImg {
  width: 100%;
  background-image: url('../assets/images/banner/patrick-tomasso-GXXYkSwndP4-unsplash.jpg');
  background-size: cover;
}
.bannerImg.bg-cover {
  background-color: rgba(33, 37, 41, 0.6);
  background-blend-mode: multiply;
}

.blocks {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  font-size: 240px;
  font-weight: bolder;
  color: rgba(255, 255, 255, 0.317);
  width: 500px;
}
.block-1,
.block-2 {
  opacity: 0;
}
.block-2 {
  text-align: right;
}

.banner .title {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: aliceblue;
  /* font-size: 180px; */
  font-size: 4rem;
}
</style>
