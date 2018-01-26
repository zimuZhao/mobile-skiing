<template>
  <div class="buy-deposit">
    <h1 class="page-title">{{moduleName}}</h1>

    <div class="commodity-info">
      <div class="pro-img">
        <img :alt="detail.name" :src="detail.src"/>
      </div>
      <div class="product-info-box">
        <div class="product-name">
          <span>{{detail.name}}</span>
        </div>
        <div class="product-price-m">总价：¥ {{detail.total}}</div>
        <div class="product-price-m">定金：¥ {{detail.deposit}}</div>
        <div>
          <div class="gray-pro-info">起购人次: <span>{{detail.count}}</span></div>
          <div class="gray-pro-info">截止时间: <span>{{detail.deadline}}</span></div>
        </div>
      </div>
    </div>

    <h5>注：信息填写后不能修改,请确认您的信息是否正确</h5>

    <v-field label="提货人" placeholder="请输入姓名" :state="nameWarn ? 'warning' : ''" v-model="username"/>
    <v-field label="联系电话" placeholder="请输入手机号" type="tel" :state="phoneWarn ? 'warning' : ''" v-model="phone"/>
    <v-field label="备注" placeholder="备注商品规格参数，如颜色、尺码等" type="textarea" rows="2" v-model="remark"/>
    <v-field label="收货地址" placeholder="选择邮寄必须填写" v-model="address"/>
    <v-cell title="支付方式" value="支付宝在线支付"/>
    <v-radio title="提货方式" v-model="pickup" :options="pickupOptions"/>
    <v-cell title="邮寄运费" :value="'¥ ' + detail.freight" v-if="pickup === 'YJ'"/>
    <v-cell title="自提地址" :value="detail.pickupAds" v-if="pickup === 'ZT'"/>
    <v-cell title="预付定金" :value="'¥ ' + detail.deposit"/>
    <v-button type="primary" class="w-p-100" @click="goPay" style="background-color: #3fbcff">去付款</v-button>

  </div>
</template>

<script>
  import {
    Field as vField,
    Radio as vRadio,
    Cell as vCell,
    Button as vButton,
    Toast as vToast
  } from 'mint-ui';
  import Service from './service';

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
        moduleName: '',
        detail: {},
        nameWarn: false,
        phoneWarn: false,
        username: '',
        phone: '',
        remark: '',
        address: '',
        pickup: 'ZT',
        pickupOptions: [
          {
            label: '线下自提',
            value: 'ZT'
          },
          {
            label: '邮寄',
            value: 'YJ'
          }
        ]
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
      },
      goPay(){
        const _this = this;
        if (_this.username === '') {
          _this.nameWarn = true;
          vToast('姓名不能为空');
        } else if (_this.phone === '') {
          _this.phoneWarn = true;
          vToast('手机号不能为空');
        } else {
          const params = {
            username: _this.username,
            phone: _this.phone,
            remark: _this.remark,
            address: _this.address,
            pickup: _this.pickup
          };
          Service.post(params).then((data) => {

          });
          _this.$router.push('/buy/rest/123');
        }
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
      font-size: 0;
      height: 105px;
      margin-bottom: 10px;
      padding: 10px 0;
      position: relative;
      background-color: #fff;
      border-bottom: 1px solid #eee;

      .pro-img {
        position: relative;
        width: 125px;
        height: 125px;
        overflow: hidden;
        text-align: center;

        img {
          display: inline-block;
          width: auto;
          max-width: 100px;
          height: 100px;
          border: 1px solid #dcdcdc;
        }
      }

      .product-info-box {
        position: relative;
        flex: 1;
        height: 100%;
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
          font-size: 12px;
          display: inline-block;
          margin-top: 8px;
          overflow: hidden;
          height: 15px;
          line-height: 16px;
          margin-right: 20px;
        }

      }
    }

    .w-p-100 {
      width: 100%;
    }

  }
</style>
