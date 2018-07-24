// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import 'mint-ui/lib/style.css'
import 'mui/dist/css/mui.css'
import 'mui/examples/hello-mui/css/icons-extra.css'
import MintUI from 'mint-ui'
// import './assets/icon/iconfont.css';
// vant
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);

//引入过滤器
import './js/filter';


// 路由实例
import router from './router'
//导入与vue无关的第三方包
import 'normalize.css'
import axios from "axios"


Vue.prototype.$http = axios
// axios.defaults.baseURL="http://dayue.mrants.net/DaYueCity"
axios.defaults.baseURL="http://hhhh.mobi"
axios.defaults.withCredentials=true; //跨域请求设置这个

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
