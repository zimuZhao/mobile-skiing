<template>
  <div class="index-mine-login">
    <h1 class="page-title">{{moduleName}}</h1>
    <v-field label="手机号" type="tel" v-model="phone"/>
    <v-field label="密码" type="password" v-model="password"/>
    <v-button type="primary" @click="loginClick">登录</v-button>
    <v-button type="default" disabled>注册</v-button>
  </div>
</template>

<script>
  import {
    Field as vField,
    Button as vButton,
    Toast
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
        password: ''
      }
    },
    methods: {
      loginClick(){
        const _this = this;
        if (_this.phone !== '' && _this.password !== '') {
          const params = {
            phone: _this.phone,
            password: _this.password
          };
          _this.serviceGet(params);
        } else {
          Toast("用户名或密码不能为空！");
        }
      },
      serviceGet(val) {
        const _this = this;
//        _this.spinFlag = true;

        Service.get(val).then((data) => {
          _this.moduleName = data.moduleName;
          console.log(data.moduleData)
//          _this.spinFlag = false;

        });
      }
    }
  }
</script>
