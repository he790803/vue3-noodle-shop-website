<script setup>
import { ref, onMounted } from 'vue';
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
  <div class="shop" ref="background">
    <RouterView />
  </div>
</template>
<style scoped>
.shop {
  position: absolute;
  top: 100px;
  z-index: 2;
  color: aliceblue;
  padding: 1rem;
  width: 0%;
  min-height: calc(100% - 100px);
  background-color: #161b21;
}
</style>
