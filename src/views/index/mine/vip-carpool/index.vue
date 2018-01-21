<template>
  <div class="manage-buy">
    <h1 class="page-title">发布拼车信息</h1>

    <h5>注：拼车信息确认发布后不可修改、删除</h5>

    <v-field label="出发地" placeholder="请输入出发地点" v-model="departure"/>
    <v-field label="目的地" placeholder="请输入目的地" v-model="destination"/>
    <v-field label="出发日期" type="date" v-model="date"/>
    <v-field label="价格(¥/人)" placeholder="请输入拼车价格" type="number" v-model="price"/>
    <v-field label="活动描述" placeholder="请输入活动、行程简介" type="textarea" rows="4" v-model="tripDescribe"/>
    <v-field label="车况描述" placeholder="请输入车辆信息简介" type="textarea" rows="4" v-model="carDescribe"/>

    <v-button type="primary" class="w-p-100" @click="publishClick">确认发布</v-button>

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
  import imgUpload from '@/public/module/imgUpload.vue';
  import Service from './service';

  export default{
    name: 'IndexMineVIPCarpool',
    components: {
      vField,
      vRadio,
      vCell,
      vButton,
      imgUpload
    },
    data(){
      return {
        departure: '',
        destination: '',
        date: '',
        price: '',
        tripDescribe: '',
        carDescribe: ''
      }
    },
    methods: {
      publishClick(){
        const _this = this;
        if (_this.departure === '' || _this.destination === '' || _this.date === '' || _this.price === ''
          || _this.tripDescribe === '' || _this.carDescribe === '') {
          vToast('上述所有信息均不能为空！');
        } else {

          const params = {
            departure: _this.departure,
            destination: _this.destination,
            date: _this.date,
            price: _this.price,
            tripDescribe: _this.tripDescribe,
            carDescribe: _this.carDescribe
          };
          Service.post(params).then((data) => {
            console.warn(data)

          });
        }
      }
    }
  }
</script>

<style scoped lang="less">

  .manage-buy {

    h5 {
      color: red;
    }

    .w-p-100 {
      width: 100%;
    }

  }
</style>
