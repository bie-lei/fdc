import Vue from 'vue'
import App from './App'
import store from './store'
import request from "@/utils/request.js"
Vue.prototype.$store = store
Vue.prototype.$request = request
// import iconfont from './components/iconfont.js'

// import basics from './pages_demo/basics/home.vue'
// Vue.component('basics',basics)

// import components from './pages_demo/component/home.vue'
// Vue.component('components',components)

// import plugin from './pages_demo/plugin/home.vue'
// Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

import tabBar from './components/tabbar.vue'  
Vue.component('tab-bar', tabBar) 


