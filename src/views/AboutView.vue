<script setup></script>

<template>
  <main>
    <div class="leftPage page"></div>
    <div class="rightPage page">
      <div class="content">
        <div class="contactUs">
          <h1>聯絡我們</h1>
          <p>新北市淡水區水源街6段66號</p>
        </div>
        <div class="openingTime">
          <h1>營業時間</h1>
          <p>週二至週五 11:00 ~ 21:00</p>
          <p>週六週日 11:00 ~ 22:00</p>
        </div>
      </div>
      <div class="footer">
        <p>copyright &copy 2023</p>
        <p>學習使用，無任何商業用途</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  display: flex;
  background-color: #161b21;
  position: absolute;
  top: 100px;
  z-index: 2;
}
.page {
  height: calc(100vh - 100px);
}
.leftPage {
  width: 40%;
  background-image: url('../assets/images/leftPage/fifthPage/qui-nguyen-cnTdKzMOBns-unsplash.jpg');
  background-size: cover;
}
.rightPage {
  width: 60%;
}
.rightPage .content {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.rightPage .title {
  color: aliceblue;
  font-size: 4rem;
  letter-spacing: 20px;
  border-bottom: #a95 3px solid;
  padding-bottom: 5px;
  margin-bottom: 1rem;
}
.rightPage .contactUs,
.rightPage .openingTime {
  text-align: center;
  color: aliceblue;
  line-height: 50px;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #e6e6e6;
  font-size: 1.2rem;
  height: 10%;
  background-color: #a95;
}
.footer p {
  padding: 0.3rem 0;
}
@media screen and (max-width: 900px) {
  .leftPage {
    width: 0%;
  }
  .rightPage {
    width: 100%;
  }
}
</style>
