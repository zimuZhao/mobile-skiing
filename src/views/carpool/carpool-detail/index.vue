<template>
  <div class="buy-detail">
    <h1 class="page-title">{{moduleName}}</h1>

    <div class="module-sty">
      <div class="product-info-box">
        <div class="product-name">
          <span>{{detail.destination}}</span>
        </div>
        <div class="product-name">
          <span>{{detail.date}}</span>
        </div>
        <div class="product-price-m">{{detail.name}}</div>
        <div class="product-price-m">出发地：{{detail.departure}}</div>
        <div class="gray-pro-info">价格（¥）/人: {{detail.price}} / h</div>
        <v-progress :value="Number(detail.review)" class="pro-review">
          <div slot="start">评分：</div>
          <div slot="end">{{detail.review}}</div>
        </v-progress>
      </div>
    </div>

    <div class="module-sty">
      <div>活动描述</div>
      <div>{{detail.tripDescribe}}</div>
    </div>

    <div class="module-sty">
      <div>车辆描述</div>
      <div>{{detail.carDescribe}}</div>
    </div>

    <div class="h-51"/>
    <div class="btn" @click="carClick">拼车申请</div>

  </div>
</template>

<script>
  import {
    Progress as vProgress,
    Toast as vToast
  } from 'mint-ui';
  import Service from './service';

  export default{
    name: 'CarpoolDetail',
    components: {
      vProgress
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
      },
      carClick(){
        vToast('已通知发起人，请前往我的-拼车记录中查看拼车状态');
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

        .pro-review {
          font-size: 12px;
          max-width: 200px;
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
