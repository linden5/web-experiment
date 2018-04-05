import Vue from 'vue'
import Home from '@/components/Home'

export function helloWorldTest(Home) {
  describe('HelloWorld.vue', () => {
    it('should render correct contents', () => {
      const Constructor = Vue.extend(Home)
      const vm = new Constructor().$mount()
      const el = vm.$el
      expect(el.querySelector('#test-success').textContent)
        .toEqual('成功')
    })
  })
}

helloWorldTest(Home)
