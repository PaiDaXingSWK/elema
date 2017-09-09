// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from './components/goods/goods.vue'
import seller from './components/seller/seller.vue'
import VueResource from 'vue-resource'
import ratings from './components/tatings/ratings.vue'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false
/* eslint-disable no-new */
const routes = [
  {
    path: '/',
    name: 'index',
    component: App,
    children: [{path: '/goods', component: goods}, {path: '/seller', component: seller}, {
      path: '/ratings', component: ratings
    }]
  }
]
let router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

new Vue({
  router
}).$mount('#app')
router.push('/goods')
