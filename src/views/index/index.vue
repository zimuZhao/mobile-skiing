<template>
  <div id="app">

    <!-- Content -->
    <v-tab-container v-model="tabContain">
      <v-tab-container-item id="tabContainHome">
        <v-home/>
      </v-tab-container-item>


      <!-- mine -->
      <v-tab-container-item id="tabContainMine">
        <v-mine/>
      </v-tab-container-item>
    </v-tab-container>

    <!-- Footer-menu -->
    <div style="height: 60px"/>
    <v-tabbar v-model="tabMenu" fixed>
      <v-tab-item v-for="(item, idx) in menus" :key="idx" :id="item.id" @click.native="tabContain = item.native">
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
    Tabbar as vTabbar,
    TabItem as vTabItem
  } from 'mint-ui';
  import vHome from './home/index.vue';
  import vMine from './mine/index.vue';

  export default {
    name: 'Index',
    components: {
      vTabContainer,
      vTabContainerItem,
      vTabbar,
      vTabItem,
      vHome,
      vMine
    },
    data() {
      return {
        tabContain: 'tabContainHome',
        tabMenu: 'tabMenuHome',
        menus: [
          {
            name: '首页',
            id: 'tabMenuHome',
            native: 'tabContainHome',
            src: require('../../assets/images/home.svg')
          }, {
            name: '我的',
            id: 'tabMenuMine',
            native: 'tabContainMine',
            src: require('../../assets/images/mine.svg')
          }]
      }
    }
  }

</script>

<style lang="less">
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
