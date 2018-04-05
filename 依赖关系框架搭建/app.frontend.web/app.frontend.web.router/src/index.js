import { Error400, Error401, Error403, Error404, Error500, Error503, PageFrame } from '@gfloan/app.frontend.web.common'
import { Home, Entrance, Finance } from '@gfloan/app.frontend.web.module.home'

// 通过配置环境变量从DefinePlugin传入来控制语言
const title = require('./locale/title_' + process.env.lang + '.json')

/** 
 * @function routeTitleFetch 通过route的名字来取得其标题
 * @param {Route} route 一个路由对象，包含name属性
 * @returns {string} 路由的标题
 */
export function routeTitleFetch(route) {
  return title[route.name]
}

var mainRoutes = {
  path: '/home',
  component: PageFrame,
  children: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/finance',
      name: 'Finance',
      component: Finance
    }
  ]
}

export default {
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
    },
    {
      path: '/',
      name: 'Entrance',
      component: Entrance
    },
    {
      path: '*',
      name: 'default',
      component: Error404
    },
    mainRoutes
  ]
}
