<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { gsap, Expo, Elastic } from 'gsap';
import { storeToRefs } from 'pinia';
import ProductsCard from './ProductsCard.vue';
import { usePaginationStore } from '../stores/pagination';

const paginationStore = usePaginationStore();
const { type } = storeToRefs(paginationStore);
const { filterDataHandler } = usePaginationStore();
</script>
<template>
  <div class="products">
    <div class="title">
      <h1>Menu</h1>
    </div>
    <div class="mainSection">
      <div class="menuList">
        <ul>
          <li @click="filterDataHandler('all')" :class="{ active: type === 'all' }">
            <span>全部商品</span>
          </li>
          <li @click="filterDataHandler('mainMeal')" :class="{ active: type === 'mainMeal' }">
            <span>主餐</span>
          </li>
          <li @click="filterDataHandler('dessert')" :class="{ active: type === 'dessert' }">
            <span>點心</span>
          </li>
          <li @click="filterDataHandler('soup')" :class="{ active: type === 'soup' }">
            <span>湯品</span>
          </li>
          <li @click="filterDataHandler('drinks')" :class="{ active: type === 'drinks' }">
            <span>飲品</span>
          </li>
        </ul>
      </div>
      <ProductsCard />
      <!-- <div class="productsCard">
        <div class="card">
          <div class="cardHeader">
            <img src="https://picsum.photos/300/200/?random=10" />
            <div class="tag">
              <p>主餐</p>
            </div>
          </div>
          <div class="cardBody">
            <h3>佐賀 A5 霜降牛排</h3>
            <p>油花細密，佐賀牛最高級的美味。</p>
          </div>
          <div class="cardFooter">
            <button class="apply">More</button>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style scoped>
.products {
  opacity: 1;
}
.title {
  /* height: 100px; */
  width: 50%;
  margin: 2.5rem 1rem 1rem;
  padding-bottom: 1rem;
  border-bottom: 5px solid #a95;
  font-size: 1.4rem;
}
.mainSection {
  display: flex;
}
.menuList {
  width: 20%;
  margin: 1rem;
}
.menuList ul li {
  margin: 1rem;
}
.menuList ul li span {
  font-size: 26px;
  color: #fff;
  transition: color 0.3s ease-in;
  position: relative;
  cursor: pointer;
}
.menuList ul li span::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 0px;
  width: 0;
  height: 100%;
  border-bottom: 3px solid #a95;
  transition: width 0.3s ease-in;
}
.menuList ul li span:hover::before,
.menuList ul li.active span::before {
  width: 100%;
}
.menuList ul li span:hover,
.menuList ul li.active span {
  color: #a95;
}

.productsCard {
  width: 80%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, 400px);
  gap: 10px;
}
.card {
  width: 400px;
  /* height: 500px; */
  height: min-content;
  color: black;
  padding: 16px;
  background-color: #fff;
  border-radius: 1rem;
  margin: 36px 0px 0;
  transition: 0.3s ease-in-out;
}
.card:not(:nth-child(4n)) {
  margin-right: calc(4% / 3);
}
.card:hover {
  scale: 1.04;
}

.card .cardHeader {
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}
.card .cardHeader img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
}
.card:hover .cardHeader img {
  scale: 1.1;
  rotate: 4deg;
}
.tag {
  cursor: default;
  position: absolute;
  top: 12px;
  right: 12%;
  padding: 6px 8px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.tag p {
  color: #09153ddb;
  font-size: 16px;
  font-weight: 600;
}

.card .cardBody {
  padding: 16px 0 18px;
}
.card .cardBody h3 {
  font-size: 24px;
}
.card .cardBody p {
  font-size: 16px;
  font-weight: 600;
  margin: 2px 0 0;
}
.card .cardFooter {
  display: flex;
  justify-content: flex-end;
}
.card .cardFooter .apply {
  cursor: pointer;
  color: #fff;

  font-size: 20px;
  padding: 6px 14px;
  background-color: #ee1c47;
  border-radius: 8px 4px;
  border: 0;
  outline: 0;
}

@media screen and (max-width: 900px) {
  .mainSection {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
  .menuList {
    width: auto;
    text-align: center;
  }
  .productsCard .card {
    width: 100%;
    margin: 0px 16px 36px;
  }
}
</style>
