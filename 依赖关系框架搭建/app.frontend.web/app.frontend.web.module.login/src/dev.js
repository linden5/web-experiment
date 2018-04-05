// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Button, NavBar, Icon, Toast, Swipe, SwipeItem, Panel, Row, Col, Tabbar, TabbarItem, Tag, Field, Dialog } from 'vant'
import Login from '@/components/Login'
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
  .use(Tag).use(Field)

Vue.use(VueRouter)
Vue.prototype.$vant = {
  Toast,
  Dialog
}
Vue.config.productionTip = false

var router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Login
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
