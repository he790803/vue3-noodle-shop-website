<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useShoppingStore } from '../stores/shopping';
import { usePaginationStore } from '../stores/pagination';

const shoppingStore = useShoppingStore();
const { cardList } = storeToRefs(shoppingStore);

const paginationStore = usePaginationStore();
const { paginationData } = storeToRefs(paginationStore);
</script>
<template>
  <div class="productsCard">
    <div class="card" v-for="item of paginationData" :key="item.id">
      <div class="cardHeader">
        <img :src="item.imgLink" />
        <div class="tag">
          <p>{{ item.type }}</p>
        </div>
      </div>
      <div class="cardBody">
        <h3>{{ item.title }}</h3>
        <p>NT {{ item.price }} 元</p>
      </div>
      <div class="cardFooter">
        <RouterLink :to="`/shop/${item.id}`">
          <button class="apply">More</button>
        </RouterLink>
      </div>
    </div>
  </div>

  <!-- <div class="productCard">
    <div class="card" v-for="item of paginationData" :key="item.id">
      <RouterLink :to="`/shop/${item.id}`">
        <div class="cardImg">
          <img :src="item.imgLink" />
        </div>
        <div class="content">
          <div class="title">{{ item.title }}</div>
          <div class="price">NT {{ item.price }} 元</div>
          <div class="more">
            <p>更多資訊</p>
          </div>
        </div>
      </RouterLink>
    </div>
  </div> -->
</template>
<style scoped>
.productsCard {
  width: 80%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, 400px);
  gap: 10px;
  padding: 0 1rem 1rem;
}
.card {
  width: 400px;
  /* height: 500px; */
  height: min-content;
  color: black;
  padding: 16px;
  background-color: #fff;
  border-radius: 1rem;
  margin: 20px 0px 0;
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
  height: 350px;
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
  font-size: 20px;
  padding: 6px 14px;
  background-color: #a95;
  border-radius: 8px 4px;
  border: 0;
  outline: 0;
  color: #fff;
}
</style>
