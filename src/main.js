import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import router from './router' //引入路由


Vue.config.productionTip = false
// 引入rtmp 播放插件
import flowplayer from '../js/flowplayer-3.2.8.min.js'


Vue.prototype.flowplayer = flowplayer
Vue.use(dataV)

new Vue({
  render: h => h(App),
  router  //引入路由
}).$mount('#app')
