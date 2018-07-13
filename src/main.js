// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 路由实例
import router from './router'

//导入与vue无关的第三方包
import 'normalize.css'
import { axios } from "axios"

// 根组件
// import App from './App'

// 启动
Vue.use(MintUI)
Vue.use(Vuex)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
