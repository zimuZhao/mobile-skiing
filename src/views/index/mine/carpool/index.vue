<template>
  <div class="index-mine-buy">
    <h1 class="page-title">{{moduleName}}</h1>

    <v-navbar v-model="selected">
      <v-tab-item id="1">全部</v-tab-item>
      <v-tab-item id="2">已确认</v-tab-item>
      <!-- 如果是发布人就是待确认；如果是普通用户就是待评价 -->
      <v-tab-item id="3">待确认/待评价</v-tab-item>
    </v-navbar>

    <!-- tab-container -->
    <v-tab-container v-model="selected">
      <v-tab-container-item id="1">
        <router-link v-for="(item,idx) in detailList[0]" :key="idx" :to="'/index/mine/carpool/detail/' + item.orderId">
          <div class="commodity-info">
            <div class="product-info-box">
              <div class="product-name">
                <span>{{item.name}}</span>
                <span class="buy-status">{{item.status}}</span>
              </div>
              <div class="gray-pro-info">目的地: {{item.destination}}</div>
              <div class="gray-pro-info">出发日期：{{item.date}}</div>
              <div class="gray-pro-info">价格（¥）/人: {{item.price}} / h</div>
            </div>
          </div>
        </router-link>
      </v-tab-container-item>
      <v-tab-container-item id="2">
        <router-link v-for="(item,idx) in detailList[1]" :key="idx" :to="'/index/mine/carpool/detail/' + item.orderId">
          <div class="commodity-info">
            <div class="product-info-box">
              <div class="product-name">
                <span>{{item.name}}</span>
                <span class="buy-status">{{item.status}}</span>
              </div>
              <div class="gray-pro-info">目的地: {{item.destination}}</div>
              <div class="gray-pro-info">出发日期：{{item.date}}</div>
              <div class="gray-pro-info">价格（¥）/人: {{item.price}} / h</div>
            </div>
          </div>
        </router-link>
      </v-tab-container-item>
      <v-tab-container-item id="3">
        <router-link v-for="(item,idx) in detailList[2]" :key="idx" :to="'/index/mine/carpool/detail/' + item.orderId">
          <div class="commodity-info">
            <div class="product-info-box">
              <div class="product-name">
                <span>{{item.name}}</span>
                <span class="buy-status">{{item.status}}</span>
              </div>
              <div class="gray-pro-info">目的地: {{item.destination}}</div>
              <div class="gray-pro-info">出发日期：{{item.date}}</div>
              <div class="gray-pro-info">价格（¥）/人: {{item.price}} / h</div>
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
  import Q from 'q';
  import Service from './service';

  export default{
    name: 'IndexMineCarpool',
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
        Q.all([
          Service.getAll({type: '全部'}),
          Service.getDeposit({type: '已确认'}),
          Service.getPickup({type: '待评价'})
        ]).then(data => {
          _this.moduleName = data[0].moduleName;
//          for (const item of data[0].moduleData) {
//            _this.detailList.push(item);
//          }
          for (const detail of data) {
            let _arr = [];
            for (const item of detail.moduleData) {
              _arr.push(item);
            }
            _this.detailList.push(_arr);
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
