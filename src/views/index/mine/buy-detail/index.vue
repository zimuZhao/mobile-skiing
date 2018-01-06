<template>
  <div class="index-mine-buy-detail">
    <h1 class="page-title">订单详情</h1>

    <div class="commodity-info">
      <div class="pro-img">
        <img alt="" src="../../../../assets/images/home-swipe1.jpg"/>
      </div>
      <div class="product-info-box">
        <div class="product-name">
          <span>商品名最长不超过18个字</span>
        </div>
        <div class="product-price-m">
          总价：¥<span>499.00</span>
          定金：¥<span>100.00</span>
        </div>
        <div class="gray-pro-info">起购人次: <span>10000</span></div>
        <div class="gray-pro-info">团购截止时间: <span>2018-01-31 00:00:00</span></div>
      </div>
    </div>

    <v-cell title="订单状态" :value="status"/>
    <v-cell title="尾款截止支付时间" v-if="status === '待尾款'" :value="restTime"/>
    <v-cell title="提货人" :value="username"/>
    <v-cell title="联系电话" :value="phone"/>
    <v-cell title="备注" :value="remark"/>
    <v-cell title="支付方式" value="支付宝在线支付"/>
    <v-cell title="提货方式" :value="pickup"/>
    <v-cell title="自提地址" :value="pickupAds" v-if="pickup === '线下自提'"/>
    <v-cell title="收货地址" :value="address" v-if="pickup === '邮寄'"/>
    <v-cell title="商品总价" :value="'¥ ' + total"/>
    <v-cell title="邮寄运费" :value="'¥ ' + freight" v-if="pickup === '邮寄'"/>
    <v-cell title="已付定金" :value="'¥ ' + deposit"/>
    <v-cell title="剩余尾款" :value="'¥ ' + rest"/>

  </div>
</template>

<script>
  import {
    Field as vField,
    Radio as vRadio,
    Cell as vCell
  } from 'mint-ui';

  export default{
    name: 'IndexMineBuyDetail',
    components: {
      vField,
      vRadio,
      vCell
    },
    data(){
      return {
        status: '待尾款',
        restTime: '2018-10-10 00:00:00',
        username: '赵赵',
        phone: '1234567890',
        remark: '白色，35',
        address: '北京市通州区星悦国际',
        pickup: '线下自提',
        freight: 100.00,
        pickupAds: '北京市通州区星悦国际',
        total: 299,
        deposit: 100.00,
        rest: 190.00
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
          height: 42px;
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
