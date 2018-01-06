<template>
  <div class="buy-detail">
    <h1 class="page-title">商品详情</h1>

    <v-swipe class="detail-swipe" :auto="0" :style="{width:imgSize + 'px',height:imgSize + 'px'}">
      <v-swipe-item v-for="item in detailImgs">
        <img :src="item.src"/>
      </v-swipe-item>
    </v-swipe>

    <div class="module-sty">
      <div class="product-info-box">
        <div class="product-name">
          <span>商品名最长不超过18个字</span>
        </div>
        <div class="product-price-m">总价：¥ 499.00</div>
        <div class="product-price-m">定金：¥ 100.00</div>
        <div class="gray-pro-info">起购人次: <span>10000</span></div>
        <div class="gray-pro-info">截止时间: <span>2018-01-31 00:00:00</span></div>
      </div>
    </div>

    <div class="module-sty">
      <div>商品描述</div>
      <div>详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述</div>
    </div>

    <div class="module-sty">
      <div>规格参数</div>
      <div>详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述</div>
    </div>

    <div style="height: 41px"/>
    <router-link to="/buy/deposit">
      <div class="btn">立即参团</div>
    </router-link>

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

      .product-info-box {
        position: relative;
        flex: 1;
        height: 100%;
        margin-left: 10px;
        padding-top: 5px;

        .product-name {
          display: flex;
          margin-bottom: 5px;
          color: #232326;
          font-size: 15px;
          line-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-word;
        }

        .gray-icon {
          height: 29px;
          margin: 0;
          overflow: hidden;
          line-height: 29px;
        }

        .product-price-m {
          width: 100%;
          height: 20px;
          margin-right: 10px;
          font-size: 12px;
          color: #f23030;
          line-height: 20px;
          overflow: hidden;

          span {
            font-size: 15px;
          }
        }

        .gray-pro-info {
          color: #848689;
          font-size: 13px;
          display: -webkit-box;
          display: box;
          margin-top: 8px;
          overflow: hidden;
          height: 15px;
          line-height: 16px;
          -webkit-box-align: center;
          box-align: center;
        }

      }
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
