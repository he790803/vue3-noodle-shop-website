import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useShoppingStore = defineStore('Shopping', () => {
  const shoppingCar = ref([]);
  const orderList = ref([]);
  const cardList = ref([
    {
      id: 1,
      title: '醬烤咖啡雞',
      price: 360,
      content: '取用雲林古坑咖啡悶燒，使雞肉本身帶有淡淡的咖啡香，再利用特調醬汁烘烤，鎖住肉汁，使其外皮酥脆，內裡滑嫩',
      imgLink: new URL(`../assets/images/rightPage/fourthPage/hanxiao-fgLqwfsekxk-unsplash.jpg`, import.meta.url),
      type: '主餐',
      typeEN: 'mainMeal',
      isLoading: true,
    },
    {
      id: 2,
      title: '塔香豬肉披薩',
      price: 280,
      content: '使用台灣豬肉，與九層塔大火快炒，與披薩結合，九層塔與肉末的香，搭配莫扎瑞拉起司鹹，共舞一齣鹹香滋味',
      imgLink: new URL(`../assets/images/rightPage/fourthPage/tammie-knight-fC4rGYxMqCY-unsplash.jpg`, import.meta.url),
      type: '主餐',
      typeEN: 'mainMeal',
      isLoading: true,
    },
    {
      id: 3,
      title: '米舒芙蕾',
      price: 155,
      content: '使用台灣芋香米研磨後，與台灣土雞蛋，打製而成，是一道中西合併的甜點',
      imgLink: new URL(
        `../assets/images/rightPage/fourthPage/lucas-oliveira-r8FScEcrMGI-unsplash.jpg`,
        import.meta.url
      ),
      type: '點心',
      typeEN: 'dessert',
      isLoading: true,
    },
    {
      id: 4,
      title: '番茄雞蛋義大利麵',
      price: 246,
      content: '番茄的酸甜味和雞蛋的濃郁口感相互融合，口感豐富多樣',
      imgLink: new URL(
        `../assets/images/rightPage/fourthPage/mgg-vitchakorn-PLyJqEJVre0-unsplash.jpg`,
        import.meta.url
      ),
      type: '主餐',
      typeEN: 'mainMeal',
      isLoading: true,
    },
    {
      id: 5,
      title: '芋頭珍珠鮮奶茶',
      price: 75,
      content: '選用梨山茶葉為茶底，搭配大甲芋頭製成的珍珠，讓經典的珍珠鮮奶茶，增添一道味覺層次',
      imgLink: new URL(
        `../assets/images/rightPage/fourthPage/orimi-protograph-dHQQv-BKTjo-unsplash.jpg`,
        import.meta.url
      ),
      type: '飲品',
      typeEN: 'drinks',
      isLoading: true,
    },
    {
      id: 6,
      title: '火龍果燉牛肉',
      price: 320,
      content: '選用屏東火龍果，利用火龍果天然的果酸，使牛肉軟嫩並帶出其鮮甜，是一道色香味俱全的創意湯品',
      imgLink: new URL(`../assets/images/rightPage/fourthPage/hamide-jafari-kmwtxSOkQPc-unsplash.jpg`, import.meta.url),
      type: '湯品',
      typeEN: 'soup',
      isLoading: true,
    },
  ]);

  const AddShoppingCar = (item) => {
    // 先檢查購物車有無相同品項
    const existingItem = shoppingCar.value.find((carItem) => carItem.id === item.id);
    // 如果有就更新數量
    if (existingItem) {
      existingItem.number += item.number;
    } else {
      // 如果沒有就加入完整品項
      shoppingCar.value.push(item);
    }
  };

  const removeShoppingCarItem = (id) => {
    shoppingCar.value = shoppingCar.value.filter((item) => {
      return item.id !== id;
    });
  };

  const clearShoppingCar = () => {
    shoppingCar.value = [];
  };

  const clearOrderList = () => {
    orderList.value = [];
  };

  return { shoppingCar, cardList, orderList, AddShoppingCar, removeShoppingCarItem, clearShoppingCar, clearOrderList };
});
