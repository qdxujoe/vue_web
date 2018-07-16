import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index.vue'
import list from '../components/news/list.vue'
import details from '../components/news/details.vue'
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
    }
  ]
})
