import App from '@/App'

const components = [
  App
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

export {
  App
}

export default {
  install
}
