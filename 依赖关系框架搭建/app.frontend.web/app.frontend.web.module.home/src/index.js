import Home from '@/components/Home'
import Entrance from '@/components/Entrance'
import PageFrame from '@/components/PageFrame'

const components = [
  Home,
  Entrance,
  PageFrame
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

export {
  Home,
  Entrance,
  PageFrame
}

export default {
  install
}
