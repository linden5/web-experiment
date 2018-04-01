import HelloWorld from '@/components/HelloWorld'

const components = [
  HelloWorld
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

export {
  HelloWorld
}

export default {
  install
}
