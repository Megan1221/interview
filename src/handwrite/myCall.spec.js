/* eslint-disable no-extend-native */
// eslint-disable-next-line import/named
import { expect, test } from 'vitest'
import { myCall } from './myCall'

Function.prototype.myCall = myCall
class A {
  constructor() {
    this.name = 'a'
  }

  sayName(...params) {
    return [this.name, ...params]
  }
}
class B {
  constructor() {
    this.name = 'b'
  }
}
const a = new A()
const b = new B()
const params = [1, 2, 3]
test('call', () => {
  expect(a.sayName(...params)).toEqual([a.name, ...params])
  expect(a.sayName.call(b, ...params)).toEqual([b.name, ...params])
})

test('myCall', () => {
  const beforeCnt = Reflect.ownKeys(b).length
  expect(a.sayName.myCall(b, ...params)).toEqual([b.name, ...params])
  const afterCnt = Reflect.ownKeys(b).length
  expect(afterCnt).toBe(beforeCnt)
  const obj = {}
  obj.myCall = myCall
  expect(() => obj.myCall(b, ...params)).toThrowError(/^Type Error: must be called by a function$/)
})
