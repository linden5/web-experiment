import { App, HelloWorld } from '@/../dist/index'
import { helloWorldTest } from './HelloWorld.spec'
import Vue from 'vue'

helloWorldTest(HelloWorld)

describe('dist App.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(App)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('img').id).toBe('logo')
    })
})