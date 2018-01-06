import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import ('../views/index/index.vue')
    },
    {
      path: '/index/mine/buy',
      component: () => import ('../views/index/mine/buy/index.vue')
    },
    {
      path: '/index/mine/buy/detail',
      component: () => import ('../views/index/mine/buy-detail/index.vue')
    },
    {
      path: '/buy',
      component: () => import ('../views/buy/index.vue'),
    },
    {
      path: '/buy/detail',
      component: () => import ('../views/buy-detail/index.vue'),
    },
    {
      path: '/buy/deposit',
      component: () => import ('../views/buy-deposit/index.vue'),
    },
    {
      path: '/buy/rest',
      component: () => import ('../views/buy-rest/index.vue'),
    },

  ],
  /**
   * 路由页面切换 滚动条问题
   */
  // scrollBehavior: (to, from, savedPosition)=> savedPosition?savedPosition: { x: 0, y: 0 }
})
