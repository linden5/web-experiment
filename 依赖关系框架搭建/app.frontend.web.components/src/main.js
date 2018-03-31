import HelloWorld from '@/components/HelloWorld'
import App from '@/App'

const components = [
  HelloWorld,
  App
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
}

export {
  HelloWorld,
  App
}

export default {
  install
}