// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// styles
import 'bootstrap-4-grid/css/grid.css'
import './assets/style/style.scss'
import 'styles/variables.scss'

// components
import LINK_HEADER from './components/link-header.vue'
import HEADER from './components/header.vue'
import FOOTER from './components/footer'
import CHOCO_ICONS from './components/choco-icons.vue'
import CATEGORY_CARD from './components/category-card.vue'
import PRODUCT from './components/product-card'
import INPUT_TEXT from './components/input-text.vue'
import SUBSCRIBE from './components/subscribe'
import ITEM_CARD from './components/item-card'
import HEADER_NAVIGATION from './components/header-navigation'
Vue.component('chocomart-link-header', LINK_HEADER)
Vue.component('chocomart-header', HEADER)
Vue.component('chocomart-footer', FOOTER)
Vue.component('chocomart-icon', CHOCO_ICONS)
Vue.component('category-card', CATEGORY_CARD)
Vue.component('chocomart-product', PRODUCT)
Vue.component('input-text', INPUT_TEXT)
Vue.component('chocomart-subscribe', SUBSCRIBE)
Vue.component('item-card', ITEM_CARD)
Vue.component('header-navigation', HEADER_NAVIGATION)
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
