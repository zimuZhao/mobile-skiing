import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import ('../views/index/index.html')
    },
    {
      path: '/index/mine/buy',
      component: () => import ('../views/index/mine/buy/index.html')
    },
    {
      path: '/index/mine/buy/detail',
      component: () => import ('../views/index/mine/buy-detail/index.html')
    },
    {
      path: '/buy',
      component: () => import ('../views/buy/index.html'),
    },
    {
      path: '/buy/detail',
      component: () => import ('../views/buy-detail/index.html'),
    },
    {
      path: '/buy/deposit',
      component: () => import ('../views/buy-deposit/index.html'),
    },
    {
      path: '/buy/rest',
      component: () => import ('../views/buy-rest/index.html'),
    },
    {
      path: '/manage',
      component: () => import ('../views/manage/index.html')
    },
    {
      path: '/manage/buy',
      component: () => import ('../views/manage-buy/index.html')
    },

  ],
  /**
   * 路由页面切换 滚动条问题
   */
  // scrollBehavior: (to, from, savedPosition)=> savedPosition?savedPosition: { x: 0, y: 0 }
})
