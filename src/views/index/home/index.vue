<template>
  <div class="index-home">
    <v-swipe class="container-swipe" :auto="4000" :style="{height:carouselH + 'px'}">
      <v-swipe-item v-for="(item,idx) in funcMenus" :key="idx">
        <router-link :to="item.href">
          <img :src="item.carousel"/>
        </router-link>
      </v-swipe-item>
    </v-swipe>

    <div class="container-menu">
      <div class="row">
        <div class="col" v-for="(item,idx) in funcMenus" :key="idx">
          <router-link :to="item.href">
            <img class="c-menu-img" :src="item.icon"/>
            <span>{{item.name}}</span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="container-recommend" v-for="(item,idx) in recommends" :key="idx">
      <div>{{item.name}}</div>
      <div class="row">
        <div class="col" v-for="(inner,idx) in item.list" :key="idx">
          <router-link :to="item.type + '/detail/'+ inner.href">
            <!--<a :href="'/#/' + item.type + '/detail/'+ inner.href">-->
            <div>{{inner.name}}</div>
            <span>{{'¥ ' + inner.price}}</span>
            <img class="c-menu-img" :src="inner.img"/>
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
        funcMenus: [
          {
            name: '限时团购',
            href: '/buy',
            icon: require('../../../assets/images/home.svg'),
            carousel: require('../../../assets/images/home-swipe1.jpg')
          }, {
            name: '预约教练',
            href: '/coach',
            icon: require('../../../assets/images/home.svg'),
            carousel: require('../../../assets/images/home-swipe1.jpg')
          }, {
            name: '拼车服务',
            href: '/carpool',
            icon: require('../../../assets/images/home.svg'),
            carousel: require('../../../assets/images/home-swipe1.jpg')
          }, {
            name: '拼住宿',
            href: '/',
            icon: require('../../../assets/images/home.svg'),
            carousel: require('../../../assets/images/home-swipe1.jpg')
          }, {
            name: '二手交易',
            href: '/',
            icon: require('../../../assets/images/home.svg'),
            carousel: require('../../../assets/images/home-swipe1.jpg')
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
            width: 20px;
            height: 20px;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
          }
        }
      }
    }

    .container-recommend {
      padding: 4px;
      margin-top: 10px;

      .row {
        display: flex;
        width: 100%;
        box-sizing: border-box;

        .col {
          position: relative;
          flex: 0 0 33%;
          max-width: 33%;
          margin-right: 1px;
          padding: 90px 0 10px 0;
          border: 1px solid #eee;
          background-color: #ffffff;
          text-align: center;

          .c-menu-img {
            display: inline-block;
            position: absolute;
            top: 11px;
            left: 50%;
            width: 80px;
            height: 80px;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
</style>
