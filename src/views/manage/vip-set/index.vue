<template>
  <div class="manage-buy">
    <h1 class="page-title">VIP设置</h1>

    <v-field label="价格(¥)" placeholder="请输入VIP升级价格" type="number" v-model="vipPrice"/>
    <v-field label="有效期(年)" placeholder="请输入VIP有效期（以年为单位）" type="number" v-model="vipExpiry"/>

    <v-button type="primary" class="w-p-100" @click="setClick">确认生效</v-button>

  </div>
</template>

<script>
  import {
    Field as vField,
    Radio as vRadio,
    Button as vButton,
    Toast as vToast
  } from 'mint-ui';
  import Service from './service';

  export default{
    name: 'ManageBuyAdd',
    components: {
      vField,
      vRadio,
      vButton
    },
    data(){
      return {
        vipPrice: '',
        vipExpiry: ''
      }
    },
    methods: {
      setClick(){
        const _this = this;
        if (_this.vipPrice === '' || _this.vipExpiry === '') {
          vToast('上述所有信息均不能为空！');
        } else {

          const params = {
            vipPrice: _this.vipPrice,
            vipExpiry: _this.vipExpiry
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
