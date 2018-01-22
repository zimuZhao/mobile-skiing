<template>
  <div class="manage-buy">
    <h1 class="page-title">编辑教练信息</h1>

    <img-upload :src="imgUploadUrl"/>

    <v-field label="教练名" placeholder="请输入教练名" v-model="coachname"/>
    <v-field label="教学类型" placeholder="单板/双板" v-model="teachType"/>
    <v-field label="等级资质" placeholder="请输入该教练等级资质" v-model="level"/>
    <v-field label="证书" placeholder="请输入该教练证书" v-model="certificate"/>
    <v-field label="联系电话" placeholder="请输入该教练联系电话" type="tel" v-model="phone"/>
    <v-field label="价格(¥/h)" placeholder="请输入教练收费/小时" type="number" v-model="price"/>
    <!-- 选择教练可预约时间段 - 未做 -->
    <v-field label="教练介绍" placeholder="请输入教练详细介绍" type="textarea" rows="4" v-model="intro"/>

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
    name: 'ManageCoachDetail',
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
        coachname: '',
        teachType: '',
        level: '',
        certificate: '',
        phone: '',
        price: '',
        intro: ''
      }
    },
    mounted(){
      this.serviceGet();
    },
    methods: {
      serviceGet() {
        const _this = this;
//        _this.spinFlag = true;
        Service.get({}).then(data => {
          _this.moduleName = data.moduleName;
          _this.coachname = data.moduleData.name;
          _this.teachType = data.moduleData.type;
          _this.level = data.moduleData.level;
          _this.certificate = data.moduleData.certificate;
          _this.price = data.moduleData.price;
          _this.phone = data.moduleData.phone;
          _this.intro = data.moduleData.intro;
//          _this.spinFlag = false;
        });

      },
      publishClick(){
        const _this = this;
        if (_this.coachname === '' || _this.teachType === '' || _this.level === '' || _this.certificate === ''
          || _this.phone === '' || _this.price === '' || _this.intro === '') {
          vToast('上述所有信息均不能为空！');
        } else {

          const params = {
            coachname: _this.coachname,
            teachType: _this.teachType,
            level: _this.level,
            certificate: _this.certificate,
            phone: _this.phone,
            price: _this.price,
            intro: _this.intro
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
