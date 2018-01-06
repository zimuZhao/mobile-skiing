<template>
  <div class="index-mine-login">
    <h1 class="page-title">{{moduleName}}</h1>
    <v-field label="手机号" type="tel" v-model="phone"/>
    <v-field label="密码" type="password" v-model="password"/>
    <h5 class="color-red" v-show="loginMsg">用户名或密码错误，请重试！</h5>
    <v-button type="primary" @click="loginClick">登录</v-button>
    <v-button type="default" disabled>注册</v-button>
  </div>
</template>

<script>
  import {
    Field as vField,
    Button as vButton
  } from 'mint-ui';
  import Service from './service';

  export default {
    name: 'IndexMineLogin',
    components: {
      vField,
      vButton
    },
    data(){
      return {
        moduleName: '',
        phone: '',
        password: '',
        loginMsg: true
      }
    },
    methods: {
      loginClick(){
        const _this = this;
        _this.loginMsg = false;
        _this.serviceGet();
      },
      serviceGet() {
        const _this = this;
//        _this.spinFlag = true;

        Service.get({}).then((data) => {
          _this.moduleName = data.moduleName;
          console.log(data.moduleData)
//          _this.spinFlag = false;

        });
      }
    }
  }
</script>

<style scoped="" lang="less">
  .index-mine-login {

    .color-red {
      color: red;
    }

  }
</style>
