import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import ('../views/index/index.vue')
    },
    {
      path: '/index/mine/buy/:userid',
      component: () => import ('../views/index/mine/buy/index.vue')
    },
    {
      path: '/index/mine/buy/detail/:id',
      component: () => import ('../views/index/mine/buy-detail/index.vue')
    },
    {
      path: '/buy',
      component: () => import ('../views/buy/index.vue'),
    },
    {
      path: '/buy/detail/:id',
      component: () => import ('../views/buy/buy-detail/index.vue'),
    },
    {
      path: '/buy/deposit/:id',
      component: () => import ('../views/buy/buy-deposit/index.vue'),
    },
    {
      path: '/buy/rest/:id',
      component: () => import ('../views/buy/buy-rest/index.vue'),
    },
    {
      path: '/coach',
      component: () => import ('../views/coach/index.vue'),
    },
    {
      path: '/coach/detail/:id',
      component: () => import ('../views/coach/coach-detail/index.vue'),
    },
    {
      path: '/manage',
      component: () => import ('../views/manage/index.vue')
    },
    {
      path: '/manage/buy',
      component: () => import ('../views/manage/manage-buy/index.vue')
    },

  ],
  /**
   * 路由页面切换 滚动条问题
   */
  // scrollBehavior: (to, from, savedPosition)=> savedPosition?savedPosition: { x: 0, y: 0 }
})
