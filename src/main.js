// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// styles
import 'bootstrap-4-grid/css/grid.css'
import './assets/style/style.scss'

// components
import LINK_HEADER from './components/link-header.vue'
import HEADER from './components/header.vue'
import CHOCO_ICONS from './components/choco-icons.vue'
import PRODUCT from './components/product-card'
Vue.component('chocomart-link-header', LINK_HEADER)
Vue.component('chocomart-header', HEADER)
Vue.component('chocomart-icon', CHOCO_ICONS)
Vue.component('chocomart-product', PRODUCT)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
