import VueRouter from 'vue-router'
import router from '@/index'

export function test(router) {
    describe('Package bundle test', () => {
        it('exports should be an instance of VueRouter', () => {
            expect(router.routes.length > 0).toEqual(true)
        })
    })
}

test(router)
