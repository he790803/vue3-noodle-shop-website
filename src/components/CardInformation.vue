<script setup>
import { ref, reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useShoppingStore } from '../stores/shopping';
import NumInput from './NumInput.vue';
import MessageReminder from './MessageReminder.vue';

const shoppingStore = useShoppingStore();
const { AddShoppingCar } = useShoppingStore();
const { cardList } = storeToRefs(shoppingStore);
const route = useRoute();
const itemId = route.params.id * 1;

// 依據params傳入的ID，顯示對應的商品
const cardInformation = cardList.value.filter((card) => {
  return card.id === itemId;
});
// 欲傳入NumInput Component的預設數量
const buyNumber = ref(1);
const isShow = ref(false);
let item = reactive({});

// 商品資訊提示欄
const showMessageReminderHandler = () => {
  isShow.value = true;
  setTimeout(() => {
    isShow.value = false;
  }, 2000);
};
// 將商品加入購物車(Pinia)
const addShoppingCarHandler = () => {
  showMessageReminderHandler();
  item = {
    id: cardInformation[0].id,
    name: cardInformation[0].title,
    number: buyNumber.value,
    price: cardInformation[0].price,
    imgLink: cardInformation[0].imgLink,
  };
  AddShoppingCar(item);
};

// 接受NumInput 子Component傳回來的數值
const numValue = (res) => {
  buyNumber.value = res;
};
</script>
<template>
  <div class="cardInformation" v-for="card of cardInformation" :key="card.id">
    <div class="pic">
      <img :src="card.imgLink" />
    </div>
    <div class="content">
      <div class="title">
        <h1>{{ card.title }}</h1>
        <span>{{ card.price * buyNumber }}元</span>
      </div>
      <div class="description">
        <p>
          「選用台灣土雞，搭配雞心辣椒乾大火翻炒，淋上醬油增香，吃的時候配上油炸蒜片，吃起來又香又辣。本餐點付白飯。」
        </p>
      </div>
      <div class="numInput">
        <NumInput @numControlHandler="numValue" :defineBuyNum="buyNumber" />
      </div>
      <div class="buyBtn">
        <button @click="addShoppingCarHandler"><font-awesome-icon :icon="['fas', 'cart-shopping']" bounce /></button>
      </div>
    </div>

    <MessageReminder message="餐點以成功加入購物車!!!" :isShow="isShow" />
  </div>
</template>
<style scoped>
.cardInformation {
  display: flex;
  justify-content: center;
  padding: 1rem;
  height: 100%;
  align-items: center;
}
.pic {
  width: 500px;
  height: 700px;
}
.pic img {
  width: 100%;
  height: 100%;
  vertical-align: bottom;
  border-radius: 10px;
}
.content {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
  max-height: 450px;
  border-radius: 10px;
  padding: 30px;
  margin-left: -255px;
  align-self: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.571);
  color: #fff;
}
.content .title,
.content .description {
  display: flex;
  align-items: center;
}
.content .title {
  height: 100px;
  justify-content: space-between;
}
.content .description {
  min-height: 120px;
}
.numInput {
  height: 50px;
}

.buyBtn {
  height: 50px;
  display: flex;
  align-items: center;
}
.buyBtn button {
  width: 100%;
  height: 70%;
  font-size: 1.2rem;
  outline: none;
  border: none;
  /* background-color: rgb(227, 196, 74); */
  background-color: #a95;
  color: #fff;
  border-radius: 6px;

  position: relative;
  cursor: pointer;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s; /* Safari */
}
.buyBtn button:after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 40px rgb(227, 196, 74);
}

.buyBtn button:active:after {
  box-shadow: 0 0 0 0 rgb(227, 196, 74);
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  opacity: 1;
  transition: 0s;
}

.buyBtn button:active {
  top: 1px;
}
</style>
