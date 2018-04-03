import * as validation from '@/validation'

export function test (validation) {
    describe('validation/index test', () => {
        it('Should check whether email is valid', () => {
            expect(validation.isEmailValid('liuyunxng@foxmail.com')).toEqual(true)
            expect(validation.isEmailValid('liuyunxng@foxmail')).toEqual(false)
        })
    
        it('Should check whether ID number is valid', () => {
            expect(validation.isIDNumberValid('230125198508277070')).toEqual(true)
            expect(validation.isIDNumberValid('230125198508277079')).toEqual(false)
        })
    
        it('Should check whether cellphone number is valid', () => {
            expect(validation.isMobileNumberValid('18925089018')).toEqual(true)
            expect(validation.isMobileNumberValid('11109899876')).toEqual(false)
        })
    })
}

test(validation)

