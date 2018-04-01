// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)
Vue.config.productionTip = false

var router = new VueRouter({
  routes: [
      {
        path: '/',
        name: 'index',
        component: HelloWorld
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
