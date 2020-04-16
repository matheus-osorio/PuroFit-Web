import Vue from 'vue'
import App from './App.vue'


//css imports
import './css/bootstrap.min.css'
import './css/all.min.css'

import './plugins/echarts'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
