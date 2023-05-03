<script setup>
// 接收父層傳進來的資料
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  isShow: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <Transition
    enter-active-class="animate__animated animate__lightSpeedInRight"
    leave-active-class="animate__animated animate__lightSpeedOutRight"
  >
    <div class="messageReminder" v-if="isShow">
      {{ props.message }}
    </div>
  </Transition>
</template>
<style scoped>
.messageReminder {
  position: fixed;
  top: 100px;
  right: 10%;
  height: 150px;
  width: 250px;
  background-color: #a95;
  border-radius: 5px;
  text-align: center;
  line-height: 150px;
}
</style>
