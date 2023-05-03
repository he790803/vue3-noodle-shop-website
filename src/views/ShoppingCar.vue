<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { gsap, Expo, Elastic } from 'gsap';
import { storeToRefs } from 'pinia';
import { useShoppingStore } from '../stores/shopping';
import NumInput from '../components/NumInput.vue';

// Router
const router = useRouter();

// Pinia
const shoppingStore = useShoppingStore();
const { removeShoppingCarItem } = useShoppingStore();
const { shoppingCar, orderList } = storeToRefs(shoppingStore);

// 自定義變數
const background = ref(null);
const userName = ref('');
const userNameErrorMessage = ref('');
const userNameError = ref(false);
const userPhone = ref('');
const userPhoneErrorMessage = ref('');
const userPhoneError = ref(false);
const userAddress = ref('');
const userAddressErrorMessage = ref('');
const userAddressError = ref(false);
const userEmail = ref('');
const userEmailErrorMessage = ref('');
const userEmailError = ref(false);
const userPayment = ref('');
const userPaymentErrorMessage = ref('');
const userPaymentError = ref(false);
// const removeItem = ref(false);
const removing = ref(false);
const removingId = ref(null);

// 送出訂單
const submitHandler = () => {
  if (shoppingCar.value.length <= 0) {
    alert('購物車是空的喔!');
  } else {
    orderList.value.push({
      user: {
        name: userName.value,
        phone: userPhone.value,
        address: userAddress.value,
        email: userEmail.value,
        payMent: userPayment.value,
      },
      item: shoppingCar.value,
    });
    router.push('/complete');
  }
};
// 商品數量控制
const numValue = (res, id) => {
  shoppingCar.value.map((item) => {
    if (item.id === id) {
      item.number = res;
    }
  });
};
// 移除品項
const removeHandler = (id) => {
  removing.value = true;
  removingId.value = id;
  setTimeout(() => {
    removeShoppingCarItem(id);
    removing.value = false;
    removingId.value = null;
  }, 500);
};
// 確保動畫完品項已移除，需在動畫結束後再做一次確認(使用@animationend事件)
const handleAnimationEnd = (id) => {
  if (removing.value && removingId.value === id) {
    removeShoppingCarItem(id);
    removing.value = false;
    removingId.value = null;
  }
};
// 整筆訂單的總金額
const allTotalPrice = computed(() => {
  let allTotalPrice = 0;
  shoppingCar.value.forEach((item) => {
    allTotalPrice += item.price * item.number;
  });
  return allTotalPrice;
});
// 送出訂單前，檢查是否有資料輸入錯誤
const submitCheck = computed(() => {
  if (!userName.value || userNameErrorMessage.value) {
    return false;
  } else {
    return true;
  }
});
// 回到上一頁
const goBack = () => {
  router.go(-1);
};
// 確認是否有填姓名
const checkUserName = () => {
  if (!userName.value) {
    userNameError.value = true;
    userNameErrorMessage.value = '收件人不得為空!';
  } else {
    userNameError.value = false;
    userNameErrorMessage.value = '';
  }
};
// 確認是否有填手機號碼，以及確認格式有無錯誤
const checkUserPhone = () => {
  const mobileReg = /^(09)[0-9]{8}$/;
  if (!mobileReg.test(userPhone.value)) {
    userPhoneError.value = true;
    userPhoneErrorMessage.value = '手機格式錯誤!';
  } else {
    userPhoneError.value = false;
    userPhoneErrorMessage.value = '';
  }
};
// 確認是否有填地址
const checkUserAddress = () => {
  if (!userAddress.value) {
    userAddressError.value = true;
    userAddressErrorMessage.value = '收件地址不得為空!';
  } else {
    userAddressError.value = false;
    userAddressErrorMessage.value = '';
  }
};
// 確認是否有填Email，以及確認格式有無錯誤
const checkUserEmail = () => {
  const regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!regex.test(userEmail.value)) {
    userEmailError.value = true;
    userEmailErrorMessage.value = 'Email格式錯誤!';
  } else {
    userEmailError.value = false;
    userEmailErrorMessage.value = '';
  }
};
// 確認是否有選付款方式
const checkUserPayment = () => {
  if (!userPayment.value) {
    userPaymentError.value = true;
    userPaymentErrorMessage.value = '請選擇付款方式!';
  } else {
    userPaymentError.value = false;
    userPaymentErrorMessage.value = '';
  }
};

