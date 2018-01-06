<template>
  <div class="buy-deposit">
    <h1 class="page-title">订单详情-定金结算</h1>

    <div class="commodity-info">
      <div class="pro-img">
        <img alt="" src="../../assets/images/home-swipe1.jpg"/>
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

    <h5>注：信息填写后不能修改,请确认您的信息是否正确</h5>

    <v-field label="提货人" placeholder="请输入姓名" v-model="username"/>
    <v-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"/>
    <v-field label="备注" placeholder="备注商品规格参数，如颜色、尺码等" type="textarea" rows="2" v-modal="remark"/>
    <v-field label="收货地址" placeholder="选择自提可不填写，选择邮寄必须填写" v-model="address"/>
    <v-radio title="提货方式" v-model="pickup" :options="pickupOptions"/>
    <v-cell title="邮寄运费" :value="freight"/>
    <v-cell title="自提地址" :value="pickupAds"/>
    <v-cell title="支付方式" value="支付宝在线支付"/>
    <v-cell title="预付定金" :value="deposit"/>
    <v-button type="primary" style="width:100%;">去付款</v-button>

  </div>
</template>

<script>
  import {
    Field as vField,
    Radio as vRadio,
    Cell as vCell,
    Button as vButton
  } from 'mint-ui';

  export default{
    name: 'BuyDeposit',
    components: {
      vField,
      vRadio,
      vCell,
      vButton
    },
    data(){
      return {
        username: '',
        phone: '',
        remark: '',
        address: '',
        pickup: 'Z',
        pickupOptions: [
          {
            label: '线下自提',
            value: 'Z'
          },
          {
            label: '邮寄',
            value: 'Y'
          }
        ],
        freight: '¥ 100.00',
        pickupAds: '北京市通州区星悦国际',
        deposit: '¥ 100.00'
      }
    },
    created() {
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

  }
</style>
