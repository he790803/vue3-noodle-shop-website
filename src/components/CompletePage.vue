<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useShoppingStore } from '../stores/shopping';
import MessageReminder from './MessageReminder.vue';

const shoppingStore = useShoppingStore();
const { clearShoppingCar } = useShoppingStore();
const { orderList } = storeToRefs(shoppingStore);
const router = useRouter();
const isShow = ref(false);

// 訂購者資訊
const userData = orderList.value?.map((item) => {
  return item.user;
})[0];
// 商品資訊
const itemData = orderList.value?.map((item) => {
  return item.item;
})[0];
// 整筆訂單的總金額
const allTotalPrice = computed(() => {
  let allTotalPrice = 0;
  itemData.forEach((item) => {
    allTotalPrice += item.price * item.number;
  });
  return allTotalPrice;
});
// 回到上一頁
const goBack = () => {
  router.go(-1);
};
// 送出訂單
const submitHandler = () => {
  isShow.value = true;

  setTimeout(() => {
    isShow.value = false;
  }, 2000);

  setTimeout(() => {
    router.push('/');
  }, 3000);
  // 清空購物車
  clearShoppingCar();
};
</script>

<template>
  <div class="completePage">
    <div class="orderInformation" v-if="userData">
      <div class="title">
        <h1>訂單資訊</h1>
      </div>
      <div class="information">
        <div class="userInformation">
          <div>姓名:{{ userData.name }}</div>
          <div>電話:{{ userData.phone }}</div>
          <div>地址:{{ userData.address }}</div>
          <div>付款方式:{{ userData.payMent }}</div>
        </div>
        <div class="itemInformation">
          <div class="item" v-for="item of itemData" :key="item.id">
            <div class="itemName">{{ item.name }}</div>
            <div class="itemNum">{{ item.number }}/份</div>
            <div class="itemPrice">{{ item.price * item.number }}元</div>
          </div>
          <p>總計:{{ allTotalPrice }}元</p>
          <div class="btnGroup">
            <button @click="goBack">回上一頁</button>
            <button @click="submitHandler">完成</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>尚無任何訂單!</div>
    <MessageReminder message="餐點訂購成功!!!" :isShow="isShow" />
  </div>
</template>
<style scoped>
.completePage {
  position: relative;
  top: 130px;
  z-index: 2;
  color: #fbf6f6;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
}
.orderInformation {
  background-color: #161b21;
  width: 70%;
  height: 70%;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  border: 6px #a95 solid;
}
.orderInformation .title {
  align-self: center;
  height: 15%;
}
.information {
  display: flex;
  height: 75%;
}
.userInformation,
.itemInformation {
  width: 50%;
}
.userInformation {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
.item {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.itemName {
  width: 60%;
}
.itemNum,
.itemPrice {
  width: 20%;
}
.itemInformation {
  display: flex;
  flex-direction: column;
}
.itemInformation p {
  border-top: 3px solid #a95;
  margin-top: 3rem;
  padding-top: 3rem;
  text-align: right;
}
.btnGroup {
  display: flex;
  align-items: end;
  height: 100%;
  justify-content: end;
}
button {
  width: 100px;
  height: 60px;
  border: 1px solid #a95;
  color: #a95;
  background-color: #fbf6f6;
  outline: none;
  transition: 0.5s;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 1rem;
}
button:hover {
  color: #fff;
  background-color: #a95;
}
@media screen and (max-width: 900px) {
  .information {
    flex-direction: column;
    justify-content: space-between;
  }
  .userInformation,
  .itemInformation {
    width: 100%;
  }
}
</style>
