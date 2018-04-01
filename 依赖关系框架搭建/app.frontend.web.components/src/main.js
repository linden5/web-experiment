import Logo from '@/components/Logo'

const components = [
  Logo
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

export {
  Logo
}

export default {
  install
}
