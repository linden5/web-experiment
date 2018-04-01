// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import routes from '@gfloan/app.frontend.web.router'
import stores from '@gfloan/app.frontend.web.store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter(routes)
const store = new Vuex.Store(stores)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
