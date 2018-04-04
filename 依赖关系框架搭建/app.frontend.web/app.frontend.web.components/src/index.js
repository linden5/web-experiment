import HomeHeaderBar from '@/components/HomeHeaderBar'

const components = [
  HomeHeaderBar
]

const install = Vue => {
  components.forEach(Component => {
    Vue.component(Component.name, Component)
  })
}

export {
  HomeHeaderBar
}

export default {
  install
}
