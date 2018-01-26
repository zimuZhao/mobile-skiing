<template>
  <div class="buy-detail">
    <h1 class="page-title">{{moduleName}}</h1>

    <v-swipe class="detail-swipe" :auto="0" :style="{width:imgSize + 'px',height:imgSize + 'px'}">
      <v-swipe-item v-for="(item,idx) in detail.imgs" :key="idx">
        <img :src="item.src"/>
      </v-swipe-item>
    </v-swipe>

    <div class="module-sty m-t-0">
      <div class="product-info-box">
        <div class="product-name">
          <span>{{detail.name}}</span>
        </div>
        <div class="pro-price">
          <span class="product-price-left">总价：¥ {{detail.total}}</span>
          <span class="product-price-right">定金：¥ {{detail.deposit}}</span>
        </div>
        <div class="m-t-10">
          <div class="gray-pro-info">
            <div>起购人次: <span>{{detail.count}}</span></div>
          </div>
          <div class="gray-pro-info">
            <div style="text-align: right">截止时间: <span>{{detail.deadline}}</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="module-sty">
      <div class="des-title">商品描述</div>
      <div class="describ">{{detail.goodsDescribe}}</div>
    </div>

    <div class="module-sty">
      <div class="des-title">规格参数</div>
      <div class="describ">{{detail.specifications}}</div>
    </div>

    <div class="h-51"/>
    <router-link :to="'/buy/deposit/' + this.$route.params.id">
      <div class="btn">立即参团</div>
    </router-link>

  </div>
</template>

<script>
  import {
    Swipe as vSwipe,
    SwipeItem as vSwipeItem
  } from 'mint-ui';
  import Service from './service';

  export default{
    name: 'BuyDetail',
    components: {
      vSwipe,
      vSwipeItem
    },
    data(){
      return {
        moduleName: '',
        imgSize: 0,
        detail: {}
      }
    },
    created() {
      this.imgSize = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    },
    mounted(){
      console.log(this.$route.params);
      this.serviceGet();
    },
    methods: {
      serviceGet() {
        const _this = this;
//        _this.spinFlag = true;

        Service.get({}).then((data) => {
          _this.moduleName = data.moduleName;
          _this.detail = data.moduleData;
//          _this.spinFlag = false;

        });
      }
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
        margin: 10px;

        .product-name {
          text-align: center;
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

        .pro-price {
          margin-top: 10px;
          text-align: center;
          font-size: 0;
        }

        .product-price-left {
          color: #ff6363;
          border: 1px solid #ff6363;
          padding: 1px 3px;
          margin: 0;
          font-size: 12px;
        }

        .product-price-right {
          background: #ff6363;
          margin: 0;
          padding: 2px 3px;
          color: #fff;
          font-size: 12px;
        }

        .gray-pro-info {
          color: #848689;
          font-size: 13px;
          display: inline-block;
          width: 48%;
          margin-top: 8px;
          overflow: hidden;
          height: 15px;
          line-height: 16px;
        }

        .m-t-10 {
          margin-top: 10px;
        }

        .pull-left {
          float: left;
        }

        .pull-right {
          float: right;
        }

      }

      .des-title {
        padding: 5px;
        font-size: 1.2em;
        border-bottom: 1px solid #d7d7d7;
      }

      .describ {
        color: #000;
        padding: 5px;
      }
    }

    .m-t-0 {
      margin-top: 0;
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
      background-color: #ff728c;
      z-index: 1;
    }

    .h-51 {
      height: 51px;
    }

  }
</style>
