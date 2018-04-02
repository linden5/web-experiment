import Home from '@/components/Home'

const components = [
  Home
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

export {
  Home
}

export default {
  install
}
