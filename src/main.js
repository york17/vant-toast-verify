import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import {
  Toast
} from 'vant'
import 'vant/lib/index.css';
// Vue.use(Toast)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
