import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'bookCase',
      component: resolve => require(['@/components/bookCase'], resolve),
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/category',
      name: 'category',
      component: resolve => require(['@/components/category'], resolve),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: resolve => require(['@/components/ranking'], resolve),
      meta: {
        keepAlive: true
      }
    },
    {
      path:'/ranklist/:rankid',
      name:'ranklist',
      component: resolve => require(['@/components/bookranklist'], resolve),
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: resolve => require(['@/components/recommend'], resolve),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/categorylist',
      name: 'categorylist',
      component: resolve => require(['@/components/categorylist'], resolve),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/bookinfo/:bookid',
      name: 'bookinfo',
      component: resolve => require(['@/components/book/bookinfo'], resolve),
      meta: {
        keepAlive: false
      }
    },
    {
      path:'/reader/:bookid',
      name:'reader',
      component: resolve => require(['@/components/readerPages/reader'], resolve),
      meta:{
        keepAlive:false,
        isShowFoot:false
      }
    },
    {
      path:'/search',
      name:'search',
      component: resolve => require(['@/components/search'], resolve),
      meta:{
        keepAlive:false
      }
    }
  ]
})
