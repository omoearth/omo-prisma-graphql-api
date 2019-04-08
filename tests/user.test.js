import { getFirstName, isValidPassword } from '../src/utils/user'

test('first test', () => {
    const firstname = getFirstName('Sam Andert')
    expect(firstname).toBe('Sam')
})

test('should reject password shorter than 8 characters',() => {
    const isValid = isValidPassword('123456')
    expect(isValid).toBe(false)
})

test('should reject password contains password',() => {
    const isValid = isValidPassword('Password1234')
    expect(isValid).toBe(false)
})