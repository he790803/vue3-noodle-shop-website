<script setup>
import Header from '../components/Header.vue';
import { ref, onMounted, onBeforeMount } from 'vue';
import { RouterView } from 'vue-router';
import { gsap, Expo } from 'gsap';

const background = ref(null);

onMounted(() => {
  gsap.to(background.value, {
    duration: 1.5,
    width: '100%',
    ease: Expo.easeInOut,
  });
});
</script>
<template>
  <div class="index">
    <div class="background" ref="background"></div>
    <Header />
    <RouterView v-slot="{ Component, route }">
      <Transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
  </div>
</template>
<style scoped>
.index {
  background: aliceblue;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* color: aliceblue; */
}
.background {
  position: absolute;
  left: 0%;
  width: 0%;
  height: 100%;
  background-color: #161b21;
  /* z-index: -1; */
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

/* .banner {
  width: 100%;
  height: 100%;
  position: relative;
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
  font-size: 180px;
} */
/* .header {
  display: flex;
  align-items: center;
  height: 100px;
  color: #fff;
  position: relative;
  z-index: 20;
}
.logo {
  width: 30%;
  padding-left: 50px;
}
.navBar {
  width: 70%;
}
.navBar ul {
  display: flex;
  justify-content: space-around;
}
.navBar ul li a {
  color: aliceblue;
  font-size: 1.2rem;
} */
</style>
