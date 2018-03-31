import { validation } from '@/index'

describe('index export testing', () => {
    it('exported validation should has properties', () => {
        expect(Object.keys(validation).length).toBeGreaterThan(0)
    })
})