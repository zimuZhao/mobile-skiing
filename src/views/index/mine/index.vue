<template>
  <div class="index-mine-center">

    <div class="commodity-info">
      <div class="pro-img">
        <img alt="会员头像" :src="require('../../../assets/images/home-swipe1.jpg')"/>
      </div>
      <div class="product-info-box">
        <h5>Kerri</h5>
        <div>
          <span>等级: 普通会员</span>
          <router-link to="/index/mine/vip">
            <v-button class="vip-btn" v-if="!ifVIP">升级VIP</v-button>
          </router-link>
        </div>

      </div>
    </div>

    <v-cell title="团购交易记录" is-link to="/index/mine/buy/1233"/>
    <v-cell title="发布拼车信息" is-link to="/index/mine/vip/carpool"/>
    <v-cell title="拼车记录" is-link to="/index/mine/carpool/1233"/>
  </div>
</template>

<script>
  import {
    Cell as vCell,
    Button as vButton
  } from 'mint-ui';

  export default {
    name: 'IndexMine',
    components: {
      vCell,
      vButton
    },
    data(){
      return {
        ifVIP: false
      }
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

        .vip-btn {
          display: inline-block;
          height: 20px;
          margin-left: 5px;
          padding: 0 6px;
          font-size: 13px;
        }

      }
    }
  }
</style>
