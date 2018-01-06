<template>
  <div class="buy-detail">
    <h1 class="page-title">商品详情</h1>

    <v-swipe class="detail-swipe" :auto="0" :style="{width:imgSize + 'px',height:imgSize + 'px'}">
      <v-swipe-item v-for="item in detailImgs">
        <img :src="item.src"/>
      </v-swipe-item>
    </v-swipe>

    <div class="module-sty">
      <div>商品名最多不超过18个字~</div>
      <div>
        总价：¥<span>299.99</span>
        定金：¥<span>299.99</span>
      </div>
      <div>起购人次：10000</div>
      <div>截止时间：2018-01-02 22:00:00</div>
    </div>

    <div class="module-sty">
      <span>商品描述</span>
      <span>详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述</span>
    </div>

    <div class="module-sty">
      <span>规格参数</span>
      <span>详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述</span>
    </div>

    <div style="height: 41px"/>
    <div class="btn">立即参团</div>

  </div>
</template>

<script>
  import {
    Swipe as vSwipe,
    SwipeItem as vSwipeItem
  } from 'mint-ui';

  export default{
    name: 'BuyDetail',
    components: {
      vSwipe,
      vSwipeItem
    },
    data(){
      return {
        imgSize: 0,
        detailImgs: [{
          src: require('../../assets/images/home-swipe1.jpg')
        }, {
          src: require('../../assets/images/home-swipe1.jpg')
        }, {
          src: require('../../assets/images/home-swipe1.jpg')
        }, {
          src: require('../../assets/images/home-swipe1.jpg')
        }, {
          src: require('../../assets/images/home-swipe1.jpg')
        }]
      }
    },
    created() {
      this.imgSize = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
  }
</script>

<style scoped lang="less">

  .buy-detail {

    .detail-swipe {
      max-width: 640px;
      max-height: 640px;
      margin: auto;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .module-sty {
      margin-top: 10px;
      background-color: #fff;
      border: 1px solid #eee;
    }

    .btn {
      position: fixed;
      width: 100%;
      height: 41px;
      right: 0;
      bottom: 0;
      left: 0;
      color: #fff;
      line-height: 41px;
      font-size: 18px;
      text-align: center;
      background-color: #ef4f4f;
      z-index: 1;
    }

  }
</style>
