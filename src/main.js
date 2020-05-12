import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "@/icons"

Vue.config.productionTip = false
Vue.use(elementUI)

import "@/permission"

import '@/styles/index.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
