<template>
  <div class="manage-buy">
    <h1 class="page-title">添加团购商品</h1>

    <h5>注：商品确认发布后不可修改、删除</h5>

    <v-field label="商品名" placeholder="商品名不超过十八个字" v-model="tradename"/>
    <v-field label="商品总价" placeholder="请输入商品总价" type="number" v-model="total"/>
    <v-field label="商品定金" placeholder="请输入商品定金" type="number" v-model="deposit"/>
    <v-field label="邮寄定价" placeholder="请输入邮寄定价" type="number" v-model="post"/>
    <v-field label="起购人次" placeholder="请输入团购最少成团人次" type="number" v-model="num"/>
    <v-field label="团购截止时间" type="date" v-model="deadline"/>
    <v-field label="尾款截止时间" type="date" v-model="restDeadline"/>
    <v-field label="商品描述" placeholder="请输入商品详细描述" type="textarea" rows="4" v-model="describe"/>
    <v-field label="规格参数" placeholder="请输入商品规格" type="textarea" rows="4" v-model="param"/>
    <!-- 缺图片上传：封面 + 描述 -->
    <router-link to="/buy/detail/13">
      <v-button type="primary" style="width:100%;">确认发布</v-button>
    </router-link>

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
    name: 'ManageBuy',
    components: {
      vField,
      vRadio,
      vCell,
      vButton
    },
    data(){
      return {
        tradename: '',
        total: '',
        deposit: '',
        post: '',
        num: '',
        deadline: '',
        restDeadline: '',
        describe: '',
        param: ''
      }
    },
    created() {
    }
  }
</script>

<style scoped lang="less">

  .manage-buy {

    h5 {
      color: red;
    }

  }
</style>
