<template>
  <div class="buy-detail">
    <h1 class="page-title">{{moduleName}}</h1>

    <v-swipe class="detail-swipe" :auto="0" :style="{width:imgSize + 'px',height:imgSize + 'px'}">
      <v-swipe-item v-for="(item,idx) in detail.imgs" :key="idx">
        <img :src="item.src"/>
      </v-swipe-item>
    </v-swipe>

    <div class="module-sty">
      <div class="product-info-box">
        <div class="product-name">
          <span>{{detail.name}}</span>
        </div>
        <div class="gray-pro-info">教学类型: {{detail.type}}</div>
        <div class="gray-pro-info">等级资质: {{detail.level}}</div>
        <div class="gray-pro-info">证书：{{detail.certificate}}</div>
        <div class="gray-pro-info">联系方式: {{detail.phone}}</div>
        <!--<div class="gray-pro-info">预约时间: {{item.count}}</div>-->
        <div class="gray-pro-info">价格: ¥ {{detail.price}} / h</div>
      </div>
    </div>

    <div class="module-sty">
      <div>教练介绍</div>
      <div>{{detail.coachDescribe}}</div>
    </div>

    <div class="h-51"/>
    <router-link :to="'/coach/book/' + this.$route.params.id">
      <div class="btn">立即预约</div>
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
    name: 'CoachDetail',
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

    .h-51 {
      height: 51px;
    }

  }
</style>
