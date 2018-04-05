import Error404 from '@/components/Error404'
import Error401 from '@/components/Error401'
import Error400 from '@/components/Error400'
import Error403 from '@/components/Error403'
import Error500 from '@/components/Error500'
import Error503 from '@/components/Error503'
import PageFrame from '@/components/PageFrame'

const components = [
  Error404,
  Error401,
  Error400,
  Error403,
  Error500,
  Error503,
  PageFrame
]

const install = Vue => {
  components.forEach(Component => {
    Vue.component(Component.name, Component)
  })
}

export {
  Error404,
  Error401,
  Error400,
  Error403,
  Error500,
  Error503,
  PageFrame
}

export default {
  install
}
