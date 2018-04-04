// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Error404 from '@/components/Error404'
import Error401 from '@/components/Error401'
import Error400 from '@/components/Error400'
import Error403 from '@/components/Error403'
import Error500 from '@/components/Error500'
import Error503 from '@/components/Error503'

import App from './App'

Vue.use(VueRouter)
Vue.config.productionTip = false

var router = new VueRouter({
  routes: [
    {
      path: '/404',
      name: '404',
      component: Error404
    },
    {
      path: '/401',
      name: '401',
      component: Error401
    },
    {
      path: '/403',
      name: '403',
      component: Error403
    },
    {
      path: '/400',
      name: '400',
      component: Error400
    },
    {
      path: '/500',
      name: '500',
      component: Error500
    },
    {
      path: '/503',
      name: '503',
      component: Error503
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