// 頁面載入時，帶入背景色
onMounted(() => {
  gsap.to(background.value, {
    duration: 1.5,
    width: '100%',
    ease: Expo.easeInOut,
  });
});

watch(userName, checkUserName, { immediate: false, deep: false, debounce: 500 });
watch(userPhone, checkUserPhone, { immediate: false, deep: false, debounce: 500 });
watch(userAddress, checkUserAddress, { immediate: false, deep: false, debounce: 500 });
watch(userEmail, checkUserEmail, { immediate: false, deep: false, debounce: 500 });
watch(userPayment, checkUserPayment, { immediate: false, deep: false, debounce: 500 });
</script>
<template>
  <div class="ShoppingCar" ref="background">
    <div class="userSection">
      <div class="mainTitle">
        <h1>收件者資料</h1>
      </div>
      <div class="userInformation">
        <div class="inputBox userName">
          <!-- <label for="userName">姓名:</label> -->
          <input type="text" id="userName" required="required" v-model="userName" @blur="checkUserName" />
          <label for="userName">姓名</label>
          <span v-if="userNameError">{{ userNameErrorMessage }}</span>
        </div>
        <div class="inputBox userPhone">
          <!-- <label for="userPhone">電話:</label> -->
          <input
            type="tel"
            name="userPhone"
            id="userPhone"
            required="required"
            v-model="userPhone"
            @blur="checkUserPhone"
          />
          <label for="userPhone">電話</label>
          <span v-if="userPhoneError">{{ userPhoneErrorMessage }}</span>
        </div>
        <div class="inputBox userAddress">
          <input type="text" name="userAddress" required="required" v-model="userAddress" @blur="checkUserAddress" />
          <label for="userAddress">收件地址</label>
          <span v-if="userAddressError">{{ userAddressErrorMessage }}</span>
        </div>
        <div class="inputBox userEmail">
          <input type="text" name="userEmail" required="required" v-model="userEmail" @blur="checkUserEmail" />
          <label for="userEmail">電子郵件</label>
          <span v-if="userEmailError">{{ userEmailErrorMessage }}</span>
        </div>
        <div class="inputBox userPayment">
          <select name="userPayment" id="userPayment" v-model="userPayment" @blur="checkUserPayment">
            <option disabled="disabled" selected="selected" value="">付款方式</option>
            <option value="visa">Visa</option>
            <option value="linePay">LinePay</option>
            <option value="paypal">Paypal</option>
          </select>
          <label for="userPayment">付款方式</label>
          <span v-if="userPaymentError">{{ userPaymentErrorMessage }}</span>
        </div>
      </div>
      <div class="submitBtn">
        <button @click="goBack">回上一頁</button>
        <button :disabled="(disabled = !submitCheck)" @click="submitHandler">送出訂單</button>
      </div>
    </div>

    <div class="itemSection">
      <div class="itemDescription">
        <div class="mainTitle">
          <h1>購物車</h1>
          <p>已選購{{ shoppingCar.length }}項</p>
        </div>
        <div class="itemList">
          <div
            class="item"
            v-for="(item, index) of shoppingCar"
            :key="item.id"
            :class="{ animate__animated: removing, animate__bounceOutRight: removing && removingId === item.id }"
            @animationend="handleAnimationEnd(item.id)"
          >
            <div class="itemImg">
              <img :src="item.imgLink" />
            </div>
            <div class="itemInformation">
              <div class="title">
                <div>{{ item.name }}</div>
              </div>
              <div class="itemTotalPriceGroup">
                <div class="itemNum">
                  <NumInput @numControlHandler="numValue" :defineBuyNum="item.number" :index="item.id" />
                </div>
                <div class="itemTotalPrice">
                  <p>單價:{{ item.price }}元</p>
                  <p>小計:{{ item.price * item.number }}元</p>
                </div>
              </div>
              <div class="cancelBtn" @click="() => removeHandler(item.id)">X</div>
            </div>
          </div>
        </div>
      </div>
      <div class="totalPrice">
        <p>總計:{{ allTotalPrice }}元</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ShoppingCar {
  position: absolute;
  top: 130px;
  width: 0%;
  z-index: 2;
  color: beige;
  display: flex;
  justify-content: center;
  background-color: #161b21;
}
/* 收件者表單 start*/
.userSection {
  width: 30%;
  height: 80%;
  padding: 1rem;
}
.userSection .mainTitle {
  display: flex;
  height: 10%;
  align-items: center;
}
.userInformation {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.userName,
.userPhone {
  width: 45%;
}
.userAddress {
  width: 100%;
}
.userEmail {
  width: 60%;
}
.userPayment {
  width: 35%;
}
.inputBox {
  position: relative;
  margin: 1rem 0;
}
.inputBox span {
  color: firebrick;
}
.inputBox input,
select {
  width: 100%;
  padding: 20px;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background-color: #161b21;
  border-radius: 5px;
  outline: none;
  color: #fff;
  font-size: 1rem;
  transition: 0.5s;
}
.inputBox label {
  position: absolute;
  left: 0;
  padding: 20px;
  pointer-events: none;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.25);
  transition: 0.5s;
}
.inputBox input:valid ~ label,
.inputBox input:focus ~ label,
select:valid ~ label,
select:focus ~ label {
  color: #a95;
  transform: translateX(10px) translateY(-7px);
  font-size: 0.65rem;
  padding: 0 10px;
  background-color: #161b21;
  border-left: 1px solid #a95;
  border-right: 1px solid #a95;
  letter-spacing: 0.2rem;
}

