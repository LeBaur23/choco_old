// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap-4-grid/css/grid.css'

// components
import LINK_HEADER from './components/link-header.vue'
import HEADER from './components/header.vue'
Vue.component('chocomart-link-header', LINK_HEADER)
Vue.component('chocomart-header', HEADER)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
