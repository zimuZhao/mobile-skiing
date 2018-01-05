// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
import router from './router';
import App from './App.vue';
import {InfiniteScroll} from 'mint-ui';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(InfiniteScroll);

// 引入公共css文件
import 'mint-ui/lib/style.css';

// 全局组件注册
// import {Row, Col, Icon, Message} from 'fezui'
// Vue.component('v-row', Row);
// Vue.component('v-col', Col);
// Vue.component('v-icon', Icon);
// Vue.prototype.$Message = Message;cdmo

// 这里添加进度条路由api
// router.beforeEach((to, from, next) => {
// });

// router.afterEach((to, from, next) => {
// });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
