<template>
  <div class="index-mine-buy-detail">
    <h1 class="page-title">{{moduleName}}</h1>

    <v-cell title="目的地" :value="detail.departure"/>
    <v-cell title="出发地" :value="detail.destination"/>
    <v-cell title="出发日期" :value="detail.date"/>
    <v-cell title="拼车人" :value="detail.name"/>
    <v-cell title="价格（¥/人）" :value="detail.price"/>
    <v-cell title="联系方式" :value="detail.phone"/>

    <!-- 如果是待评价点进来，则下方显示评价相关内容；如果是待确认点进来，则下方显示发送了拼车申请的人 -->

  </div>
</template>

<script>
  import {
    Field as vField,
    Radio as vRadio,
    Cell as vCell
  } from 'mint-ui';
  import Service from './service';

  export default{
    name: 'IndexMineCarpoolDetail',
    components: {
      vField,
      vRadio,
      vCell
    },
    data(){
      return {
        moduleName: '',
        detail: {}
      }
    },
    mounted(){
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

  .index-mine-buy-detail {

    h5 {
      color: red;
    }

    .commodity-info {
      display: flex;
      height: 100%;
      margin: 10px 0;
      font-size: 0;
      border: 1px solid #eee;
      text-decoration: none;
      background: #fafafa;

      .pro-img {
        position: relative;
        width: 125px;
        height: 125px;
        overflow: hidden;
        text-align: center;

        img {
          display: inline-block;
          width: auto;
          max-width: 125px;
          height: 125px;
        }
      }

      .product-info-box {
        position: relative;
        flex: 1;
        height: 100%;
        margin-left: 10px;
        margin-top: -2px;
        padding-right: 10px;
        padding-top: 11px;

        .product-name {
          color: #232326;
          font-size: 15px;
          line-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: flex;
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

    .w-100 {
      width: 100%;
    }
  }
</style>
