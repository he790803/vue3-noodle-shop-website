<script setup>
import { storeToRefs } from 'pinia';
import { useShoppingStore } from '../stores/shopping';
import { usePaginationStore } from '../stores/pagination';

const shoppingStore = useShoppingStore();
const { cardList } = storeToRefs(shoppingStore);

const paginationStore = usePaginationStore();
const { perPage } = storeToRefs(paginationStore);
</script>
<template>
  <div class="paginationBtn">
    <button v-for="item of Math.ceil(cardList.length / perPage)" :key="item">{{ item }}</button>
  </div>
</template>
<style scoped></style>
