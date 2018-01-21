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
        <div class="gray-pro-info">教学类型: {{detail.type}}</div>
        <div class="gray-pro-info">等级资质: {{detail.level}}</div>
        <div class="gray-pro-info">证书: {{detail.certificate}}</div>
        <div class="gray-pro-info">联系方式: {{detail.phone}}</div>
        <!--<div class="gray-pro-info">预约时间: {{item.count}}</div>-->
        <div class="gray-pro-info">价格: ¥ {{detail.price}} / h</div>
      </div>
    </div>

    <h5>注：信息填写后不能修改,请确认您的信息是否正确</h5>

    <v-field label="预约时间" v-model="formatDatetime" @click.native="chooseTime"/>
    <v-field label="预约人" placeholder="请输入姓名" :state="nameWarn ? 'warning' : ''" v-model="username"/>
    <v-field label="联系电话" placeholder="请输入手机号" type="tel" :state="phoneWarn ? 'warning' : ''" v-model="phone"/>
    <v-field label="备注" placeholder="备注信息" type="textarea" rows="2" v-model="remark"/>
    <v-cell title="支付方式" value="支付宝在线支付"/>
    <v-cell title="预约结算" :value="'¥ ' + detail.price"/>
    <v-button type="primary" class="w-p-100" @click="goPay">去付款</v-button>

    <v-datetime-picker v-model="pickerVisible" ref="datetimePicker"
                       @visible-change="handleVisibleChange"
                       @confirm="handleChange" month-format="{value} 月" date-format="{value} 日"
                       :startDate="new Date()" :endDate="new Date('2018-12-31')"
                       :startHour="Number(20)" :endHour="Number(20)"/>
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
  import {DatetimePicker as vDatetimePicker} from 'mint-ui';
  import Service from './service';

  export default{
    name: 'CoachBook',
    components: {
      vField,
      vRadio,
      vCell,
      vButton,
      vDatetimePicker
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
        dateEmpty: '',
        pickerVisible: '',
        formatDatetime: ''
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
          _this.$router.push('#');
        }
      },
      chooseTime(){
        this.$refs.datetimePicker.open();
      },
      handleChange(value) {
        this.formatDatetime = moment(value).format('YYYY-MM-DD HH:mm');
      },
      handleVisibleChange(isVisible) {
        console.log('弹窗是否展示:', isVisible);
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

    .w-p-100 {
      width: 100%;
    }

  }
</style>
