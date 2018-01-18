<template>
  <div class="buy-deposit">
    <h1 class="page-title">{{moduleName}}</h1>

    <v-cell title="价格" :value="'¥ ' + detail.price"/>
    <v-cell title="有效期" :value="detail.expire + '年'"/>
    <v-cell title="支付方式" value="支付宝在线支付"/>
    <v-button type="primary" class="w-100">去升级</v-button>

  </div>
</template>

<script>
  import {
    Cell as vCell,
    Button as vButton
  } from 'mint-ui';
  import Service from './service';

  export default{
    name: 'MineVIP',
    components: {
      vCell,
      vButton
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

  .buy-deposit {

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
