<template>
  <div class="manage-buy">
    <h1 class="page-title">添加团购商品</h1>

    <h5>注：商品确认发布后不可修改、删除</h5>

    <img-upload :src="imgUploadUrl"/>

    <v-field label="商品名" placeholder="商品名不超过十八个字" v-model="tradename" :state="tradenameState"/>
    <v-field label="商品总价(¥)" placeholder="请输入商品总价" type="number" v-model="total"/>
    <v-field label="商品定金(¥)" placeholder="请输入商品定金" type="number" v-model="deposit"/>
    <v-field label="邮寄定价(¥)" placeholder="请输入邮寄定价" type="number" v-model="post"/>
    <v-field label="起购人次" placeholder="请输入团购最少成团人次" type="number" v-model="num"/>
    <v-field label="团购截止时间" type="date" v-model="deadline"/>
    <v-field label="尾款截止时间" type="date" v-model="restDeadline"/>
    <v-field label="商品描述" placeholder="请输入商品详细描述" type="textarea" rows="4" v-model="describe"/>
    <v-field label="规格参数" placeholder="请输入商品规格（如颜色、尺寸等）" type="textarea" rows="4" v-model="param"/>

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
    name: 'ManageBuy',
    components: {
      vField,
      vRadio,
      vCell,
      vButton,
      imgUpload
    },
    data(){
      return {
        imgUploadUrl: 'http://www.ypblog.me:9999/open/uploadImg',
        tradename: '',
        tradenameState: '',
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
    methods: {
      publishClick(){
        const _this = this;
        if (_this.tradename === '' || _this.total === '' || _this.deposit === '' || _this.post === '' || _this.num === '' ||
          _this.deadline === '' || _this.restDeadline === '' || _this.describe === '' || _this.param === '') {
          vToast('上述所有信息均不能为空！');
        } else if (_this.tradename.length > 18) {
          _this.tradenameState = 'error';
          vToast('商品名不超过十八个字！');
        } else {

          const params = {
            tradename: _this.tradename,
            total: _this.total,
            deposit: _this.deposit,
            post: _this.post,
            num: _this.num,
            deadline: _this.deadline,
            restDeadline: _this.restDeadline,
            describe: _this.describe,
            param: _this.param
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
