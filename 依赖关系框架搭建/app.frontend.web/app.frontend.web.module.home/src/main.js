import Home from '@/components/Home'
import Entrance from '@/components/Entrance'

const components = [
  Home,
  Entrance
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

export {
  Home,
  Entrance
}

export default {
  install
}