.inputBox input:valid,
.inputBox input:focus,
select:focus,
select:valid {
  border: 1px solid #a95;
}
/* 讓自動填入時不改變背景色 */
input:-internal-autofill-previewed,
input:-internal-autofill-selected {
  -webkit-text-fill-color: #fff;
  transition: background-color 5000s ease-out 0.5s;
}

.userSection .submitBtn {
  display: flex;
  justify-content: space-between;
  align-items: end;
  height: 120px;
}
.userSection .submitBtn button:hover {
  color: #fff;
  background-color: #a95;
}
.userSection .submitBtn button {
  width: 100px;
  height: 60px;
  border: 1px solid #a95;
  color: #a95;
  background-color: #161b21;
  outline: none;
  transition: 0.5s;
  border-radius: 5px;
  cursor: pointer;
}
/* 收件者表單 end*/

/* 購物清單 start */
.itemSection {
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
}

.itemDescription {
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-x: hidden;
}
.itemDescription .mainTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
}
.itemList {
  border-top: 5px solid #a95;
  border-bottom: 5px solid #a95;
  max-height: 90%;
  overflow-y: auto;
}
.item {
  display: flex;
  padding: 1rem;
  position: relative;
  animation-duration: 1s;
  animation-delay: 0.1s;
}
.cancelBtn {
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 2;
  border: 1px solid #fff;
  color: #fff;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 5px;
}
.cancelBtn:hover {
  background-color: rgb(229, 64, 97);
  color: #fff;
}
.item .itemImg {
  width: 40%;
  height: 130px;
}
.item .itemImg img {
  width: 100%;
  height: 100%;
}
.itemInformation {
  display: flex;
  flex-direction: column;
  background-color: cadetblue;
  width: 100%;
  height: 130px;
  justify-content: space-between;
}
.title {
  padding: 1rem;
}
.itemTotalPriceGroup {
  padding: 1rem;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: end;
}
.itemNum {
  width: 70%;
  height: 100%;
}
.itemTotalPrice {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
.totalPrice {
  height: 10%;
  padding: 1rem;
  font-size: 1.5rem;
  align-self: flex-end;
}
/* 購物清單 end */

@media screen and (max-width: 1000px) {
  .ShoppingCar {
    flex-direction: column;
    align-items: center;
  }
  .userSection,
  .itemSection {
    width: 100%;
  }
}
</style>
