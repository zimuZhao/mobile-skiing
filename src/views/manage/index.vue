<template>
  <div class="index-mine-center">

    <div class="commodity-info">
      <div class="pro-img">
        <img alt="" src="../../assets/images/home-swipe1.jpg"/>
      </div>
      <div class="product-info-box">
        <h5>Kerri</h5>
        <div class="gray-pro-info">等级: 超级管理员</div>
      </div>
    </div>

    <!--<v-cell title="管理员管理" is-link to="/"/>-->
    <v-cell title="添加团购商品" is-link to="/manage/buy/add"/>
    <v-cell title="管理团购订单" is-link to="/manage/buy/list"/>

  </div>
</template>

<script>
  import {Cell as vCell} from 'mint-ui';

  export default {
    name: 'Manage',
    components: {
      vCell
    },
    data(){
      return {}
    },
    methods: {}
  }
</script>

<style scoped="" lang="less">
  .index-mine-center {
    .commodity-info {
      display: flex;
      height: 100%;
      margin: 10px 0;
      border: 1px solid #eee;
      text-decoration: none;
      background: #f03118;

      .pro-img {
        position: relative;
        width: 125px;
        height: 125px;
        overflow: hidden;
        text-align: center;

        img {
          display: inline-block;
          width: auto;
          max-width: 105px;
          height: 105px;
          margin: 10px;
          border-radius: 50%;
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

        .gray-pro-info {
          color: darkslategray;
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
