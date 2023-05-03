<script setup>
import { ref, watch, watchEffect, computed, onMounted } from 'vue';
import { gsap, Expo, Elastic } from 'gsap';

const nav = ref(null);
const logo = ref(null);
const isActive = ref(false);
const isMobile = ref(false);

// 開關hamburgerBar
const hamburgerBarHandler = () => {
  isActive.value = !isActive.value;
};
// 關hamburgerBar
const closeHamburgerBarHandler = () => {
  isActive.value = false;
};

// 註冊寬度大小改變的事件監聽器
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 900;
});

onMounted(() => {
  // 監看isActive的改變，去控制要不要隱藏scroll
  watch(isActive, (value) => {
    if (value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  if (!isMobile.value) {
    gsap.from(nav.value, {
      duration: 1.5,
      delay: 1.2,
      opacity: 0,
      y: -50,
      ease: Expo.easeIn,
    });
  }

  gsap.from(logo.value, {
    duration: 1.5,
    delay: 1.2,
    opacity: 0,
    y: -50,
    ease: Expo.easeIn,
  });
});

// 如果不是手機模式，就把isActive設為false，重置isActive的狀態
watchEffect(() => {
  isMobile.value = window.innerWidth < 900;
  if (!isMobile.value) {
    isActive.value = false;
  }
});
</script>
<template>
  <div class="header" ref="background">
    <div class="logo" ref="logo">
      <h1>
        <RouterLink to="/"> 隱月料理屋 </RouterLink>
      </h1>
    </div>
    <div class="hamburger">
      <div class="hamburgerIcon" :class="{ active: isActive }" @click="hamburgerBarHandler">
        <div class="hamburgerBarIcon text-container">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </div>
        <div class="vertical-rotate-central"></div>
        <div class="hamburgerCancelIcon text-container">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </div>
      </div>
    </div>
    <nav class="navBar" :class="{ active: isActive }" ref="nav">
      <ul>
        <li @click="closeHamburgerBarHandler">
          <RouterLink to="/"> 回首頁 </RouterLink>
        </li>
        <li @click="closeHamburgerBarHandler">
          <RouterLink to="/shop"> 精選商品 </RouterLink>
        </li>
        <li @click="closeHamburgerBarHandler">
          <RouterLink to="/about"> 關於我們 </RouterLink>
        </li>
        <li @click="closeHamburgerBarHandler">
          <RouterLink to="/shopping-car"> 購物車 </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
.header {
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
.logo a {
  color: #fff;
}
.navBar {
  width: 70%;
}
.hamburger {
  display: none;
  width: 100%;
}
.navBar ul {
  display: flex;
  justify-content: space-around;
}
.navBar ul li a {
  color: aliceblue;
  font-size: 1.2rem;
}
@media screen and (max-width: 900px) {
  .header {
    align-items: unset;
  }
  .logo {
    line-height: 100px;
    width: 100%;
  }
  .navBar {
    background-color: #a95;
    height: 100vh;
    /* transform: translateX(0px) !important; */
    transition: right 0.5s ease-in;
    position: fixed;
    right: -900px;
    width: 100%;
  }
  .navBar.active {
    /* transform: translateX(0px) !important; */
    right: 0;
  }
  .navBar ul {
    height: 80%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .hamburger {
    width: 50px;
    height: 50px;
    position: fixed;
    left: 85%;
    top: 25px;
    display: inline;
    z-index: 5;
    cursor: pointer;
  }
  .hamburgerIcon {
    background-color: #fff;
    color: #a95;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;

    position: relative;
    transform-style: preserve-3d;
    transition: 0.5s linear;
  }
  .hamburgerIcon.active {
    transform: rotateX(180deg);
  }
  .vertical-rotate-central {
    width: 50px;
    height: 50px;
    background-color: #fff;
    box-shadow: 0 0 20px #6d6868;
    border-radius: 50px;
  }
  .text-container {
    position: absolute;
  }
  .hamburgerBarIcon {
    transform: translateZ(20px);
  }
  .hamburgerCancelIcon {
    transform: translateZ(-20px) rotateY(180deg) rotateZ(180deg);
  }
}
</style>
