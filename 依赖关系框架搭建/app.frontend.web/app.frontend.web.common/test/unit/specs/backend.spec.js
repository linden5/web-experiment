import { dummy } from '@/backend'

describe('backend/index.dummy', () => {
    it('should return dummy infomation', () => {
        expect(dummy()).toEqual('This is a dummy callback function')
    })
})

