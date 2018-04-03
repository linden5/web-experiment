import { Home, Entrance } from '@gfloan/app.frontend.web.module.home'

export default {
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Entrance',
      component: Entrance
    }
  ]
}
