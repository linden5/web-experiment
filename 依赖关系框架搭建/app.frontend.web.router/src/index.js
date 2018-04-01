import Vue from 'vue'
import Router from 'vue-router'
import { App, HelloWorld } from '@gfloan/app.frontend.web.components'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
