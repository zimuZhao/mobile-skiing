<template>
  <div id="app">

    <!-- Content -->
    <v-tab-container v-model="tabContain">
      <!-- home -->
      <v-tab-container-item id="tabContainHome">

        <v-swipe class="container-swipe" :auto="0">
          <v-swipe-item v-for="item in funcMenus">
            <router-link :to="item.href">
              <img :src="item.carousel"/>
            </router-link>
          </v-swipe-item>
        </v-swipe>

        <div class="container-menu">
          <div class="row">
            <div class="col" v-for="item in funcMenus">
              <router-link :to="item.href">
                <img class="c-menu-img" :src="item.icon"/>
                <span>{{item.name}}</span>
              </router-link>
            </div>
          </div>
        </div>

        <div class="container-recommend" v-for="item in recommends">
          <div>
            <span class="pull-left">{{item.name}}</span>
            <em class="pull-right">更多...</em>
          </div>
          <div class="row">
            <div class="col" v-for="inner in item.list">
              <a :href="inner.href">
                <div>{{inner.name}}</div>
                <span>¥ {{inner.price}}</span>
                <img class="c-menu-img" :src="inner.img"/>
              </a>
            </div>
          </div>
        </div>

      </v-tab-container-item>


      <!-- mine -->
      <v-tab-container-item id="tabContainMine">
        mine
      </v-tab-container-item>
    </v-tab-container>

    <!-- Footer-menu -->
    <v-tabbar v-model="tabMenu" fixed>
      <v-tab-item v-for="item in menus" :id="item.id" @click.native="item.native">
        <img slot="icon" :src="item.src"/>
        {{item.name}}
      </v-tab-item>
    </v-tabbar>

  </div>
</template>
<script>
  import {
    TabContainer as vTabContainer,
    TabContainerItem as vTabContainerItem,
    Swipe as vSwipe,
    SwipeItem as vSwipeItem,
    Cell as vCell,
    Button as vButton,
    Tabbar as vTabbar,
    TabItem as vTabItem
  } from 'mint-ui';

  export default {
    name: 'index',
    components: {
      vTabContainer,
      vTabContainerItem,
      vSwipe,
      vSwipeItem,
      vCell,
      vButton,
      vTabbar,
      vTabItem
    },
    data() {
      return {
        tabContain: 'tabContainHome',
        tabMenu: 'tabMenuHome',
        funcMenus: [{
          name: '限时团购',
          href: '/',
          icon: require('../../assets/images/home.svg'),
          carousel: require('../../assets/images/home-swipe1.jpg')
        }, {
          name: '预约教练',
          href: '/',
          icon: require('../../assets/images/home.svg'),
          carousel: require('../../assets/images/home-swipe1.jpg')
        }, {
          name: '拼车服务',
          href: '/',
          icon: require('../../assets/images/home.svg'),
          carousel: require('../../assets/images/home-swipe1.jpg')
        }, {
          name: '拼住宿',
          href: '/',
          icon: require('../../assets/images/home.svg'),
          carousel: require('../../assets/images/home-swipe1.jpg')
        }, {
          name: '二手交易',
          href: '/',
          icon: require('../../assets/images/home.svg'),
          carousel: require('../../assets/images/home-swipe1.jpg')
        }],
        recommends: [{
          name: '团购推荐',
          list: [{
            name: '我是名字',
            price: '33.33',
            img: require('../../assets/images/home-swipe1.jpg'),
            href: '/'
          }, {
            name: '我是名字',
            price: '33.33',
            img: require('../../assets/images/home-swipe1.jpg'),
            href: '/'
          }, {
            name: '我是名字',
            price: '33.33',
            img: require('../../assets/images/home-swipe1.jpg'),
            href: '/'
          }]
        },
          {
            name: '教练推荐',
            list: [{
              name: '我是名字',
              price: '33.33',
              img: require('../../assets/images/home-swipe1.jpg'),
              href: '/'
            }, {
              name: '我是名字',
              price: '33.33',
              img: require('../../assets/images/home-swipe1.jpg'),
              href: '/'
            }, {
              name: '我是名字',
              price: '33.33',
              img: require('../../assets/images/home-swipe1.jpg'),
              href: '/'
            }]
          },
          {
            name: '拼车推荐',
            list: [{
              name: '我是名字',
              price: '33.33',
              img: require('../../assets/images/home-swipe1.jpg'),
              href: '/'
            }, {
              name: '我是名字',
              price: '33.33',
              img: require('../../assets/images/home-swipe1.jpg'),
              href: '/'
            }, {
              name: '我是名字',
              price: '33.33',
              img: require('../../assets/images/home-swipe1.jpg'),
              href: '/'
            }]
          },
          {
            name: '拼住宿推荐',
            list: [{
              name: '我是名字',
              price: '33.33',
              img: require('../../assets/images/home-swipe1.jpg'),
              href: '/'
            }, {
              name: '我是名字',
              price: '33.33',
              img: require('../../assets/images/home-swipe1.jpg'),
              href: '/'
            }, {
              name: '我是名字',
              price: '33.33',
              img: require('../../assets/images/home-swipe1.jpg'),
              href: '/'
            },
              {
                name: '二手推荐',
                list: [{
                  name: '我是名字',
                  price: '33.33',
                  img: require('../../assets/images/home-swipe1.jpg'),
                  href: '/'
                }, {
                  name: '我是名字',
                  price: '33.33',
                  img: require('../../assets/images/home-swipe1.jpg'),
                  href: '/'
                }, {
                  name: '我是名字',
                  price: '33.33',
                  img: require('../../assets/images/home-swipe1.jpg'),
                  href: '/'
                }]
              }]
          }],
        menus: [{
          name: '首页',
          id: 'tabMenuHome',
          native: "tabContain = 'tabContainHome'",
          src: require('../../assets/images/home.svg')
        }, {
          name: '我的',
          id: 'tabMenuMine',
          native: "tabContain = 'tabContainMine'",
          src: require('../../assets/images/mine.svg')
        }]
      }
    },
  }

</script>
<style lang="less">

  html body {
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .pull-left {
    float: left;
  }

  .pull-right {
    float: right;
  }

  .container-swipe {
    height: 200px; // 根据屏幕自适应
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
    padding: 1px;
    margin-top: 30px;

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

</style>
