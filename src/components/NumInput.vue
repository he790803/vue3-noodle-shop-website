<script setup>
import { ref } from 'vue';
// 接收父層傳進來的初始數量，以及第幾項商品編號
const props = defineProps({
  defineBuyNum: {
    type: Number,
    required: true,
  },
  index: {
    type: Number,
    required: false,
  },
});
const emit = defineEmits(['numControlHandler']);

const buyNum = ref(0);
buyNum.value = props.defineBuyNum;

const maxNum = ref(100);
const increment = () => {
  if (buyNum.value < maxNum.value) {
    buyNum.value += 1;
    emit('numControlHandler', buyNum.value, props.index);
  }
};
const reduce = () => {
  if (buyNum.value > 1) {
    buyNum.value -= 1;
    emit('numControlHandler', buyNum.value, props.index);
  }
};
const changeNumHandler = () => {
  buyNum.value = buyNum.value;
  if (buyNum.value <= 0) buyNum.value = 1;
  emit('numControlHandler', buyNum.value, props.index);
  console.log(buyNum.value);
};
</script>
<template>
  <div class="numBtn">
    <button @click="reduce">-</button>
    <input
      type="number"
      id="numberArr"
      @keyup.enter="changeNumHandler"
      v-model="buyNum"
      oninput="value=value.replace(/^(0+)|[^\d]+/g, '')"
    />
    <button @click="increment">+</button>
  </div>
</template>
<style scoped>
.numBtn {
  display: flex;
  align-items: center;
  height: 100%;
}
.numBtn input {
  width: 70%;
  height: 70%;
  margin: 0 5%;
  text-align: center;
  border: none;
  outline: none;
  background-color: rgb(189, 194, 199);
}
.numBtn button {
  width: 10%;
  height: 80%;
  font-size: 1.5rem;
  color: azure;
  /* background-color: rgb(227, 196, 74); */
  background-color: #a95;
  outline: none;
  border: none;
  border-radius: 6px;

  position: relative;
  cursor: pointer;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s; /* Safari */
}

.numBtn button:after {
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

.numBtn button:active:after {
  box-shadow: 0 0 0 0 rgb(227, 196, 74);
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  opacity: 1;
  transition: 0s;
}

.numBtn button:active {
  top: 1px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
