import { Logo } from '@/../dist/index'
import Vue from 'vue'

describe('fda Logo.vue', () => {
    it('should render correct contents', () => {
        console.log(Logo)
        const Constructor = Vue.extend(Logo)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('img').getAttribute('alt')).toBe('logo')
    })
})
