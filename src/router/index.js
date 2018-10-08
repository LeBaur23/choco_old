import Vue from 'vue'
import Router from 'vue-router'
// Pages
import MainPage from '@/pages/main_page.vue'
// Test
import Test from '@/pages/test/style-testing.vue'

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
    }
  ]
})
