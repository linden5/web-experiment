import { Error400, Error401, Error403, Error404, Error500, Error503 } from '@gfloan/app.frontend.web.common'
import { Home, Entrance, PageFrame } from '@gfloan/app.frontend.web.module.home'

var mainRoutes = {
  path: '/home',
  name: 'Home',
  component: PageFrame,
  children: [
    {
      path: '/',
      component: Home
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
