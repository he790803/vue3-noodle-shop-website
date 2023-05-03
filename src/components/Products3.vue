<script setup>
import ProductsCard from './ProductsCard.vue';
import PaginationButton from './PaginationButton.vue';
</script>
<template>
  <div class="banner"></div>
  <section class="main">
    <div class="navBar">
      <ul class="menuList">
        <li>
          <RouterLink to="/">全部商品 </RouterLink>
        </li>
        <li>
          <RouterLink to="/"> 主餐</RouterLink>
        </li>
        <li>
          <RouterLink to="/"> 點心</RouterLink>
        </li>
        <li>
          <RouterLink to="/"> 湯品</RouterLink>
        </li>
        <li>
          <RouterLink to="/">飲品 </RouterLink>
        </li>
      </ul>
    </div>
    <ProductsCard />
    <PaginationButton />
  </section>
</template>
<style scoped>
.banner {
  width: 100%;
  height: 300px;
  background-image: url('../assets/images/banner/patrick-tomasso-GXXYkSwndP4-unsplash.jpg');
  background-size: cover;
  background-position: center;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -50px;
}
.navBar {
  width: 80%;
}
.menuList {
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a0909ad;

  height: 100px;
  text-align: center;
}
.menuList li {
  width: 300px;
}
.menuList li a {
  color: aliceblue;
}
.menuList li a:hover {
  color: #a95;
}
</style>
