import VueRouter from 'vue-router'
import router from '@/../dist/index.js'

describe('Package bundle test', () => {
    it('exports should be an instance of VueRouter', () => {
        expect(router instanceof VueRouter).toEqual(true)
    })
})
