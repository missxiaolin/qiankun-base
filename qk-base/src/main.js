import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { registerMicroApps, start } from 'qiankun'

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:10000', // 默认会加载这个html 解析里面的js 动态执行 (子应用必须支持跨域), fetch
    container: "#vue", // 容器名称
    activeRule: '/vue' // 激活路径
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000', // 默认会加载这个html 解析里面的js 动态执行 (子应用必须支持跨域), fetch
    container: "#react",
    activeRule: '/react'
  }
]
registerMicroApps(apps)
start()

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
  