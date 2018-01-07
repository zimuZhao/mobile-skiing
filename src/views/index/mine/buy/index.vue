<template>
  <div class="index-mine-buy">
    <h1 class="page-title">{{moduleName}}</h1>

    <v-navbar v-model="selected">
      <v-tab-item id="1">全部</v-tab-item>
      <v-tab-item id="2">团购中</v-tab-item>
      <v-tab-item id="3">待提货</v-tab-item>
    </v-navbar>

    <!-- tab-container -->
    <v-tab-container v-model="selected">
      <v-tab-container-item id="1">
        <router-link v-for="item in detailList" :to="'/index/mine/buy/detail/' + item.orderId">
          <div class="commodity-info">
            <div class="product-info-box">
              <div class="product-name">
                <span>{{item.name}}</span>
                <span class="buy-status">{{item.status}}</span>
              </div>
              <div class="product-price-m">
                总价：¥<span>{{item.total}}</span>
              </div>
              <div class="gray-pro-info">订单号: <span>{{item.orderNum}}</span></div>
              <div class="gray-pro-info">交易时间: <span>{{item.tradeTime}}</span></div>
            </div>
          </div>
        </router-link>
      </v-tab-container-item>
      <v-tab-container-item id="2">
        <router-link to="/index/mine/buy/detail">
          <div class="commodity-info">
            <div class="product-info-box">
              <div class="product-name">
                <span>商品名最长不超过18个字</span>
                <span class="buy-status">待尾款</span>
              </div>
              <div class="product-price-m">
                总价：¥<span>499.00</span>
              </div>
              <div class="gray-pro-info">订单号: <span>10000</span></div>
              <div class="gray-pro-info">交易时间: <span>2018-01-31 00:00:00</span></div>
            </div>
          </div>
        </router-link>
      </v-tab-container-item>
      <v-tab-container-item id="3">
        <router-link to="/index/mine/buy/detail">
          <div class="commodity-info">
            <div class="product-info-box">
              <div class="product-name">
                <span>商品名最长不超过18个字</span>
                <span class="buy-status">待尾款</span>
              </div>
              <div class="product-price-m">
                总价：¥<span>499.00</span>
              </div>
              <div class="gray-pro-info">订单号: <span>10000</span></div>
              <div class="gray-pro-info">交易时间: <span>2018-01-31 00:00:00</span></div>
            </div>
          </div>
        </router-link>
      </v-tab-container-item>
    </v-tab-container>


  </div>
</template>

<script>
  import {
    Navbar as vNavbar,
    TabItem as vTabItem,
    TabContainer as vTabContainer,
    TabContainerItem as vTabContainerItem
  } from 'mint-ui';
  import Service from './service';

  export default{
    name: 'IndexMineBuy',
    components: {
      vNavbar,
      vTabItem,
      vTabContainer,
      vTabContainerItem
    },
    data(){
      return {
        moduleName: '',
        selected: '1',
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
        Service.get({}).then((data) => {
          _this.moduleName = data.moduleName;
          for (const item of data.moduleData) {
            _this.detailList.push(item);
          }
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
