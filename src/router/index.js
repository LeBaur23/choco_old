import Vue from 'vue'
import Router from 'vue-router'
// Pages
import MainPage from '@/pages/main_page.vue'
import ProductPage from '@/pages/product_page.vue'
import BasketPage from '@/pages/basket_page.vue'
// Test
import Test from '@/pages/test/style-testing.vue'
import BaukTest from '@/pages/test/bauka-test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/bauka',
      name: 'Bauka',
      component: BaukTest
    },
    {
      path: '/product/:id',
      name: 'product_page',
      component: ProductPage
    },
    {
      path: '/basket',
      name: 'basket_page',
      component: BasketPage
    }
  ]
})
