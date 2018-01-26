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
