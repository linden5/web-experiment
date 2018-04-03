// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Button, NavBar, Icon, Toast, Swipe, SwipeItem, Panel, Row, Col, Tabbar, TabbarItem, Tag } from 'vant'
import Home from '@/components/Home'
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

Vue.use(VueRouter)
Vue.config.productionTip = false

var router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
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
