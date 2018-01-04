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
    /**
     * example router
     */
    // {
    //   path: '/app/',
    //   component: () => import ('../views/Apps/index.vue'),
    //   children: [{
    //     path: 'subscribe/',
    //     component: () =>  import ('../components/SubscribeApp/index.vue'),
    //     children: [{
    //       path: '', 
    //       component: () => import ('../components/SubscribeApp/module/sales/index.vue')
    //     }, {
    //       path: 'sales',
    //       component: () => import ('../components/SubscribeApp/module/sales/index.vue')
    //     }, {
    //       path: 'flow',
    //       component: () => import ('../components/SubscribeApp/module/flow/index.vue')
    //     }, {
    //       path: 'hot',
    //       component: () => import ('../components/SubscribeApp/module/hot/index.vue')
    //     }]
    //   }]
    // },

  ],
  /**
   * 路由页面切换 滚动条问题
   */
  // scrollBehavior: (to, from, savedPosition)=> savedPosition?savedPosition: { x: 0, y: 0 }
})
