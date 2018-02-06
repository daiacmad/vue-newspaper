import Vue from 'vue'
import App from './App'
import router from './router'
import "./lib/adminlte/css/bootstrap.min.css"
import "./lib/adminlte/css/AdminLTE.min.css"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#newsPaper',
  router,
  render: h => h(App)
})
