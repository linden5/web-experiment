import store from '@/../dist/index'
import index from '@/index'

function test(store) {
    describe('store test', () => {
        it('state.count = 0', () => {
            expect(store.state.count).toBe(0)
        })
    })

    describe('store test', () => {
        it('state.mutations is not num', () => {
            store.state.count = 0
            store.mutations.increment(store.state)
            expect(store.state.count).toBe(1)
        })
    })
}

test(store)
test(index)

