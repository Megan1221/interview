/* eslint-disable no-extend-native */
// eslint-disable-next-line import/named
import { expect, test } from 'vitest'
import { myApply } from './myApply'

Function.prototype.myApply = myApply
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
test('apply', () => {
  expect(a.sayName(...params)).toEqual([a.name, ...params])
  expect(a.sayName.apply(b, params)).toEqual([b.name, ...params])
})

test('myApply', () => {
  const beforeCnt = Reflect.ownKeys(b).length
  expect(a.sayName.myApply(b, params)).toEqual([b.name, ...params])
  const afterCnt = Reflect.ownKeys(b).length
  expect(afterCnt).toBe(beforeCnt)
  const obj = {}
  obj.myApply = myApply
  expect(() => obj.myApply(b, params)).toThrowError(/^Type Error: must be called by a function$/)
})
