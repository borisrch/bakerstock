import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'

import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuelidate)

Vue.http.options.root = 'https://vue-gym-ae33c.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

const router = new VueRouter({
  mode: 'history',
  routes: routes
});



new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})
val