import{d as a,r as s}from"./index-e07aa74a.js";const h=a("Shopping",()=>{const e=s([]),n=s([]),o=s([{id:1,title:"醬烤咖啡雞",price:666,content:"取用雲林古坑咖啡悶燒，使雞肉本身帶有淡淡的咖啡香，再利用特調醬汁烘烤，鎖住肉汁，使其外皮酥脆，內裡滑嫩",imgLink:new URL("/vue3-noodle-shop-website/assets/hanxiao-fgLqwfsekxk-unsplash-1c2e8a2a.jpg",self.location),type:"主餐",typeEN:"mainMeal"},{id:2,title:"塔香豬肉披薩",price:156,content:"使用台灣豬肉，與九層塔大火快炒，與披薩結合，九層塔與肉末的香，搭配莫扎瑞拉起司鹹，共舞一齣鹹香滋味",imgLink:new URL("/vue3-noodle-shop-website/assets/tammie-knight-fC4rGYxMqCY-unsplash-fa222119.jpg",self.location),type:"主餐",typeEN:"mainMeal"},{id:3,title:"米舒芙蕾",price:356,content:"使用台灣芋香米研磨後，與台灣土雞蛋，打製而成，是一道中西合併的甜點",imgLink:new URL("/vue3-noodle-shop-website/assets/lucas-oliveira-r8FScEcrMGI-unsplash-7cf5ecf3.jpg",self.location),type:"點心",typeEN:"dessert"},{id:4,title:"番茄雞蛋義大利麵",price:523,content:"番茄的酸甜味和雞蛋的濃郁口感相互融合，口感豐富多樣",imgLink:new URL("/vue3-noodle-shop-website/assets/mgg-vitchakorn-PLyJqEJVre0-unsplash-dfb03649.jpg",self.location),type:"主餐",typeEN:"mainMeal"},{id:5,title:"芋頭珍珠鮮奶茶",price:831,content:"選用梨山茶葉為茶底，搭配大甲芋頭製成的珍珠，讓經典的珍珠鮮奶茶，增添一道味覺層次",imgLink:new URL("/vue3-noodle-shop-website/assets/orimi-protograph-dHQQv-BKTjo-unsplash-9d40517d.jpg",self.location),type:"飲品",typeEN:"drinks"},{id:6,title:"火龍果燉牛肉",price:831,content:"選用屏東火龍果，利用火龍果天然的果酸，使牛肉軟嫩並帶出其鮮甜，是一道色香味俱全的創意湯品",imgLink:new URL("/vue3-noodle-shop-website/assets/hamide-jafari-kmwtxSOkQPc-unsplash-72d5b490.jpg",self.location),type:"湯品",typeEN:"soup"}]);return{shoppingCar:e,cardList:o,orderList:n,AddShoppingCar:t=>{const i=e.value.find(p=>p.id===t.id);i?i.number+=t.number:e.value.push(t)},removeShoppingCarItem:t=>{e.value=e.value.filter(i=>i.id!==t)},clearShoppingCar:()=>{e.value=[]},clearOrderList:()=>{n.value=[]}}});export{h as u};
