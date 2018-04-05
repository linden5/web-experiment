import Home from '@/components/Home'
import Entrance from '@/components/Entrance'
import Finance from '@/components/Finance'

const components = [
  Home,
  Entrance,
  Finance
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

export {
  Home,
  Entrance,
  Finance
}

export default {
  install
}
