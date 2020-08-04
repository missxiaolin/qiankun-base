import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false

let instance = null

function render(props) {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}

if (window.__POWERED_BY_QIANKUN__) { // 动态添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render(null)
}

export async function bootstrap(props) {

}

// 加载
export async function mount(props) {
  render(props)
}

// 卸载
export async function unmount(props) {
  instance.$destroy()
}