<template>
  <div class="index-mine-buy">
    <h1 class="page-title">{{moduleName}}</h1>

    <!-- tab-container -->
    <router-link v-for="(item,idx) in detailList" :key="idx" :to="'/manage/coach/detail/' + item.id">
      <div class="commodity-info">
        <div class="product-info-box">
          <div class="product-name">
            <span>{{item.name}}</span>
          </div>
          <div class="product-price-m">
            收费（¥）/ 时：<span>{{item.price}}</span>
          </div>
          <div class="gray-pro-info">教学类型：{{item.type}}</div>
          <div class="gray-pro-info">等级资质: {{item.level}}</div>
          <div class="gray-pro-info">证书： {{item.certificate}}</div>
        </div>
      </div>
    </router-link>

  </div>
</template>

<script>
  import Service from './service';

  export default{
    name: 'ManageCoachList',
    data(){
      return {
        moduleName: '',
        detailList: []
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
          _this.detailList = data.moduleData;
//          _this.spinFlag = false;
        });

      }
    }
  }
</script>

<style scoped lang="less">

  .index-mine-buy {

    .commodity-info {
      display: flex;
      margin: 10px 0;
      font-size: 0;
      border: 1px solid #eee;
      background-color: #eee;

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
          justify-content: space-between;

          .buy-status {
            padding: 2px 5px;
            border: 1px solid #333;
          }
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

  }
</style>
