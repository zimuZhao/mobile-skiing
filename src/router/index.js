import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      name: 'index',
      path: '/',
      component: () => import ('../views/index/index.vue')
    },
    {
      name: 'indexMineVIP',
      path: '/index/mine/vip',
      component: () => import ('../views/index/mine/vip/index.vue')
    },
    {
      name: 'indexMineBuy',
      path: '/index/mine/buy/:userid',
      component: () => import ('../views/index/mine/buy/index.vue')
    },
    {
      name: 'indexMineBuyDetail',
      path: '/index/mine/buy/detail/:id',
      component: () => import ('../views/index/mine/buy-detail/index.vue')
    },
    {
      name: 'indexMineVIPCarpool',
      path: '/index/mine/vip/carpool',
      component: () => import ('../views/index/mine/vip-carpool/index.vue')
    },
    {
      name: 'indexMineCarpool',
      path: '/index/mine/carpool/:userid',
      component: () => import ('../views/index/mine/carpool/index.vue')
    },
    {
      name: 'buy',
      path: '/buy',
      component: () => import ('../views/buy/index.vue'),
    },
    {
      name: 'buyDetail',
      path: '/buy/detail/:id',
      component: () => import ('../views/buy/buy-detail/index.vue'),
    },
    {
      name: 'buyDeposit',
      path: '/buy/deposit/:id',
      component: () => import ('../views/buy/buy-deposit/index.vue'),
    },
    {
      name: 'buyRest',
      path: '/buy/rest/:id',
      component: () => import ('../views/buy/buy-rest/index.vue'),
    },
    {
      name: 'coach',
      path: '/coach',
      component: () => import ('../views/coach/index.vue'),
    },
    {
      name: 'coachDetail',
      path: '/coach/detail/:id',
      component: () => import ('../views/coach/coach-detail/index.vue'),
    },
    {
      name: 'coachBook',
      path: '/coach/book/:id',
      component: () => import ('../views/coach/coach-book/index.vue'),
    },
    {
      name: 'manage',
      path: '/manage',
      component: () => import ('../views/manage/index.vue')
    },
    {
      name: 'manageVipSet',
      path: '/manage/vip/set',
      component: () => import ('../views/manage/vip-set/index.vue')
    },
    {
      name: 'manageBuyAdd',
      path: '/manage/buy/add',
      component: () => import ('../views/manage/buy-add/index.vue')
    },
    {
      name: 'manageBuyList',
      path: '/manage/buy/list',
      component: () => import ('../views/manage/buy-list/index.vue')
    },
    {
      name: 'manageCoachAdd',
      path: '/manage/coach/add',
      component: () => import ('../views/manage/coach-add/index.vue')
    },
    {
      name: 'manageCoachList',
      path: '/manage/coach/list',
      component: () => import ('../views/manage/coach-list/index.vue')
    },
    {
      name: 'manageCoachDetail',
      path: '/manage/coach/detail/:id',
      component: () => import ('../views/manage/coach-detail/index.vue')
    },
    {
      name: 'carpool',
      path: '/carpool',
      component: () => import ('../views/carpool/index.vue'),
    },
    {
      name: 'carpoolDetail',
      path: '/carpool/detail/:id',
      component: () => import ('../views/carpool/carpool-detail/index.vue'),
    },

  ],
  /**
   * 路由页面切换 滚动条问题
   */
  // scrollBehavior: (to, from, savedPosition)=> savedPosition?savedPosition: { x: 0, y: 0 }
})
