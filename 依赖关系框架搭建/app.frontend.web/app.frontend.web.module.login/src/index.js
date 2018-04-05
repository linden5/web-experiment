import Login from '@/components/Login'

const components = [
  Login
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

export {
  Login
}

export default {
  install
}
