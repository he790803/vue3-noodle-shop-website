import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useFirstTimeStore = defineStore('firstTime', () => {
  const isFirstTime = ref(true);

  const changeFirstTimeHandler = () => {
    isFirstTime.value = false;
  };

  return { isFirstTime, changeFirstTimeHandler };
});
