import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

export function helloWorldTest(HelloWorld) {
  describe('HelloWorld.vue', () => {
    it('should render correct contents', () => {
      const Constructor = Vue.extend(HelloWorld)
      const vm = new Constructor().$mount()
      const el = vm.$el
      expect(el.querySelector('.hello h1').textContent)
        .toEqual('Welcome to Your Vue.js App')
      expect(el.querySelector('img').getAttribute('alt')).toEqual('logo')
    })
  })
}

helloWorldTest(HelloWorld)
