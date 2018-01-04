// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
// import MintUI from 'mint-ui';
import store from './store';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;
// Vue.use(MintUI);
Vue.use(Vuex);

// 全局组件注册
// import {Row, Col, Icon, Message} from 'fezui'
// Vue.component('v-row', Row);
// Vue.component('v-col', Col);
// Vue.component('v-icon', Icon);
// Vue.prototype.$Message = Message;cdmo

// 引入公共css文件
import 'mint-ui/lib/style.css';


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
