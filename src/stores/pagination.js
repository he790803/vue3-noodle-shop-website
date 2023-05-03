import { ref, computed } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { useShoppingStore } from './shopping';

export const usePaginationStore = defineStore('pagination', () => {
  // 初始頁數
  const page = ref(1);
  // 一頁顯示的數量
  const perPage = ref(6);
  const type = ref('all');
  const shoppingStore = useShoppingStore();

  const { cardList } = storeToRefs(shoppingStore);

  const filterDataHandler = (val) => {
    type.value = val;
  };

  // 先篩選餐點類型
  const filterData = computed(() => {
    if (type.value === 'all') {
      return cardList.value;
    } else if (type.value === 'mainMeal') {
      return cardList.value.filter((card) => {
        return card.typeEN === 'mainMeal';
      });
    } else if (type.value === 'dessert') {
      return cardList.value.filter((card) => {
        return card.typeEN === 'dessert';
      });
    } else if (type.value === 'soup') {
      return cardList.value.filter((card) => {
        return card.typeEN === 'soup';
      });
    } else if (type.value === 'drinks') {
      return cardList.value.filter((card) => {
        return card.typeEN === 'drinks';
      });
    }
  });
  // 將篩選後的資料總數，切分頁數
  const paginationData = computed(() => {
    return filterData.value.slice((page.value - 1) * perPage.value, page.value * perPage.value);
  });

  return { perPage, paginationData, filterDataHandler, type };
});
