<template>
  <v-app>
    <div class="page404">
      <svg
        width="380px"
        height="500px"
        viewBox="0 0 837 1045"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          sketch:type="MSPage"
        >
          <path
            id="Polygon-1"
            d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
            fill="#007FB2"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          />
          <path
            id="Polygon-2"
            d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
            fill="#EF4A5B"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          />
          <path
            id="Polygon-3"
            d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
            fill="#795D9C"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          />
          <path
            id="Polygon-4"
            d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
            fill="#F2773F"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          />
          <path
            id="Polygon-5"
            d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
            fill="#36B455"
            stroke-width="6"
            sketch:type="MSShapeGroup"
          />
        </g>
      </svg>
      <div class="message-box text-center">
        <h1 class="">
          404
        </h1>
        <p>صفحه مورد نظر پیدا نشد</p>
        <div class="buttons-con d-flex justify-center">
          <div class="action-link-wrap d-flex">
            <v-btn
              class="secondary"
              min-width="140"
              height="45"
              rounded
              link
              target="_blank"
              href="https://asrevira.com/"
            >
              برو به عصر ویرا
            </v-btn>
            <v-btn
              onclick="history.back(-1)"
              class="primary d-block mx-3"
              min-width="140"
              height="45"
              rounded
            >
              برگشت
            </v-btn>
            <!-- <a onclick="history.back(-1)" class="link-button link-back-button">برگشت</a>
      <a href="https://asrevira.com/" class="link-button">برو به عصر ویرا</a> -->
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.page404 {
  background-color: #2f3242;
  width: 100vw;
  height: 100vh;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -400px;
  }
  .message-box {
    height: 200px;
    width: 380px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: 50px;
    color: #fff;
    font-family: Roboto;
    font-weight: 300;
  }
  .message-box h1 {
    font-size: 60px;
    line-height: 46px;
    margin-bottom: 40px;
  }
  .buttons-con .action-link-wrap {
    margin-top: 40px;
  }
  // .buttons-con .action-link-wrap a {
  //   background: #68c950;
  //   padding: 8px 25px;
  //   border-radius: 4px;
  //   color: #FFF;
  //   font-weight: bold;
  //   font-size: 14px;
  //   transition: all 0.3s linear;
  //   cursor: pointer;
  //   text-decoration: none;
  //   margin-right: 10px
  // }
  // .buttons-con .action-link-wrap a:hover {
  //   background: #5A5C6C;
  //   color: #fff;
  // }

  #Polygon-1,
  #Polygon-2,
  #Polygon-3,
  #Polygon-4,
  #Polygon-4,
  #Polygon-5 {
    animation: float 1s infinite ease-in-out alternate;
  }
  #Polygon-2 {
    animation-delay: 0.2s;
  }
  #Polygon-3 {
    animation-delay: 0.4s;
  }
  #Polygon-4 {
    animation-delay: 0.6s;
  }
  #Polygon-5 {
    animation-delay: 0.8s;
  }

  @keyframes float {
    100% {
      transform: translateY(20px);
    }
  }
  @media (max-width: 450px) {
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -250px;
      margin-left: -190px;
    }
    .message-box {
      top: 50%;
      left: 50%;
      margin-top: -100px;
      margin-left: -190px;
      text-align: center;
    }
  }
}
</style>
