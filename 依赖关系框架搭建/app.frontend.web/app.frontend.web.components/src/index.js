import '@/assets/style/header.css'
import HomeHeaderBar from '@/components/HomeHeaderBar'
import NavHeaderBar from '@/components/NavHeaderBar'

const components = [
  HomeHeaderBar,
  NavHeaderBar
]

const install = Vue => {
  components.forEach(Component => {
    Vue.component(Component.name, Component)
  })
}

export {
  HomeHeaderBar,
  NavHeaderBar
}

export default {
  install
}
