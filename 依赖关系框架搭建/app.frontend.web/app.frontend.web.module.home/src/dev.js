// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import { Button, NavBar, Icon, Toast, Swipe, SwipeItem, Panel, Row, Col, Tabbar, TabbarItem, Tag, Tab, Tabs } from 'vant'
import Home from '@/components/Home'
import Finance from '@/components/Finance'
import Entrance from '@/components/Entrance'
import App from './App'

Vue.use(Button)
  .use(NavBar)
  .use(Icon)
  .use(Toast)
  .use(Swipe)
  .use(SwipeItem)
  .use(Panel)
  .use(Row).use(Col)
  .use(Tabbar).use(TabbarItem)
  .use(Tag)
  .use(Tab).use(Tabs)

Vue.prototype.$axios = axios

Vue.use(VueRouter)
Vue.config.productionTip = false

var router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/loading',
      name: 'loading',
      component: Entrance
    },
    {
      path: '/finance',
      name: 'finance',
      component: Finance
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
