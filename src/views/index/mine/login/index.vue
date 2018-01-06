<template>
  <div class="index-mine-login">
    <h1 class="page-title">登录</h1>
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

  export default {
    name: 'IndexMineLogin',
    components: {
      vField,
      vButton
    },
    data(){
      return {
        phone: '',
        password: '',
        loginMsg: true
      }
    },
    methods: {
      loginClick(){
        this.loginMsg = false;
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
