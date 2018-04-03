// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { NavBar, Icon } from 'vant'
import App from './App'
import Header from '@/components/Header'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false

Vue.use(NavBar).use(Icon)

var router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Header
    }
  ]
})

var store = new Vuex.Store({
  state: {
    title: '标题'
  },
  mutations: {
    setTitle (state, value) {
      state.title = value
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
