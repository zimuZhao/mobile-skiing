<template>
  <div class="index-home">
    <v-swipe class="container-swipe" :auto="4000" :style="{height:carouselH + 'px'}">
      <v-swipe-item>
        <!--<router-link :to="item.href">-->
        <img :src="carouselImg"/>
        <!--</router-link>-->
      </v-swipe-item>
    </v-swipe>

    <div class="container-menu">
      <div class="row">
        <div class="col" v-for="(item,idx) in funcMenus" :key="idx">
          <router-link :to="item.href">
            <img class="c-menu-img" :src="item.icon"/>
            <div class="c-menu-span">{{item.name}}</div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="container-recommend" v-for="(item,idx) in recommends" :key="idx">
      <div class="recommend-title">{{item.name}}</div>
      <div class="row">
        <div class="col" v-for="(inner,idx) in item.list" :key="idx">
          <router-link :to="item.type + '/detail/'+ inner.href">
            <!--<a :href="'/#/' + item.type + '/detail/'+ inner.href">-->
            <img class="c-menu-img" :src="inner.img"/>
            <div>{{inner.name}}</div>
            <span class="red">{{'¥ ' + inner.price}}</span>
            <!--</a>-->
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Swipe as vSwipe,
    SwipeItem as vSwipeItem
  } from 'mint-ui';
  import Service from './service';

  export default {
    name: 'IndexHome',
    components: {
      vSwipe,
      vSwipeItem
    },
    data() {
      return {
        carouselH: '0px',
        carouselImg: require('../../../assets/images/banner.jpg'),
        funcMenus: [
          {
            name: '限时团购',
            href: '/buy',
            icon: require('../../../assets/images/1.png')
          }, {
            name: '预约教练',
            href: '/coach',
            icon: require('../../../assets/images/2.png')
          }, {
            name: '拼车服务',
            href: '/carpool',
            icon: require('../../../assets/images/3.png')
          }, {
            name: '拼住宿',
            href: '/',
            icon: require('../../../assets/images/4.png')
          }, {
            name: '二手交易',
            href: '/',
            icon: require('../../../assets/images/5.png')
          }],
        recommends: []
      }
    },
    created() {
      const W = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.carouselH = Math.floor(96.00 / 480.00 * W);
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
          _this.recommends = data.moduleData;
//          _this.spinFlag = false;

        });
      }
    }
  }
</script>

<style scoped lang="less">
  .index-home {
    .pull-left {
      float: left;
    }

    .pull-right {
      float: right;
    }

    .container-swipe {
      img {
        width: 100%;
        height: auto;
      }
    }

    .container-menu {
      margin-bottom: 8px;
      padding: 0 4px;
      font-size: 14px;

      .row {
        display: flex;
        width: 100%;
        box-sizing: border-box;

        .col {
          position: relative;
          flex: 0 0 20%;
          max-width: 20%;
          padding: 34px 0 10px 0;
          background-color: #ffffff;
          text-align: center;
          font-size: .85em;

          .c-menu-img {
            display: inline-block;
            position: absolute;
            top: 11px;
            left: 50%;
            width: 50px;
            height: 50px;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
          }

          .c-menu-span {
            color: #333;
            margin-top: 30px;
          }
        }
      }
    }

    .container-recommend {
      padding: 4px;
      background-color: #fff;

      .recommend-title {
        margin: 10px;
        font-size: 1.1em;
        font-weight: 600;
      }

      .row {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid #dcdcdc;

        .col {
          position: relative;
          flex: 0 0 33%;
          max-width: 33%;
          margin-right: 1px;
          padding: 120px 0 10px 0;
          background-color: #ffffff;
          text-align: center;

          .c-menu-img {
            display: inline-block;
            position: absolute;
            top: 11px;
            left: 50%;
            width: 100px;
            height: 100px;
            border: 1px solid #dcdcdc;
            transform: translateX(-50%);
          }

          .red {
            color: red;
          }
        }
      }
    }
  }
</style>
