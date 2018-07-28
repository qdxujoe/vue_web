import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index.vue'
import list from '../components/news/list.vue'
import details from '../components/news/details.vue'
//导入图片
import Plist from '../components/photo/list.vue'
import Pdetails from '../components/photo/details.vue'
//导入商品详情
import GList from '../components/goods/list.vue'
import Gdetails from '../components/goods/details.vue'
Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index',
     
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    //新闻列表
    {
      path: '/news/list',
      name: 'list',
      component: list
    },
    {
      // path: '/news/details/:id',
      path: '/news/details',
      name: 'details',
      component: details
    },

    //获取图片
    {
      //获取图片列表
      // path: '/photo/list:id',
      path: '/photo/list',
      name: 'Plist',
      component: Plist
    },
    {
      //获取图片
      // path: '/news/details/:id',
      path: '/photo/details',
      name: 'Pdetails',
      component: Pdetails
    },
    {
      //商品购买列表
      path: '/goods/list',
      name: 'GList',
      component: GList
    },
    {
      //商品购买详情
      // path: '/goods/details/:id',
      path: '/goods/details',
      name: 'Gdetails',
      component: Gdetails
    },
  
  ]
})
