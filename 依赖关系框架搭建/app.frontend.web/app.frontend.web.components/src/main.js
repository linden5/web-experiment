import HeaderBar from '@/components/HeaderBar'

const components = [
  HeaderBar
]

const install = Vue => {
  components.forEach(Component => {
    Vue.component(Component.name, Component)
  })
}

export {
  HeaderBar
}

export default {
  install
}
