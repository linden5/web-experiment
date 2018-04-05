// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@gfloan/app.frontend.web.resource/assets/style/index.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import {
  Button, NavBar, Icon, Toast, Swipe, SwipeItem, Panel, CellGroup,
  Row, Col, Tabbar, TabbarItem, Tag, Tab, Tabs, Dialog, Field
} from 'vant'

import App from './App'
import Components from '@gfloan/app.frontend.web.components'
import routes, { routeTitleFetch } from '@gfloan/app.frontend.web.router'
import stores, { MUTATION } from '@gfloan/app.frontend.web.store'
import utils from '@gfloan/app.frontend.web.utils'

// 库引入
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
  .use(Field).use(CellGroup)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.prototype.$axios = axios
Vue.prototype.$utils = utils
Vue.prototype.$vant = {
  Toast,
  Dialog
}
Vue.config.productionTip = false

// 本项目开发内容引入
Vue.use(Components)
const router = new VueRouter(routes)
const store = new Vuex.Store(stores)

router.beforeEach((to, from, next) => {
  var title = routeTitleFetch(to)
  store.commit(MUTATION.SET_TITLE, title)
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
