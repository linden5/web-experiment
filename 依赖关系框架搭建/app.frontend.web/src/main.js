// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { Button, NavBar, Icon, Toast, Swipe, SwipeItem, Panel, Row, Col, Tabbar, TabbarItem, Tag } from 'vant'

import App from './App'
import Components from '@gfloan/app.frontend.web.components'
import routes, { routeTitleFetch } from '@gfloan/app.frontend.web.router'
import stores, { MUTATION } from '@gfloan/app.frontend.web.store'

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

Vue.use(Components)
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

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
